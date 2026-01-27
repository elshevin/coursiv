import { Request, Response } from 'express';
import crypto from 'crypto';
import { updateUserSubscription, updateUserSubscriptionByAccountId, saveAccountIdMapping } from './db-pg';

/**
 * FastSpring Webhook Handler
 * Documentation: https://fastspring.com/docs/getting-started-with-webhooks/
 */
export async function handleFastSpringWebhook(req: Request, res: Response) {
  console.log('[FastSpring Webhook] ========== Received webhook request ==========');
  
  const secret = process.env.FASTSPRING_WEBHOOK_SECRET;
  const signature = req.headers['x-fs-signature'] as string;

  console.log('[FastSpring Webhook] Secret configured:', !!secret);
  console.log('[FastSpring Webhook] Signature received:', !!signature);

  // 1. Verify HMAC signature if secret is configured
  if (secret && signature) {
    // Use raw body for signature verification (set by middleware in index.ts)
    const rawBody = (req as any).rawBody;
    if (!rawBody) {
      console.error('[FastSpring Webhook] No raw body available for signature verification');
      return res.status(500).send('Server configuration error');
    }
    
    console.log('[FastSpring Webhook] Raw body length:', rawBody.length);
    
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(rawBody).digest('base64');
    
    console.log('[FastSpring Webhook] Computed signature:', digest);
    console.log('[FastSpring Webhook] Received signature:', signature);
    
    if (digest !== signature) {
      console.error('[FastSpring Webhook] Invalid signature');
      return res.status(401).send('Invalid signature');
    }
    console.log('[FastSpring Webhook] ✓ Signature verified successfully');
  } else if (secret && !signature) {
    console.warn('[FastSpring Webhook] Secret configured but no signature received - rejecting');
    return res.status(401).send('Missing signature');
  } else {
    console.log('[FastSpring Webhook] No secret configured, skipping signature verification');
  }

  // Log the full body for debugging
  console.log('[FastSpring Webhook] Full body:', JSON.stringify(req.body, null, 2));

  // FastSpring sends events array
  const events = req.body.events || [req.body];
  
  if (!events || !Array.isArray(events) || events.length === 0) {
    console.error('[FastSpring Webhook] Invalid payload - no events found');
    return res.status(400).send('Invalid webhook payload');
  }

  console.log(`[FastSpring Webhook] Processing ${events.length} event(s)`);

  for (const event of events) {
    const eventType = event.type || event.event;
    const data = event.data || event;
    
    console.log(`[FastSpring Webhook] ===== Processing event: ${eventType} =====`);
    console.log(`[FastSpring Webhook] Event data keys:`, Object.keys(data));

    try {
      switch (eventType) {
        case 'order.completed':
        case 'order.complete':
          await handleOrderCompleted(data);
          break;
        case 'subscription.activated':
        case 'subscription.active':
          await handleSubscriptionActivated(data);
          break;
        case 'subscription.deactivated':
        case 'subscription.deactive':
          await handleSubscriptionDeactivated(data);
          break;
        case 'subscription.canceled':
        case 'subscription.cancelled':
          await handleSubscriptionCanceled(data);
          break;
        default:
          console.log(`[FastSpring Webhook] Unhandled event type: ${eventType}`);
      }
    } catch (error) {
      console.error(`[FastSpring Webhook] Error processing event ${eventType}:`, error);
    }
  }

  console.log('[FastSpring Webhook] ========== Webhook processing complete ==========');
  res.status(200).send('OK');
}

/**
 * Extract email from webhook data
 * Priority: tags.registeredEmail > customer.email > recipients[0].recipient.email > account.contact.email
 */
function extractEmail(data: any): string | null {
  console.log('[FastSpring Webhook] Extracting email from data...');
  
  // Log all available tags for debugging
  console.log('[FastSpring Webhook] Tags in data:', JSON.stringify(data.tags || 'no tags'));
  
  // First priority: use registeredEmail from tags (this is the user's Learnway account email)
  if (data.tags?.registeredEmail) {
    console.log('[FastSpring Webhook] ✓ Found registeredEmail in tags:', data.tags.registeredEmail);
    return data.tags.registeredEmail;
  }
  
  // Second priority: customer.email (from order.completed)
  if (data.customer?.email) {
    console.log('[FastSpring Webhook] ✓ Found customer.email:', data.customer.email);
    return data.customer.email;
  }
  
  // Third priority: recipients array (from order.completed)
  if (data.recipients && data.recipients.length > 0) {
    const recipientEmail = data.recipients[0]?.recipient?.email;
    if (recipientEmail) {
      console.log('[FastSpring Webhook] ✓ Found recipient email:', recipientEmail);
      return recipientEmail;
    }
  }
  
  // Fourth priority: account contact (if account is an object)
  if (typeof data.account === 'object' && data.account?.contact?.email) {
    console.log('[FastSpring Webhook] ✓ Found account.contact.email:', data.account.contact.email);
    return data.account.contact.email;
  }
  
  // Fifth priority: direct email field
  if (data.email) {
    console.log('[FastSpring Webhook] ✓ Found direct email:', data.email);
    return data.email;
  }
  
  console.log('[FastSpring Webhook] ✗ No email found in data');
  return null;
}

/**
 * Extract FastSpring account ID from webhook data
 */
function extractAccountId(data: any): string | null {
  // Account can be a string ID or an object with id
  if (typeof data.account === 'string') {
    console.log('[FastSpring Webhook] ✓ Found account ID (string):', data.account);
    return data.account;
  }
  if (typeof data.account === 'object' && data.account?.id) {
    console.log('[FastSpring Webhook] ✓ Found account.id:', data.account.id);
    return data.account.id;
  }
  if (data.accountId) {
    console.log('[FastSpring Webhook] ✓ Found accountId:', data.accountId);
    return data.accountId;
  }
  
  console.log('[FastSpring Webhook] ✗ No account ID found');
  return null;
}

/**
 * Extract subscription plan from webhook data
 */
function extractPlan(data: any): 'monthly' | 'yearly' {
  // Check product field directly
  const product = (data.product || '').toLowerCase();
  console.log('[FastSpring Webhook] Product field:', product);
  
  if (product.includes('year')) {
    console.log('[FastSpring Webhook] ✓ Detected yearly plan');
    return 'yearly';
  }
  if (product.includes('month')) {
    console.log('[FastSpring Webhook] ✓ Detected monthly plan');
    return 'monthly';
  }
  
  // Check items array
  const items = data.items || [];
  for (const item of items) {
    const itemProduct = (item.product || item.productPath || item.path || '').toLowerCase();
    console.log('[FastSpring Webhook] Item product:', itemProduct);
    if (itemProduct.includes('year')) {
      console.log('[FastSpring Webhook] ✓ Detected yearly plan from items');
      return 'yearly';
    }
    if (itemProduct.includes('month')) {
      console.log('[FastSpring Webhook] ✓ Detected monthly plan from items');
      return 'monthly';
    }
  }
  
  console.log('[FastSpring Webhook] ✗ Could not determine plan, defaulting to monthly');
  return 'monthly';
}

async function handleOrderCompleted(data: any) {
  console.log('[FastSpring Webhook] --- handleOrderCompleted ---');
  
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  const plan = extractPlan(data);
  const subscriptionId = data.items?.[0]?.subscription || data.id;
  
  console.log(`[FastSpring Webhook] Order completed summary:`);
  console.log(`  - Email: ${email}`);
  console.log(`  - AccountId: ${accountId}`);
  console.log(`  - Plan: ${plan}`);
  console.log(`  - SubscriptionId: ${subscriptionId}`);
  
  if (email) {
    // Save account ID mapping for future subscription events
    if (accountId) {
      console.log(`[FastSpring Webhook] Saving account ID mapping: ${accountId} -> ${email}`);
      await saveAccountIdMapping(accountId, email);
    }
    console.log(`[FastSpring Webhook] Updating subscription for email: ${email}`);
    await updateUserSubscription(email, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] ✓ Successfully updated subscription for ${email}`);
  } else if (accountId) {
    // Try to find user by account ID
    console.log(`[FastSpring Webhook] No email found, trying to update by accountId: ${accountId}`);
    await updateUserSubscriptionByAccountId(accountId, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] ✓ Updated subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] ✗ No email or accountId found in order data - cannot update subscription');
  }
}

async function handleSubscriptionActivated(data: any) {
  console.log('[FastSpring Webhook] --- handleSubscriptionActivated ---');
  
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  const subscriptionId = data.id || data.subscription;
  const plan = extractPlan(data);

  console.log(`[FastSpring Webhook] Subscription activated summary:`);
  console.log(`  - Email: ${email}`);
  console.log(`  - AccountId: ${accountId}`);
  console.log(`  - Plan: ${plan}`);
  console.log(`  - SubscriptionId: ${subscriptionId}`);

  if (email) {
    // Save account ID mapping for future events
    if (accountId) {
      console.log(`[FastSpring Webhook] Saving account ID mapping: ${accountId} -> ${email}`);
      await saveAccountIdMapping(accountId, email);
    }
    console.log(`[FastSpring Webhook] Updating subscription for email: ${email}`);
    await updateUserSubscription(email, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] ✓ Successfully activated subscription for ${email}`);
  } else if (accountId) {
    // Try to find user by account ID
    console.log(`[FastSpring Webhook] No email found, trying to update by accountId: ${accountId}`);
    await updateUserSubscriptionByAccountId(accountId, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] ✓ Activated subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] ✗ No email or accountId found in subscription data - cannot update subscription');
  }
}

async function handleSubscriptionDeactivated(data: any) {
  console.log('[FastSpring Webhook] --- handleSubscriptionDeactivated ---');
  
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  
  console.log(`[FastSpring Webhook] Subscription deactivated - Email: ${email}, AccountId: ${accountId}`);
  
  if (email) {
    await updateUserSubscription(email, 'expired');
    console.log(`[FastSpring Webhook] ✓ Deactivated subscription for ${email}`);
  } else if (accountId) {
    await updateUserSubscriptionByAccountId(accountId, 'expired');
    console.log(`[FastSpring Webhook] ✓ Deactivated subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] ✗ No email or accountId found - cannot deactivate subscription');
  }
}

async function handleSubscriptionCanceled(data: any) {
  console.log('[FastSpring Webhook] --- handleSubscriptionCanceled ---');
  
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  
  console.log(`[FastSpring Webhook] Subscription canceled - Email: ${email}, AccountId: ${accountId}`);
  
  if (email) {
    await updateUserSubscription(email, 'cancelled');
    console.log(`[FastSpring Webhook] ✓ Canceled subscription for ${email}`);
  } else if (accountId) {
    await updateUserSubscriptionByAccountId(accountId, 'cancelled');
    console.log(`[FastSpring Webhook] ✓ Canceled subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] ✗ No email or accountId found - cannot cancel subscription');
  }
}

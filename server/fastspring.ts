import { Request, Response } from 'express';
import crypto from 'crypto';
import { updateUserSubscription, updateUserSubscriptionByAccountId, saveAccountIdMapping } from './db-pg';

/**
 * FastSpring Webhook Handler
 * Documentation: https://fastspring.com/docs/getting-started-with-webhooks/
 */
export async function handleFastSpringWebhook(req: Request, res: Response) {
  console.log('[FastSpring Webhook] ========== Received webhook request ==========');
  console.log('[FastSpring Webhook] Headers:', JSON.stringify(req.headers, null, 2));
  console.log('[FastSpring Webhook] Body:', JSON.stringify(req.body, null, 2));

  const secret = process.env.FASTSPRING_WEBHOOK_SECRET;
  const signature = req.headers['x-fs-signature'] as string;

  // 1. Verify HMAC signature if secret is configured
  if (secret && signature) {
    // Use raw body for signature verification (set by middleware in index.ts)
    const rawBody = (req as any).rawBody;
    if (!rawBody) {
      console.error('[FastSpring Webhook] No raw body available for signature verification');
      return res.status(500).send('Server configuration error');
    }
    
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(rawBody).digest('base64');
    
    if (digest !== signature) {
      console.error('[FastSpring Webhook] Invalid signature. Expected:', digest, 'Got:', signature);
      return res.status(401).send('Invalid signature');
    }
    console.log('[FastSpring Webhook] Signature verified successfully');
  } else if (secret) {
    console.warn('[FastSpring Webhook] Secret configured but no signature received');
  } else {
    console.log('[FastSpring Webhook] No secret configured, skipping signature verification');
  }

  // FastSpring sends events array
  const events = req.body.events || [req.body];
  
  if (!events || !Array.isArray(events) || events.length === 0) {
    console.error('[FastSpring Webhook] Invalid payload - no events found');
    return res.status(400).send('Invalid webhook payload');
  }

  console.log(`[FastSpring Webhook] Processing ${events.length} events`);

  for (const event of events) {
    const eventType = event.type || event.event;
    const data = event.data || event;
    
    console.log(`[FastSpring Webhook] ===== Processing event: ${eventType} =====`);

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

  res.status(200).send('OK');
}

function extractEmail(data: any): string | null {
  // First priority: use registeredEmail from tags (this is the user's Learnway account email)
  if (data.tags?.registeredEmail) {
    console.log('[FastSpring Webhook] Using registeredEmail from tags:', data.tags.registeredEmail);
    return data.tags.registeredEmail;
  }
  
  // Try various paths where email might be
  const email = data.customer?.email || 
         data.account?.contact?.email ||
         data.recipient?.email ||
         data.email ||
         null;
  
  console.log('[FastSpring Webhook] Extracted email:', email);
  return email;
}

function extractAccountId(data: any): string | null {
  return data.account || data.accountId || null;
}

function extractPlan(data: any): 'monthly' | 'yearly' {
  // Check product field directly
  const product = data.product || '';
  if (product.toLowerCase().includes('year')) return 'yearly';
  if (product.toLowerCase().includes('month')) return 'monthly';
  
  // Check items array
  const items = data.items || [];
  for (const item of items) {
    const itemProduct = item.product || item.productPath || item.path || '';
    if (itemProduct.toLowerCase().includes('year')) return 'yearly';
    if (itemProduct.toLowerCase().includes('month')) return 'monthly';
  }
  
  // Default to monthly if can't determine
  return 'monthly';
}

async function handleOrderCompleted(data: any) {
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  const plan = extractPlan(data);
  const subscriptionId = data.id || data.subscription;
  
  console.log(`[FastSpring Webhook] Order completed - Email: ${email}, AccountId: ${accountId}, Plan: ${plan}`);
  
  if (email) {
    // Save account ID mapping for future subscription events
    if (accountId) {
      await saveAccountIdMapping(accountId, email);
    }
    await updateUserSubscription(email, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] Successfully updated subscription for ${email}`);
  } else if (accountId) {
    // Try to find user by account ID
    await updateUserSubscriptionByAccountId(accountId, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] Updated subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] No email or accountId found in order data');
  }
}

async function handleSubscriptionActivated(data: any) {
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  const subscriptionId = data.id || data.subscription;
  const plan = extractPlan(data);

  console.log(`[FastSpring Webhook] Subscription activated - Email: ${email}, AccountId: ${accountId}, Plan: ${plan}`);

  if (email) {
    // Save account ID mapping for future events
    if (accountId) {
      await saveAccountIdMapping(accountId, email);
    }
    await updateUserSubscription(email, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] Successfully activated subscription for ${email}`);
  } else if (accountId) {
    // Try to find user by account ID
    await updateUserSubscriptionByAccountId(accountId, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] Activated subscription by accountId: ${accountId}`);
  } else {
    console.error('[FastSpring Webhook] No email or accountId found in subscription data');
  }
}

async function handleSubscriptionDeactivated(data: any) {
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  
  console.log(`[FastSpring Webhook] Subscription deactivated - Email: ${email}, AccountId: ${accountId}`);
  
  if (email) {
    await updateUserSubscription(email, 'expired');
  } else if (accountId) {
    await updateUserSubscriptionByAccountId(accountId, 'expired');
  }
}

async function handleSubscriptionCanceled(data: any) {
  const email = extractEmail(data);
  const accountId = extractAccountId(data);
  
  console.log(`[FastSpring Webhook] Subscription canceled - Email: ${email}, AccountId: ${accountId}`);
  
  if (email) {
    await updateUserSubscription(email, 'cancelled');
  } else if (accountId) {
    await updateUserSubscriptionByAccountId(accountId, 'cancelled');
  }
}

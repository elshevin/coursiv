import { Request, Response } from 'express';
import crypto from 'crypto';
import { updateUserSubscription } from './db-pg';

/**
 * FastSpring Webhook Handler
 * Documentation: https://fastspring.com/docs/getting-started-with-webhooks/
 */
export async function handleFastSpringWebhook(req: Request, res: Response) {
  console.log('[FastSpring Webhook] Received webhook request');
  console.log('[FastSpring Webhook] Headers:', JSON.stringify(req.headers, null, 2));
  console.log('[FastSpring Webhook] Body:', JSON.stringify(req.body, null, 2));

  const secret = process.env.FASTSPRING_WEBHOOK_SECRET;
  const signature = req.headers['x-fs-signature'] as string;

  // 1. Verify HMAC signature if secret is configured
  if (secret && signature) {
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(JSON.stringify(req.body)).digest('base64');
    
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

  // FastSpring sends events array or single event
  const events = req.body.events || [req.body];
  
  if (!events || !Array.isArray(events) || events.length === 0) {
    console.error('[FastSpring Webhook] Invalid payload - no events found');
    return res.status(400).send('Invalid webhook payload');
  }

  console.log(`[FastSpring Webhook] Processing ${events.length} events`);

  for (const event of events) {
    const eventType = event.type || event.event;
    const data = event.data || event;
    
    console.log(`[FastSpring Webhook] Event type: ${eventType}`);
    console.log(`[FastSpring Webhook] Event data:`, JSON.stringify(data, null, 2));

    try {
      // Handle various event types
      if (eventType === 'order.completed' || eventType === 'order.complete') {
        await handleOrderCompleted(data);
      } else if (eventType === 'subscription.activated' || eventType === 'subscription.active') {
        await handleSubscriptionActivated(data);
      } else if (eventType === 'subscription.deactivated' || eventType === 'subscription.deactive') {
        await handleSubscriptionDeactivated(data);
      } else if (eventType === 'subscription.canceled' || eventType === 'subscription.cancelled') {
        await handleSubscriptionCanceled(data);
      } else {
        // Try to handle as order completed if we have order data
        if (data.customer?.email || data.account?.email || data.email) {
          console.log('[FastSpring Webhook] Attempting to process as order...');
          await handleOrderCompleted(data);
        } else {
          console.log(`[FastSpring Webhook] Unhandled event type: ${eventType}`);
        }
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
  return data.customer?.email || 
         data.account?.email || 
         data.email || 
         data.recipient?.email ||
         data.tags?.email ||
         null;
}

function extractPlan(data: any): 'monthly' | 'yearly' | undefined {
  // Check items array
  const items = data.items || [];
  for (const item of items) {
    const product = item.product || item.productPath || item.path || '';
    if (product.toLowerCase().includes('year')) return 'yearly';
    if (product.toLowerCase().includes('month')) return 'monthly';
  }
  
  // Check product directly
  const product = data.product || data.productPath || '';
  if (product.toLowerCase().includes('year')) return 'yearly';
  if (product.toLowerCase().includes('month')) return 'monthly';
  
  // Check subscription data
  const subscription = data.subscription || {};
  const subProduct = subscription.product || subscription.productPath || '';
  if (subProduct.toLowerCase().includes('year')) return 'yearly';
  if (subProduct.toLowerCase().includes('month')) return 'monthly';
  
  return undefined;
}

async function handleOrderCompleted(data: any) {
  const email = extractEmail(data);
  console.log(`[FastSpring Webhook] Order completed - Email: ${email}`);
  
  if (!email) {
    console.error('[FastSpring Webhook] No email found in order data');
    return;
  }

  const plan = extractPlan(data);
  console.log(`[FastSpring Webhook] Detected plan: ${plan}`);

  // Update subscription regardless of plan detection
  await updateUserSubscription(email, 'active', plan || 'monthly');
  console.log(`[FastSpring Webhook] Successfully updated subscription for ${email}`);
}

async function handleSubscriptionActivated(data: any) {
  const email = extractEmail(data);
  const subscriptionId = data.id || data.subscriptionId;
  const plan = extractPlan(data);

  console.log(`[FastSpring Webhook] Subscription activated - Email: ${email}, Plan: ${plan}`);

  if (email) {
    await updateUserSubscription(email, 'active', plan, subscriptionId);
    console.log(`[FastSpring Webhook] Successfully activated subscription for ${email}`);
  }
}

async function handleSubscriptionDeactivated(data: any) {
  const email = extractEmail(data);
  console.log(`[FastSpring Webhook] Subscription deactivated - Email: ${email}`);
  
  if (email) {
    await updateUserSubscription(email, 'expired');
  }
}

async function handleSubscriptionCanceled(data: any) {
  const email = extractEmail(data);
  console.log(`[FastSpring Webhook] Subscription canceled - Email: ${email}`);
  
  if (email) {
    await updateUserSubscription(email, 'cancelled');
  }
}

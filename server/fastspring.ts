import { Request, Response } from 'express';
import crypto from 'crypto';
import { updateUserSubscription } from './db-pg';

/**
 * FastSpring Webhook Handler
 * Documentation: https://fastspring.com/docs/getting-started-with-webhooks/
 */
export async function handleFastSpringWebhook(req: Request, res: Response) {
  const secret = process.env.FASTSPRING_WEBHOOK_SECRET;
  const signature = req.headers['x-fs-signature'] as string;

  // 1. Verify HMAC signature if secret is configured
  if (secret && signature) {
    const hmac = crypto.createHmac('sha256', secret);
    const digest = hmac.update(JSON.stringify(req.body)).digest('base64');
    
    if (digest !== signature) {
      console.error('[FastSpring Webhook] Invalid signature');
      return res.status(401).send('Invalid signature');
    }
  } else if (secret) {
    console.warn('[FastSpring Webhook] Secret configured but no signature received');
    // In production, you might want to reject this, but for now we'll log it
  }

  const { events } = req.body;
  if (!events || !Array.isArray(events)) {
    return res.status(400).send('Invalid webhook payload');
  }

  console.log(`[FastSpring Webhook] Received ${events.length} events`);

  for (const event of events) {
    const { type, data } = event;
    console.log(`[FastSpring Webhook] Processing event: ${type}`);

    try {
      switch (type) {
        case 'order.completed':
          await handleOrderCompleted(data);
          break;
        case 'subscription.activated':
          await handleSubscriptionActivated(data);
          break;
        case 'subscription.deactivated':
          await handleSubscriptionDeactivated(data);
          break;
        case 'subscription.canceled':
          await handleSubscriptionCanceled(data);
          break;
        default:
          console.log(`[FastSpring Webhook] Unhandled event type: ${type}`);
      }
    } catch (error) {
      console.error(`[FastSpring Webhook] Error processing event ${type}:`, error);
    }
  }

  res.status(200).send('OK');
}

async function handleOrderCompleted(data: any) {
  const email = data.customer?.email || data.email;
  if (!email) return;

  // Check if it's a subscription order
  const items = data.items || [];
  for (const item of items) {
    const plan = item.product === 'monthly-plan' ? 'monthly' : 
                 item.product === 'yearly-plan' ? 'yearly' : undefined;
    
    if (plan) {
      await updateUserSubscription(email, 'active', plan);
    }
  }
}

async function handleSubscriptionActivated(data: any) {
  const email = data.customer?.email || data.email;
  const subscriptionId = data.id;
  const plan = data.product === 'monthly-plan' ? 'monthly' : 
               data.product === 'yearly-plan' ? 'yearly' : undefined;

  if (email) {
    await updateUserSubscription(email, 'active', plan as any, subscriptionId);
  }
}

async function handleSubscriptionDeactivated(data: any) {
  const email = data.customer?.email || data.email;
  if (email) {
    await updateUserSubscription(email, 'expired');
  }
}

async function handleSubscriptionCanceled(data: any) {
  const email = data.customer?.email || data.email;
  if (email) {
    await updateUserSubscription(email, 'cancelled');
  }
}

/**
 * Google Analytics 4 事件追踪工具
 * 用于追踪用户关键行为事件
 */

// 声明 gtag 函数类型
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
  }
}

/**
 * 发送 GA4 事件
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    console.log('[GA4] Event tracked:', eventName, params);
  }
}

// ============ 登录/注册相关事件 ============

/** 点击 Login 按钮（首页） */
export function trackLoginClick() {
  trackEvent('login_click', { page: 'landing' });
}

/** 点击 Start Quiz / Get Started 按钮 */
export function trackStartQuizClick(source: string = 'landing') {
  trackEvent('start_quiz_click', { source });
}

/** 登录成功 */
export function trackLoginSuccess() {
  trackEvent('login', { method: 'email' });
}

/** 注册成功 */
export function trackSignupSuccess() {
  trackEvent('sign_up', { method: 'email' });
}

// ============ Quiz 相关事件 ============

/** 进入 Quiz 页面 */
export function trackQuizPageView(step: number) {
  trackEvent('quiz_page_view', { step });
}

/** 完成 Quiz 问卷（到达注册页面） */
export function trackQuizComplete() {
  trackEvent('quiz_complete');
}

/** Quiz 中点击继续 */
export function trackQuizContinue(step: number) {
  trackEvent('quiz_continue', { step });
}

// ============ 订阅相关事件 ============

/** 订阅页面展示 */
export function trackSubscriptionPageView(source: string = 'onboarding') {
  trackEvent('subscription_page_view', { source });
}

/** 点击订阅 SKU */
export function trackSubscriptionSkuClick(plan: 'monthly' | 'yearly', price: number) {
  trackEvent('subscription_sku_click', { plan, price });
}

/** 开始订阅（点击订阅按钮） */
export function trackSubscriptionStart(plan: 'monthly' | 'yearly', price: number) {
  trackEvent('begin_checkout', { 
    currency: 'USD',
    value: price,
    items: [{
      item_name: `Learnway ${plan === 'yearly' ? 'Yearly' : 'Monthly'} Plan`,
      price: price,
      quantity: 1
    }]
  });
}

/** 订阅成功 */
export function trackSubscriptionSuccess(plan: 'monthly' | 'yearly', price: number) {
  trackEvent('purchase', {
    currency: 'USD',
    value: price,
    transaction_id: `sub_${Date.now()}`,
    items: [{
      item_name: `Learnway ${plan === 'yearly' ? 'Yearly' : 'Monthly'} Plan`,
      price: price,
      quantity: 1
    }]
  });
}

/** 跳过订阅 */
export function trackSubscriptionSkip() {
  trackEvent('subscription_skip');
}

// ============ 订阅弹窗相关事件 ============

/** 订阅弹窗展示 */
export function trackSubscriptionModalView() {
  trackEvent('subscription_modal_view');
}

/** 订阅弹窗中点击 SKU */
export function trackSubscriptionModalSkuClick(plan: 'monthly' | 'yearly') {
  trackEvent('subscription_modal_sku_click', { plan });
}

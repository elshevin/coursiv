import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function SubscriptionTerms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full border-b border-[#E2E5E9] px-4 py-4">
        <div className="max-w-[800px] mx-auto flex items-center gap-4">
          <Link href="/">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#24234C]" />
            </button>
          </Link>
          <a href="/">
            <img src="/logo.png" alt="Learnway" className="h-8" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#24234C] mb-2">Subscription Terms</h1>
        <p className="text-gray-500 mb-8">Last updated: January 20, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">1. Subscription Plans</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Learnway offers the following subscription plans to access our premium content and features:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-[#24234C] mb-2">Monthly Subscription</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Price: $9.99 per month</li>
                <li>Billing: Charged monthly on the same date you subscribed</li>
                <li>Access: All courses and learning materials</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-[#24234C] mb-2">Yearly Subscription</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-1">
                <li>Price: $59.99 per year (equivalent to $5.00/month)</li>
                <li>Billing: Charged annually on the same date you subscribed</li>
                <li>Access: All courses, learning materials, plus exclusive features</li>
                <li>Includes: 7-day free trial for new subscribers</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">2. Free Trial</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              New subscribers to our Yearly plan are eligible for a 7-day free trial. During the trial period:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You will have full access to all premium features</li>
              <li>You will not be charged during the trial period</li>
              <li>You may cancel at any time before the trial ends without being charged</li>
              <li>If you do not cancel before the trial ends, your subscription will automatically begin and you will be charged the full annual amount</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Free trials are limited to one per user. We reserve the right to determine eligibility for free trials.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">3. Billing and Payment</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By subscribing to Learnway, you authorize us to charge your payment method on a recurring basis according to your chosen plan:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Payments are processed securely through FastSpring, our authorized payment processor</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>Applicable taxes may be added to your subscription price based on your location</li>
              <li>You are responsible for keeping your payment information current</li>
              <li>If payment fails, we may suspend your access until payment is received</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">4. Automatic Renewal</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Monthly subscriptions:</strong> Renew every month on your billing date</li>
              <li><strong>Yearly subscriptions:</strong> Renew every 12 months on your billing date</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We will send you a reminder email before your subscription renews. The renewal price will be the current subscription price at the time of renewal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">5. Cancellation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may cancel your subscription at any time. To cancel:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Log in to your Learnway account</li>
              <li>Go to Account Settings &gt; Subscription</li>
              <li>Click "Cancel Subscription" and follow the prompts</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Upon cancellation:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You will retain access to premium features until the end of your current billing period</li>
              <li>No further charges will be made to your payment method</li>
              <li>Your account will revert to free access after the billing period ends</li>
              <li>Your learning progress and data will be preserved</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">6. Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer a 30-day money-back guarantee for new subscribers:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>If you are not satisfied with your subscription, you may request a full refund within 30 days of your initial purchase</li>
              <li>Refund requests after 30 days will be considered on a case-by-case basis</li>
              <li>Refunds for yearly subscriptions will be prorated based on the time remaining</li>
              <li>Free trial cancellations do not require a refund as no payment was made</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              To request a refund, please contact our support team with your account email and order details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">7. Price Changes</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to change subscription prices at any time. If we change the price of your subscription, we will notify you at least 30 days before the change takes effect. The new price will apply to your next billing cycle after the notification period. If you do not agree to the price change, you may cancel your subscription before the new price takes effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">8. Subscription Features</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your subscription includes access to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All current courses and learning materials</li>
              <li>New courses added during your subscription period</li>
              <li>Progress tracking and learning analytics</li>
              <li>Completion certificates</li>
              <li>Priority access to new features (Yearly plan)</li>
              <li>AI Learning Assistant when available (Yearly plan)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We may modify, add, or remove features at any time. Significant changes will be communicated to subscribers in advance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">9. Account Sharing</h2>
            <p className="text-gray-600 leading-relaxed">
              Your subscription is for your personal use only. You may not share your account credentials or allow others to access your subscription. We reserve the right to terminate accounts that violate this policy without refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">10. Suspension and Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may suspend or terminate your subscription if you violate these terms or our Terms and Conditions. In case of termination for cause, you will not be entitled to a refund for any unused portion of your subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about your subscription or these terms, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600"><strong>Learnway Limited</strong></p>
              <p className="text-gray-600">Limassol, Cyprus</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E5E9] py-6">
        <div className="max-w-[800px] mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2025 Learnway Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

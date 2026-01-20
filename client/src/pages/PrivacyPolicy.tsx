import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <img src="/2-332.svg" alt="Coursiv" className="h-6" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#24234C] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 20, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to Coursiv ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using Coursiv, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
              <li><strong>Profile Information:</strong> Information you add to your profile, such as learning preferences and goals.</li>
              <li><strong>Payment Information:</strong> When you make a purchase, our payment processor collects payment card details. We do not store complete payment card information.</li>
              <li><strong>Learning Data:</strong> Information about your course progress, quiz results, and learning activities.</li>
              <li><strong>Communications:</strong> When you contact us, we collect the information you provide in your messages.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">We also automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Device Information:</strong> Browser type, operating system, device identifiers.</li>
              <li><strong>Usage Information:</strong> Pages visited, features used, time spent on the platform.</li>
              <li><strong>Log Data:</strong> IP address, access times, referring URLs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Personalize your learning experience</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">4. Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (payment processing, analytics, email delivery).</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process.</li>
              <li><strong>Protection of Rights:</strong> To protect the rights, property, and safety of Coursiv, our users, or others.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you services. We may also retain and use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">8. Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar tracking technologies to collect and track information about your use of our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our services may not function properly without cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">11. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600"><strong>Coursiv Limited</strong></p>
              <p className="text-gray-600">Limassol, Cyprus</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E2E5E9] py-6">
        <div className="max-w-[800px] mx-auto px-4 text-center text-sm text-gray-400">
          <p>© 2025 Coursiv Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
            <img src="/logo.png" alt="Coursiv" className="h-8" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[800px] mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#24234C] mb-2">Terms and Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 20, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you and Coursiv Limited ("Coursiv," "we," "us," or "our") governing your access to and use of the Coursiv website, platform, and services (collectively, the "Services").
            </p>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">2. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
              You must be at least 16 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">3. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed mb-4">To access certain features of our Services, you must create an account. When creating an account, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">4. Use of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Use the Services in any way that violates applicable laws or regulations</li>
              <li>Share your account credentials with others</li>
              <li>Copy, distribute, or disclose any part of the Services without authorization</li>
              <li>Use automated systems or software to extract data from the Services</li>
              <li>Attempt to interfere with or disrupt the Services or servers</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use of the Services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Services and all content, features, and functionality (including but not limited to text, graphics, logos, images, audio, video, software, and course materials) are owned by Coursiv or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your personal, non-commercial educational purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">6. User Content</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You may have the opportunity to submit content through the Services, such as quiz responses, comments, or feedback ("User Content"). You retain ownership of your User Content, but by submitting it, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your User Content in connection with the Services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              You represent and warrant that you own or have the necessary rights to your User Content and that it does not violate any third party's rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">7. Third-Party Links and Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Our Services may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party websites or services. Your use of third-party websites or services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We do not warrant that the Services will be uninterrupted, error-free, or secure, or that any defects will be corrected. We do not guarantee any specific results from the use of our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, COURSIV AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">10. Indemnification</h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Coursiv and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or in any way connected with your access to or use of the Services or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">11. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We may terminate or suspend your account and access to the Services at any time, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">12. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Cyprus, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of Cyprus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Services after any changes indicates your acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">14. Severability</h2>
            <p className="text-gray-600 leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#24234C] mb-4">15. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
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

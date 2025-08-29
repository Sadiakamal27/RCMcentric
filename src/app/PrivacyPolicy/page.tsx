"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-22">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm mt-2">
            WeCare RCM | <span className="font-medium">Updated on August 19, 2022</span>
          </p>
        </div>
      </div>



      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 text-gray-800 space-y-10">
        {/* About This Policy */}
        <section>
          <h2 className="text-lg font-semibold mb-2">About This Policy</h2>
          <p className="text-base leading-relaxed">
            This policy describes the personal information WeCare RCM collects about you,
            why WeCare RCM collects it and how WeCare RCM uses it. It also describes
            the choices you can make about how WeCare RCM collects and uses your information.
          </p>
        </section>

        {/* About WeCare RCM */}
        <section>
          <h2 className="text-lg font-semibold mb-2">About WeCare RCM</h2>
          <p className="text-base leading-relaxed">
            WeCare RCM is an advanced medical billing and coding partner with a focus on HIPAA,
            Security and Accurate Claim Process. Whatever your practice size, specialty or location,
            you will find services and expertise matching your practice requirements.
          </p>
        </section>

        {/* What We Collect */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            What Information Does WeCare RCM Collect?
          </h2>
          <p className="text-base leading-relaxed mb-2">
            We collect information that you provide directly to us, such as when you create an
            account, contact us, or use our services. This may include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-base leading-relaxed">
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Practice information and medical billing data</li>
            <li>Communication preferences and feedback</li>
            <li>Technical information about your use of our services</li>
          </ul>
        </section>

        {/* How We Use */}
        <section>
          <h2 className="text-lg font-semibold mb-2">How We Use Your Information</h2>
          <p className="text-base leading-relaxed mb-2">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-base leading-relaxed">
            <li>Provide and maintain our medical billing and coding services</li>
            <li>Process and manage your account and transactions</li>
            <li>Communicate with you about our services and updates</li>
            <li>Improve our services and develop new features</li>
            <li>Ensure compliance with HIPAA and other regulations</li>
          </ul>
        </section>

        {/* Info Sharing */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Information Sharing and Disclosure</h2>
          <p className="text-base leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third
            parties without your consent, except as described in this policy. We may share
            your information with trusted third parties who assist us in operating our services,
            conducting our business, or servicing you, so long as those parties agree to keep
            this information confidential and comply with HIPAA regulations.
          </p>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Data Security</h2>
          <p className="text-base leading-relaxed">
            We implement appropriate technical and organizational security measures to protect
            your personal information against unauthorized access, alteration, disclosure, or
            destruction. Our security practices comply with HIPAA requirements and industry
            standards to ensure the confidentiality and integrity of your data.
          </p>
        </section>

        {/* Rights */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Your Rights and Choices</h2>
          <p className="text-base leading-relaxed mb-2">
            You have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-base leading-relaxed">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct or update your personal information</li>
            <li>The right to delete your personal information in certain circumstances</li>
            <li>The right to restrict or object to processing of your information</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-base leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-base text-gray-700">
              <strong>WeCare RCM</strong><br />
              Email:{" "}
              <a
                href="mailto:privacy@abc.com"
                className="text-blue-600 hover:underline"
              >
                privacy@abc.com
              </a><br />
              Phone: 1234 xyz
              Address: abc xyz
            </p>
          </div>
        </section>

        {/* Updates */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Changes to This Policy</h2>
          <p className="text-base leading-relaxed mb-8">
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the "Updated on"
            date at the top of this policy. We encourage you to review this Privacy Policy
            periodically for any changes.
          </p>
        </section>
      </div>
    </div>
  );
}

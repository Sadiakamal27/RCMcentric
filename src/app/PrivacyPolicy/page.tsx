"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 py-35 px-40 relative overflow-hidden">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-700 transform rotate-12 scale-150"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full translate-y-32 -translate-x-32"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl ml-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-white text-lg sm:text-xl">
            WeCare RCM's Privacy Policy | Updated on August 19, 2022
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-40">
        <div className="max-w-4xl ml-6">
          {/* About This Policy */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              About This Policy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              This policy describes the personal information WeCare RCM collects about you, why WeCare RCM collects it and how WeCare RCM uses it. WeCare RCM policy also describes the choices you can make about how WeCare RCM collects and uses your information.
            </p>
          </div>

          {/* About RCM Centric */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              About RCM Centric
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              WeCare RCM is an advanced medical billing and coding partner with a focus on HIPAA, Security and Accurate Claim Process. Whatever your practice size, specialty or location, you will find services and expertise matching your practice requirements.
            </p>
          </div>

          {/* What Information Does RCM Centric Collect? */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What Information Does WeCare RCM Collect?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              We collect information that you provide directly to us, such as when you create an account, contact us, or use our services. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Practice information and medical billing data</li>
              <li>Communication preferences and feedback</li>
              <li>Technical information about your use of our services</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 ml-4">
              <li>Provide and maintain our medical billing and coding services</li>
              <li>Process and manage your account and transactions</li>
              <li>Communicate with you about our services and updates</li>
              <li>Improve our services and develop new features</li>
              <li>Ensure compliance with HIPAA and other regulations</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our services, conducting our business, or servicing you, so long as those parties agree to keep this information confidential and comply with HIPAA regulations.
            </p>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices comply with HIPAA requirements and industry standards to ensure the confidentiality and integrity of your data.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg leading-relaxed space-y-2 ml-4">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to correct or update your personal information</li>
              <li>The right to delete your personal information in certain circumstances</li>
              <li>The right to restrict or object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-base">
                <strong>RCM Centric</strong><br />
                Email: privacy@rcmcentric.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: [Your Business Address]
              </p>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Updated on" date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

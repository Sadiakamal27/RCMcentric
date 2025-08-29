import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-22 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Electronic Records Disclosure
            <br />
            and Consent Agreement
          </h1>
          <p className="mt-2 text-sm sm:text-base text-blue-100 font-medium">
          WeCare RCM | <span className="italic">Updated on August 28, 2023</span>
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 text-gray-700">
        <section className="space-y-6">
          {/* About This Consent */}
          <div>
            <h2 className="text-lg font-semibold mb-2">About This Consent</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              This Electronic Records Disclosure and Consent Agreement (the “Agreement”) is entered into between you (the
              “Client”) and WeCare RCM (the “Company”), collectively referred to as the “Parties”. This Agreement outlines
              your consent to receive electronic records and communications from WeCare RCM.
            </p>
          </div>

          {/* Section 1 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">
              1. Consent to Receive Electronic Records
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              By agreeing to this Agreement, you consent to receive electronic records and communications related to the
              services provided by WeCare RCM. This includes, but is not limited to, invoices, statements, reports,
              notifications, and other documents required for the billing and credentialing services.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">2. Scope of Consent</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Your consent to receive electronic records covers all communications and records exchanged between you and
              WeCare RCM. This may include emails, secure online portals, and other electronic communication methods used
              by the Company.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">3. Right to Withdraw Consent</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              You have the right to withdraw your consent to receive electronic records at any time. To withdraw consent,
              you must notify WeCare RCM in writing. Please note that withdrawing consent may affect your ability to
              receive timely information and services electronically.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">4. Hardware and Software Requirements</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              To receive electronic records, you must have access to a computer, smartphone, or other device with internet
              connectivity. You must also have a valid email address and the necessary software to view and interact with
              electronic documents, such as PDF readers and web browsers.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">5. Updating Contact Information</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              It is your responsibility to keep your contact information, including email addresses, updated with WeCare RCM.
               Changes to your contact information should be promptly communicated to ensure the accurate delivery
              of electronic records.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">6. Security</h3>
            <p className="text-sm sm:text-base leading-relaxed">
            WeCare RCM takes security seriously and employs measures to protect the confidentiality and integrity of
              electronic records. However, electronic communications and records carry inherent risks, and you acknowledge
              and accept these risks when consenting to electronic delivery.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">7. Agreement Duration</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              This Agreement remains in effect for the duration of your engagement with WeCare RCM for billing and
              credentialing services, unless you withdraw your consent as outlined in Section 3.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              By electronically indicating your acceptance of this Agreement or by continuing to engage with WeCare RCM’s
              services, you acknowledge that you have read, understood, and agree to the terms of this Electronic Records
              Disclosure and Consent Agreement.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Please retain a copy of this Agreement for your records.
            </p>
          </div>

          {/* Updates Section */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-2">
              Updates in Our Electronic Records Disclosure and Consent Agreement
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              WeCare RCM reserves the right to make periodic updates and revisions to this agreement, at any time. Suppose
              we decide to change our policy. In that case, we will post those changes to this statement and other places
              we deem appropriate so that you know what information we collect, how we use it, and under what circumstances
              we disclose it. You are welcome to email us with questions or concerns at{" "}
              <a href="mailto:support@abc.com" className="text-blue-600 underline">
                support@abc.com
              </a>
              .
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              If you feel we are not abiding by this agreement, you should contact us via the{" "}
              <span className="font-semibold">Contact Us</span> form or email at{" "}
              <a href="mailto:support@abc.com" className="text-blue-600 underline">
                support@abc.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
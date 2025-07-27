"use client";

import Image from "next/image";
import ExpertiseSection from "@/components/ExpertiseSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";


import { Select,SelectTrigger, SelectValue, SelectContent,SelectItem } from "@/components/ui/select";
import { useState } from "react";
import SolutionSection from "@/components/SolutionsSection";

export default function MedicalBillingPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (selectedSpecialty) {
      setIsOpen(true);
    } else {
      alert("Please select a specialty first.");
    }
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <p className="text-red-400 text-lg font-medium mb-2">One-Stop Shop Solution</p>
          <div className="flex items-center mb-4">
            <div className="w-1 h-12 bg-red-400 mr-3"></div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-600">Medical Billing Services</h1>
          </div>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            RCM Centric provides customized medical billing service solutions from charge entry to analytics and reporting for all medical specialists and practices.
          </p>
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <h3 className="text-base sm:text-xl text-center text-gray-500 sm:text-left mb-2">Find Solution by your speciality</h3>
            <SolutionSection buttonText="Get Solutions →"  />
          </div>
        </div>
        {/* Right Content - Video */}
        <div className="w-full md:w-[650px] flex justify-center items-center mt-8 md:mt-0">
          <video
            className="w-full h-[220px] sm:h-[400px] md:h-[600px] object-cover rounded-lg pointer-events-none"
            autoPlay
            loop
            muted
            src="/rcm-medical-billing-services-animation.mp4"
            preload="metadata"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </section>

      {/* R.C.M. Cards Section */}
      <section className="bg-white py-8 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {/* Revenue Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-600">R</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Revenue Growth That Your Practice Deserves
              </h3>
            </div>
            {/* Centric Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-600">C</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Centric Solution By Specialty Focused
              </h3>
            </div>
            {/* Managing Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-600">M</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Managing Each Medical Claim Efficiently
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Complex, Secure, Fast, & High-Compliance Financial Ecosystems */}
      <section className="bg-blue-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image
              src="/123.webp"
              alt="Financial Ecosystem Illustration"
              width={500}
              height={350}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-gray-600 mb-2 text-center md:text-left">
              Managing Complex, Secure, Fast, & High-Compliance Financial Ecosystems
            </h2>
            <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              Being a leading medical billing company in the USA, we know from experience that healthcare professionals often worry about things they should not. Therefore, we come to the provider’s aid and care for the billing matters. We process each claim after quality and complaint checks to ensure you get maximum reimbursement. This way, you can entirely focus on delivering quality care while RCM Centric’s teams work on your practice billing and coding.
            </p>
            <Link href="/TalktoSales">
              <Button className="border-2 bg-blue-600 text-white rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto">
                Talk to Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Your On-Demand Services Stack */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-600 mb-2">
            Your On-Demand Services Stack
          </h2>
          <div className="flex items-center justify-center my-4 sm:my-6">
            <div className="h-px bg-red-300 w-10 sm:w-16"></div>
            <Image
              src="/Caduceus.png"
              alt="Caduceus"
              width={32}
              height={32}
              className="mx-3"
            />
            <div className="h-px bg-red-300 w-10 sm:w-16"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Card - repeat for each service */}
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/demography.png"
                alt="Registration"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Registration / Demographics</h3>
              <p className="text-gray-600 text-sm">
                We follow simple and clean methods to register new patients to the practice and keep all the details accurate.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/operation.png"
                alt="Charge Entry"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Charge Entry</h3>
              <p className="text-gray-600 text-sm">
                After coverage and benefits verifications, our team enters accurate patient visits into the billing software.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/claim.png"
                alt="Claim Submission"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Claim Submission</h3>
              <p className="text-gray-600 text-sm">
                We submit claims within 24 hours after verifying all the required details, as well as daily submission reports.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/compliant.png"
                alt="Insurance Verification"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Insurance verification</h3>
              <p className="text-gray-600 text-sm">
                Plan coverage and benefits verifications for private and commercial insurance through live calls and web portals.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/security.png"
                alt="Payment Posting"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Payment Posting</h3>
              <p className="text-gray-600 text-sm">
                Posting payments to patients accounts accordingly. Our payment posting team has the ability to work on all software.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/news.png"
                alt="Clearing House rejections"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Clearing House rejections</h3>
              <p className="text-gray-600 text-sm">
                Our billing process is advanced to keep tracking claim rejections and fixes automatically.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/error.png"
                alt="Denial management"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Denial management</h3>
              <p className="text-gray-600 text-sm">
                Our denial management team works on denied claims and appeals to insurance companies if needed.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/learning.png"
                alt="A/R Recovery"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">A/R Recovery</h3>
              <p className="text-gray-600 text-sm">
                Our expert A/R team works for old AR recovery, follows up on claims and rejections, and fixes errors.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <Image
                src="/checked.png"
                alt="Quality check"
                width={48}
                height={48}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold mb-2">Quality check</h3>
              <p className="text-gray-600 text-sm">
                Our quality assurance team works only to monitor quality work, so each claim is sent with accurate and error-free billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Outsourcing */}
      <section className="bg-[#10153a] py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-white mb-8 md:mb-0">
            <div className="mb-2 text-red-400 font-medium">BENEFITS OF OUR SERVICES</div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4">Benefits of Outsourcing</h2>
            <p className="mb-6">
              Here is how medical billing solutions by RCM Centric will assist you as a provider. You will get most of the benefits for free with the services of your choice. We always deliver the best results to boost your monthly collection and streamline the revenue process.
            </p>
            <p className="font-bold mb-6">
              It’s just like outsourcing the results. RCM Centric will be responsible for the delivery and compliance.
            </p>
            <Link href="/TalktoSales">
              <Button className="border border-white text-white font-semibold px-8 py-3 rounded transition flex items-center w-full sm:w-auto">
                Talk To Sales <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/Checkup-Apppointmens-1-1.png"
              alt="Benefits of Outsourcing"
              width={500}
              height={400}
              className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="bg-[#10153a] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
  {/* Benefit 1 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">1</div>
    <div>
      <h3 className="font-semibold mb-2">Better Cash Flows</h3>
      <p className="text-sm">
        Cash flows act as the lifeblood of any organization, and healthcare providers are no different.
        Our professional revenue cycle management services offer experienced professionals who can expertly handle
        different types of medical claims on the first submission.
      </p>
    </div>
  </div>

  {/* Benefit 2 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">2</div>
    <div>
      <h3 className="font-semibold mb-2">Quick Submission</h3>
      <p className="text-sm">
        Providers get to experience faster claim submissions on their behalf. Not only that, but we provide technologically advanced solutions from the get-go.
        In brief, we ensure easy filing of all the details, maintaining a certain speed for reimbursements. Practice beyond financial restrictions.
      </p>
    </div>
  </div>

  {/* Benefit 3 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">3</div>
    <div>
      <h3 className="font-semibold mb-2">Expert Teams</h3>
      <p className="text-sm">
        Our team of expert medical coding consultants is the answer to all the pressing concerns around accurate medical billing and audit.
        In short, it is precise and to the point. You can expect timely submissions, alongside the proactive handling of insurance companies and patients.
      </p>
    </div>
  </div>

  {/* Benefit 4 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">4</div>
    <div>
      <h3 className="font-semibold mb-2">Denial Management</h3>
      <p className="text-sm">
        The team here at RCM Centric timely reports if they find any problems related to submissions, including errors and omissions.
        It is our transparent approach that keeps our providers updated about the status of claims and reasons for delays.
      </p>
    </div>
  </div>

  {/* Benefit 5 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">5</div>
    <div>
      <h3 className="font-semibold mb-2">Advanced Reporting</h3>
      <p className="text-sm">
        Detailed analysis reports are submitted to physicians and specialists as per their custom requirements to help them make smart business decisions.
        We also break up each stage of the process as per the needs of clinicians belonging to different specialties.
      </p>
    </div>
  </div>

  {/* Benefit 6 */}
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="text-5xl font-extrabold text-blue-950 mb-2 sm:mb-0">6</div>
    <div>
      <h3 className="font-semibold mb-2">Reduced Costs</h3>
      <p className="text-sm">
        Once you decide to outsource medical billing to us, you are about to cut down on the costs drastically.
        It is the right mix of skills, experience, and resilience that allows us to accelerate your revenue cycle.
        Let us put a lid on expenses together and scale beyond boundaries.
      </p>
    </div>
  </div>
</div>


      </section>

      {/* Your Dream Team Await's */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image
              src="/employeeappreciation.png"
              alt="Dream Team"
              width={400}
              height={300}
              className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
              Your Dream Team Await's
            </h2>
            <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              Whether you need to grow your team’s capability with technical skills, boost revenue, or want a team that can hold things operating smoothly and growing as fast as you can say what’s next, RCM Centric augment provides the suitable talent and strategic resolutions to develop, scale, and manage your medical practice – at pace.
            </p>
            <Link href="/TalktoSales">
              <Button className="border-2 bg-blue-600 text-white rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto">
                Get Your Team Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <ExpertiseSection />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Play,
  BarChart3,
  DollarSign,
  CalendarClock,
  Trophy,
  ExternalLink,


} from "lucide-react";

import { ImageComparisonSlider } from "@/components/image-comaprison-slider";
import SolutionsAndServices from "@/components/SolutionsAndServices";
import MedicalBillingSection from "@/components/MedicalBillingsection";
import RCMCentricSection from "@/components/RcmCentricsection";
import OnboardingPage from "@/components/OnBoardingPage";
import RCMBenefitSection from "@/components/RCMBenefitSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SolutionSection from "@/components/SolutionsSection";
export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Stats */}
      <section className="relative bg-gradient-to-br bg-[#0B1B39] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full hidden sm:block"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-white/20 rounded-full hidden sm:block"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white/20 rounded-full hidden sm:block"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 border border-white/20 rounded-full hidden sm:block"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-2 sm:px-4 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 lg:mb-16">
            {/* Left Content */}
            <div className="text-white space-y-8 order-2 lg:order-1">
              <div className="space-y-4 ">
                <p className="text-white text-base sm:text-lg">Provider Practice Centric</p>
                <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold leading-tight">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-32 bg-red-400 mr-3"></div>
                    <div className="ml-2 sm:ml-4 inline-block align-top">
                      Top-tier Revenue <br className="hidden sm:block" /> Cycle Management <br className="hidden sm:block" /> For Each Medical Specialty
                    </div>
                  </div>
                </h1>
              </div>
              <div className="mt-6 sm:mt-9">
                <div className="space-y-4 text-white">
                  <p className="text-sm sm:text-base">
                    For over 10 years, our {" "}
                    <Link href="/MedicalBilling" target="_blank" rel="noopener noreferrer" >
                      <span className="text-red-400 font-semibold">medical billing company in the USA</span>
                    </Link>
                    {" "}
                    have been helping physicians, clinics, group practices, and hospital-owned physician groups with their medical billing and coding tasks.
                    Establish and grow a healthy practice with WeCare RCM's advanced healthcare medical billing services & coding, including unique strategy and integrated technology.
                  </p>
                </div>
              </div>
              {/* Form Section */}
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">
                  Get a Solution for Your Medical Practice
                </h3>
                <SolutionSection
                  buttonText=" →  Get Solution"
                  buttonClassName=" text-white bg-red-500 hover:bg-white hover:text-blue-700"

                />
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div
                className="relative rounded-lg overflow-hidden shadow-2xl w-full max-w-[95vw] sm:max-w-[600px] h-[220px] sm:h-[400px]"
              >
                {isPlaying ? (
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/To8tul_TsWE?autoplay=1&controls=1&rel=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <Image
                      src="/v1.png"
                      alt="Video testimonial thumbnail"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer bg-white/90 hover:bg-white text-blue-600 shadow-lg"
                        onClick={handlePlay}
                      >
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Stats Section - Integrated without border */}
          <div className="relative pt-10 sm:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
              {/* Increase Cash Flow */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 py-2">
                <div className="flex-shrink-0">
                  <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">25%</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Increase Cash Flow</div>
                </div>
              </div>
              {/* Net Collection Rate */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 py-2">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">97%</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Net Collection Rate</div>
                </div>
              </div>
              {/* Days in A/R */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 py-2">
                <div className="flex-shrink-0">
                  <CalendarClock className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">{"<32"}</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Days in A/R</div>
                </div>
              </div>
              {/* Client Success Rate */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 py-2">
                <div className="flex-shrink-0">
                  <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">99%</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Features Section */}
      <section className="relative bg-gray-50 py-10 sm:py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-gray-300 rounded-full hidden sm:block"></div>
          <div className="absolute top-40 right-40 w-32 h-32 border border-gray-300 rounded-full hidden sm:block"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-gray-300 rounded-full hidden sm:block"></div>
          <div className="absolute bottom-32 right-20 w-28 h-28 border border-gray-300 rounded-full hidden sm:block"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <p className="text-red-500 text-base sm:text-lg font-medium">
                  Increase Your Practice Revenue by 15%-20%
                </p>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Maximize Profitability & <br className="hidden sm:block" />
                  Minimize Errors With <br className="hidden sm:block" />
                  <span className="text-blue-600">RCM Centric</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                  Are you looking for faster payment processing for your medical
                  billing? Wish to reduce billing overheads on various specialty
                  billings that you frequently generate? WeCare RCM's advanced billing
                  solutions ensure that your billings forge higher net
                  collections in less time. WeCare RCM offers advanced medical
                  billing & coding services for a wide range of healthcare
                  specialties.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/About" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-red-500 scroll-smooth text-white px-8 py-3 w-full sm:w-auto">
                    About Us <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Dashboard Mockups */}
            <div className="relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full max-w-[95vw] sm:max-w-[600px]">
                {/* Main Dashboard */}
                <div className="relative z-10">
                  <Image
                    src="/Product-Screen-Dashboard-rcm-centric.png?height=400&width=600"
                    alt="WeCare RCM Dashboard Interface"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RCM Services Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* RCM Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
            {/* Revenue Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">R</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Revenue Growth That Your Practice Deserves
              </h3>
            </div>

            {/* Centric Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">C</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Centric Solution By Specialty Focused
              </h3>
            </div>

            {/* Managing Card */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="mb-4 sm:mb-6">
                <span className="text-5xl sm:text-6xl font-bold text-gray-700">M</span>
                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                Managing Each Medical Claim Efficiently
              </h3>
            </div>
          </div>

          {/* Services Description */}
        </div>
      </section>
      {/* Services Description */}

      <SolutionsAndServices />


      {/* Centric Solution Section */}
      <section className="bg-white py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-8">
              A Centric Solution For Your Practice Needs
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
              At WeCare RCM, we recognize that Practices, Facilities, and
              Hospitals must be as flexible as their patients. And that's a <strong>challenge</strong> we readily embrace. So whether you're a
              doctor trying to <strong>streamline your collection</strong> or a
              hospital looking to optimize a patient's <strong>claims capacity</strong>, RCM Centric has the expertise to
              get you on your way with advanced medical billing & <strong>coding strategies</strong>.
            </p>
          </div>

          {/* Provider to Success Layout - All in One Line */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-7 mb-12 w-full">
            {/* Provider Column */}
            <div className="text-center flex-shrink-0 mb-4 lg:mb-0">
              <div className="flex justify-center mb-4">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-blue-200"
                >
                  <Image
                    src="/provider.jpg"
                    alt="Provider - Healthcare Professional"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Provider</h3>
            </div>

            {/* Comparison Slider - Center */}
            <div className="flex-shrink-0 max-w-2xl w-full mb-4 lg:mb-0">
              <ImageComparisonSlider
                beforeImage="/w_rcm.jpg"
                afterImage="/with_rcm.jpg"
                beforeLabel="Without RCM Centric"
                afterLabel="With RCM Centric"
              />
            </div>

            {/* Success Column */}
            <div className="text-center flex-shrink-0">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 bg-yellow-50 rounded-full flex items-center justify-center overflow-hidden shadow-lg border-4 border-yellow-200">
                  <Image
                    src="/success.jpg"
                    alt="Success - Trophy"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Success</h3>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <Link href="/TalktoSales" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 hover:bg-red-500 cursor-pointer text-white px-8 py-3 text-base sm:text-md w-full sm:w-auto">
                Talk to an Expert <ExternalLink className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <RCMCentricSection />
      <MedicalBillingSection />
      <OnboardingPage />
      <RCMBenefitSection />

      <ExpertiseSection />






    </div>
  );
}

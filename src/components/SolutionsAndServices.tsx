import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink,  } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";


interface SolutionsAndServicesProps {
  heading?: string;
  headingClassName?: string;
  subheading?: string | null;
  subheadingClassName?: string;
  dividerColorClass?: string;
  dividerHeightClass?: string;
  dividerWidthClass?: string;
  alignLeft?: boolean;
}

function SolutionsAndServices({
  heading = "WeCare RCM Solutions & Services",
  headingClassName = "text-4xl lg:text-5xl font-bold text-gray-700 mb-6",
  subheading = "Unlock explosive revenue growth and empower your practice with accurate claim processing. Connect with our team to learn how honest and reliable medical claims solutions can help your business succeed.",
  subheadingClassName = "text-gray-600 text-lg leading-relaxed",
  dividerColorClass = "bg-red-500",
  dividerHeightClass = "h-1",
  dividerWidthClass = "w-16",
  alignLeft = false,

}: SolutionsAndServicesProps) {

  return (
    <div className="min-h-screen bg-white">
      {/* Section with heading and divider */}
      <section className="bg-gray-50 pt-10 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className={alignLeft ? "text-left" : "text-center"}>
            <h2 className={headingClassName}>{heading}</h2>
            <div
              className={`${dividerWidthClass} ${dividerHeightClass} ${dividerColorClass} ${
                alignLeft ? "" : "mx-auto"
              } mb-8`}
            ></div>
            {subheading && (
              <p className={subheadingClassName}>{subheading}</p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Medical Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300  group border-none flex flex-col h-full">
              <CardContent className="p-6 flex flex-col text-center flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4  transition-colors">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/bill.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Offering End-To-End medical billing from demo entry to payment
                  posting, with advanced monthly or weekly reporting so you can
                  notice what's going on.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/MedicalBilling" target="_blank" rel="noopener noreferrer">

                <Button
                  variant="outline"
                  className="text-blue-600 cursor-pointer rounded-2xl group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Medical Coding Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300  group border-none flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/coding.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold  text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL CODING SERVICES
                </h3>
                <p className="text-gray-600  group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Outsourcing your medical coding services to expert coders at
                  WeCare RCM enables you to optimize your revenue while
                  reducing compliance risks.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/MedicalCoding" target="_blank" rel="noopener noreferrer">

                <Button
                  variant="outline"
                  className="text-blue-600 cursor-pointer rounded-2xl  group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* DME / Ambulatory Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 border-none  group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/wheelchair.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3  transition-colors">
                  DME / AMBULATORY BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Forget your worries at leading DME billing, and you can boost
                  your revenue by using our 24/7 durable medical equipment (DME)
                  Billing and Coding experts.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/DME" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-blue-600 rounded-2xl cursor-pointer group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Hospital Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300  group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/hospital.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  HOSPITAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Working with WeCare RCM, you enjoy the long-term benefits of
                  our revenue cycle specialists providing efficient billing
                  services to hospitals.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/HospitalBilling" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-blue-600 rounded-2xl group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors cursor-pointer"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Practice Audit Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300  group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/practiceaudit.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PRACTICE AUDIT SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Want smooth practice? Our billing and coding experts will
                  initiate an audit for you to find billing issues and update
                  your practice with the latest tech.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/PracticeAudit" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-blue-600 cursor-pointer rounded-2xl group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Credentialing & Enrollment */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300  group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/diploma.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  CREDENTIALING & ENROLLMENT
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Our experienced team manages the credentialing process, which
                  helps you navigate the process of provider enrollment and
                  credentialing with insurance.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/CredentialingAndEnrollment" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-blue-600 rounded-2xl group-hover:bg-white border-none cursor-pointer group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Telehealth Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300  group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/registration.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  TELEHEALTH BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  Connect with your patient easily and get an automated billing
                  solution. We help providers to connect with patients virtually
                  with integrated technology.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/TeleHealthBilling" target="_blank" rel="noopener noreferrer">  
                <Button
                  variant="outline"
                  className="text-blue-600 rounded-2xl group-hover:bg-white border-none cursor-pointer group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

            {/* Patient Help Desk Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 group flex flex-col h-full">
              <CardContent className="p-6 text-center flex flex-col flex-grow">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                  <img
                    src="/information-desk.png"
                    alt="Telehealth Billing Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PATIENT HELP DESK SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors flex-grow">
                  WeCare RCM provides dedicated help desk services for
                  hospitals, medical centers, health clinics, and private
                  doctor's practices throughout the United States.
                </p>
                <div className="mt-auto flex justify-center">
                <Link href="/PatientHelpDesk" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="text-blue-600 rounded-2xl cursor-pointer group-hover:bg-white border-none group-hover:text-blue-600 group-hover:border-white bg-blue-100 transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsAndServices;

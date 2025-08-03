import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
    return (
        <>
            <section className="bg-blue-50 py-22 px-4 mb-10">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/11660333.png"
                            alt="Patient Help Desk Icon"
                            width={48}
                            height={48}
                            className="text-gray-600"
                        />
                    </div>

                    {/* Label */}
                    <div className="flex justify-center mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                            Patient Help Desk
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-6">
                        Patient Help Desk, Expert Healthcare <br className="hidden sm:inline" /> Support at Your Fingertips
                    </h2>

                    {/* Steps (Responsive Flex) */}
                    <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 mb-8 text-gray-700 mt-10">
                        <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center text-3xl justify-center w-10 h-10 rounded-md border border-black bg-white text-gray-700 font-bold">
                                1
                            </span>
                            <span>Automate your next <br /> visit or follow-up</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center text-3xl justify-center w-10 h-10 rounded-md border border-black bg-white text-gray-700 font-bold">
                                2
                            </span>
                            <span>Focus on providing <br /> medical assistance</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="inline-flex items-center text-3xl justify-center w-10 h-10 rounded-md border border-black bg-white text-gray-700 font-bold">
                                3
                            </span>
                            <span>Allows faster & more <br /> efficient resolutions</span>
                        </div>
                    </div>


                    {/* Buttons (Stack on small screens) */}
                    <div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:space-x-4 space-y-4 sm:space-y-0">
                        <Link href="TalktoSales">
                            <Button className="bg-blue-600 text-white hover:bg-red-400 rounded-md px-6 py-2 w-full sm:w-auto">
                                Talk to Sales
                            </Button>
                        </Link>
                        <Link href="Pricing">
                            <Button className="bg-white text-red-400 hover:bg-red-600  hover:text-white border  border-red-400
                     rounded-full px-6 py-2 w-full sm:w-auto">
                                Get Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-2 mb-5 bg-white">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left Column - Updated Text Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                                Comprehensive Support Services <br className="hidden sm:block" />
                                Tailored To Every Patient
                            </h2>
                            <hr className="border-red-500 w-16 border-t-2 mb-6" />

                            <p className="text-gray-700 mb-4">
                                Our <strong>Patient Help Desk</strong> offers integrated, patient-first support, guiding you reliably
                                through healthcare’s complexities. We provide consistent, knowledgeable assistance
                                from administration to care coordination, empowering you at every stage.
                            </p>

                            <ul className="text-gray-700 space-y-3">
                                {[
                                    "Scheduling, modifying, or canceling medical appointments",
                                    "Explaining insurance coverage, co-payments, and billing statements",
                                    "Help with electronic health record (EHR) access and patient portal navigation",
                                    "Coordination of care with specialists, labs, and imaging centers",
                                    "Facilitating referral management and pre-authorization requests",
                                    "Verifying insurance eligibility and managing plan details",
                                    "Answering medication, prescription, and pharmacy coordination questions",
                                    "Assistance with patient registration, credentialing forms, and documentation",
                                ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600 flex-shrink-0 mt-1">
                                            <ArrowRight className="w-3 h-3 " />
                                        </span>
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/Checkup-Apppointmens-8.png"
                                alt="Doctor with documents"
                                width={800}
                                height={800}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/Webpage-illustrations-.jpg" // Replace with actual image path
                                alt="Patient Help Desk Illustration"
                                width={400}
                                height={300}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        {/* Right Column - Text Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                                Discover how our Patient Help Desk simplifies your workflow — for your patients and your peace of mind
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Let us show you how real-time support and streamlined intake can elevate patient satisfaction and accelerate your revenue cycle — without disrupting your clinical flow.
                            </p>
                            <Button
                                className="bg-white text-gray-800  hover:text-white hover:bg-gray-800 border-1 rounded-full px-8 py-2"
                            >
                                Learn more
                            </Button>

                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              A Modern Help Desk For Modern Healthcare
            </h2>
            <hr className="border-red-500 w-16 border-t-2 mb-6" />
            <p className="text-gray-600 mb-6">
              We’re proud to offer a digitally enabled support system that is secure, responsive, and patient-focused. Every interaction is designed to reduce wait times, eliminate confusion, and improve healthcare access for all.
            </p>
            <p className="text-red-500 mb-4 font-semibold">Features That Set Us Apart:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>HIPAA-Compliant Communication Channels</li>
              <li>Trained Patient Service Representatives & Care Coordinators</li>
              <li>Integrated Support via Phone, Email, Chat, and Portal</li>
            </ul>
          </div>
          {/* Right Column - Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/circle.png" // Replace with actual image path
              alt="Patient Satisfaction Chart"
              width={400}
              height={300}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>


        </>


    );
}
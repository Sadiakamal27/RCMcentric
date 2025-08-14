"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react"; // Phone icon
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import { ArrowRight } from "lucide-react";

function page() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [sectionref, sectionisVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [section2ref, section2isVisible] = useIntersectionObserver({ threshold: 0.2 });



    return (
        <div className="bg-gray-50 ">

            <section ref={ref}
                className={`py-22 transition-all duration-1000 ease-out transform 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text and Buttons */}
                    <div className="flex-1 text-center text-red-500 md:text-left">
                        <h3
                        >
                            Why you need practice audit
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-2">
                            Empower Your Practice With{" "}
                            <span className="text-blue-700 hover:text-red-500 mr-1 ml-1">WeCare Centric's</span>{" "}

                        </h2>

                        {/* Paragraph with vertical red line */}
                        <div className="flex items-start gap-4 mt-4">
                            <div className="w-1 h-35 bg-red-500"></div>
                            <p className="text-gray-600 mb-5 max-w-lg">
                                A thorough audit of your practice can uncover hidden errors and inefficiencies,
                                leading to significant improvements. RCM Centric’s practice audit focuses on
                                addressing minor operational challenges to streamline workflows and optimize
                                performance With customized solutions tailored to your needs,
                                we ensure accurate claims submission, compliance adherence, and improved revenue management.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="space-x-4 mt-4">
                            {/* TALK TO SALES */}
                            <Button
                                className="bg-red-500 text-white hover:bg-blue-600 transition-colors duration-300"
                            >
                                <Phone size={18} className="mr-2" /> Talk to Sales
                            </Button>

                            {/* GET IN TOUCH */}
                            <Button
                                variant="outline"
                                className="bg-white text-gray-700 border-none hover:text-red-500 transition-colors duration-300"
                            >
                                <span className="mr-2">&gt;&gt;</span> Get in Touch
                            </Button>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/Webpage-illustrations-and-imags-23.png"
                            alt="Billing Illustration"
                            width={600}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>



            <section ref={sectionref}
                className={`py-12 px-4 md:px-8 bg-gray-100 transition-all duration-1000 ease-out transform 
        ${sectionisVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/Pain-points-illustration-01.png" // Replace with actual image path
                                alt="Credentialing process"
                                width={600}
                                height={600}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        {/* Right Column - Text Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                                Identifying Common Practice Pain Points
                            </h2>
                            <div className="h-[2px] w-26 bg-red-500 mt-2 mb-4 mx-auto md:mx-0 md:ml-0"></div>
                            <p className="text-gray-700 mb-4">

                                Is your practice bleeding? Or you're leaving something on the table?
                                We recognize that these issues may appear commonplace; however,
                                it is important to note that the majority of practitioners encounter these challenges on a daily basis.
                                Let’s figure this out First things first to find the problems :
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Limited staff training leading to inefficiencies in daily tasks.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />

                                    Lack of integration between software systems causing workflow disruptions.</li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />

                                    Inadequate patient communication resulting in missed appointments.</li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />

                                    Manual processes creating bottlenecks in administrative tasks.</li>

                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />

                                    Poor inventory management leading to stock shortages or surpluses.</li>

                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />

                                    Insufficient data analytics to track and improve practice performance.</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>

            {/* RCM Services Section */}

            <section ref={section2ref}
                className={`bg-white py-10 sm:py-16 lg:py-24 transition-all duration-1000 ease-out transform 
        ${section2isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
            >
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

            <section
                ref={section2ref}
                className={`py-12 px-4 md:px-8 bg-gray-100 transition-all duration-1000 ease-out transform 
                ${section2isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Text Content (moved here) */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                                Identifying Common Practice Pain Points
                            </h2>
                            <div className="h-[2px] w-26 bg-red-500 mt-2 mb-4 mx-auto md:mx-0 md:ml-0"></div>
                            <p className="text-gray-700 mb-4">
                                Is your practice bleeding? Or you're leaving something on the table?
                                We recognize that these issues may appear commonplace; however,
                                it is important to note that the majority of practitioners encounter these challenges on a daily basis.
                                Let’s figure this out First things first to find the problems :
                            </p>

                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Limited staff training leading to inefficiencies in daily tasks.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Lack of integration between software systems causing workflow disruptions.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Inadequate patient communication resulting in missed appointments.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Manual processes creating bottlenecks in administrative tasks.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Poor inventory management leading to stock shortages or surpluses.
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-blue-800 flex-shrink-0 mt-1" />
                                    Insufficient data analytics to track and improve practice performance.
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Image (moved here) */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/Pain-points-illustration-01.png"
                                alt="Credentialing process"
                                width={600}
                                height={600}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default page
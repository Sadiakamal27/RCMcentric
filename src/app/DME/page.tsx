"use client"

import { useIntersectionObserver } from '@/hook/UseIntersectionObserver'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CircleArrowRight, ArrowRight } from "lucide-react"
import Link from 'next/link';


function page() {



    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [refs2, refs2isVisible] = useIntersectionObserver({ threshold: 0.2 });


    return (
        <div className="bg-gray-50 ">
            <section ref={ref}
                className="py-22 "
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text and Buttons */}
                    <div className="flex-1 text-center text-red-500 md:text-left">
                        <h3
                        >
                            Optimized Strategies to Enhance Your Revenue Potential
                        </h3>
                        <div className="flex items-center sm:items-start gap-3 mb-6 mt-6">
                            {/* Vertical Line */}
                            <div className="w-2 bg-red-500 self-stretch "></div>

                            {/* Heading */}
                            <h2 className=" font-bold text-4xl sm:text-5xl md:text-5xl text-gray-700 ">
                                Precision Billing for DME & Ambulatory Services
                            </h2>
                        </div>

                        {/* Paragraph with vertical red line */}
                        <div className="flex items-start gap-4 mt-4">

                            <p className="text-gray-600 mb-5 max-w-lg">
                                DME (Durable Medical Equipment) and Ambulatory Billing Services require
                                specialized attention due to complex regulations and coding requirements.
                                WeCare Centric streamlines the DME and Ambulatory billing process with
                                expert coding and compliance management. Our team ensures accurate claims submission,
                                reducing denials and speeding up reimbursements.
                                We provide detailed reporting, giving practitioner’s insights into their financial performance.  </p>
                        </div>

                        {/* Buttons */}
                        <div className="space-x-4 mt-4">
                            <Link href="/ContactUs" >
                                <Button
                                    className="bg-blue-500 text-white w-50 hover:bg-red-500 transition-colors duration-300"
                                >
                                    Contact Us  <CircleArrowRight size={32} color="white" />
                                </Button>
                            </Link>

                            {/* GET IN TOUCH */}
                            <Link href="/Pricing" >
                                <Button
                                    variant="outline"
                                    className="bg-white text-red-500 border-none hover:text-gray-800 transition-colors duration-300"
                                >
                                    Get a Quote{" "} <span className="mr-2">&gt;&gt;</span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/dme-hero-min-1536x1536.webp"
                            alt="Billing Illustration"
                            width={600}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* RCM Services Section */}

            <section ref={ref}
                className={`bg-white py-10 sm:py-16 lg:py-24 transition-all duration-1000 ease-out transform 
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
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

            <section ref={refs2}
                className={`py-12 px-4 md:px-8 bg-gray-100 transition-all duration-1000 ease-out transform 
        ${refs2isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/ggg-01-scaled.png" // Replace with actual image path
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

                                One significant issue is the complexity of coding, as DME billing requires the use of
                                specific HCPCS codes, while ambulatory services rely on CPT codes, both of which must
                                be applied correctly to avoid claim denials regulatory changes in Medicare, Medicaid,
                                and private insurance policies frequently alter billing requirements, making it difficult
                                for providers to stay compliant. Documentation errors can lead to rejected claims,
                                especially when prescriptions or medical necessity forms are incomplete or inaccurate.



                                These Challenges Might be looking very hard to overcome but RCM Centric has cater solution for all of them.
                                We can help you elevate your Practice and Take the burden of administrative tasks off of your shoulders.
                            </p>
                            <p className="text-gray-700 mb-4">
                                These Challenges Might be looking very hard to overcome but RCM Centric has cater solution for all of them.
                                We can help you elevate your Practice and Take the burden of administrative tasks off of your shoulders.
                            </p>

                            <div className="space-x-4 mt-4">
                                {/* TALK TO SALES */}
                                <Link href="/TalktoSales" >
                                    <Button
                                        className="bg-blue-500 w-40 text-white hover:bg-red-500 transition-colors duration-300"
                                    >
                                        Talk to Sales{" "}  <ArrowRight size={32} color="white" />
                                    </Button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-4">
                        {/* Small Heading */}
                        <h3 className="text-sm sm:text-base font-semibold text-red-500 tracking-wide uppercase mb-1">
                        Master Your Revenue
                         </h3>

                        {/* Main Heading */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mt-5 mb-5">
                            WeCare Centric for Unmatched DME & Ambulatory Billing
                        </h2>
                    </div>
                    <div className="flex items-center justify-center my-4 sm:my-6">

                        <div className="h-0.5 bg-red-400 w-40 sm:w-36"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example Card - repeat for each service */}
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/increased-revenue-icon-01.svg"
                                alt="Registration"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                            Increased Revenue</h3>
                            <p className="text-gray-600 text-1xl">
                            Faster reimbursements and fewer claim denials, enhancing the practice’s financial stability.
                            </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/regulatory-compliance-02.svg"
                                alt="Charge Entry"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                            Regulatory Compliance               </h3>
                            <p className="text-gray-600 text-1xl">
                            Reducing the risk of audits, penalties, and legal issues for healthcare providers.
                                                     </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/Operational-efficiency-03.svg"
                                alt="Claim Submission"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                            Operational Efficiency  </h3>
                            <p className="text-gray-600 text-1xl">
                            Allowing practitioners to focus more on patient care and less on paperwork.                            </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/improved-cashflow-04.svg"
                                alt="Insurance Verification"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                            Improved Cash Flow</h3>
                            <p className="text-gray-600 text-sm">
                            Timely and precise billing processes help maintain a steady flow of revenue.
                                                        </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/scalability-09.svg"
                                alt="Payment Posting"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Scalablility</h3>
                            <p className="text-gray-600 text-sm">
                            As a practice grows, DME and ambulatory billing services scale accordingly.
                                                        </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/cusatomized-billing-solutions-06.svg"
                                alt="Clearing House rejections"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                              Customizable Billing Solutions
                                                           </h3>
                            <p className="text-gray-600 text-sm">
                            Tailored billing services meet the specific needs of each practice.
                                                        </p>
                        </div>
                        <div className="bg-gray-50  rounded-lg p-6 text-center">
                            <Image
                                src="/error-reduction-07.svg"
                                alt="Denial management"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Error Reduction</h3>
                            <p className="text-gray-600 text-sm">
                            Minimizing delays and rejections, leading to smoother operations.
                            </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <Image
                                src="/data-driven-insights-08.svg"
                                alt="A/R Recovery"
                                width={48}
                                height={48}
                                className="mx-auto mb-4"
                            />
                            <h3 className="font-semibold mb-2">Data-Driven Insights</h3>
                            <p className="text-gray-600 text-sm">
                            Monitor performance, make informed decisions, and optimize your practice's profitability.
                                                       </p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 text-center">
                            <Image
                                src="/patient-satisfaction-05.svg"
                                alt="Quality check"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Patient Satisfaction</h3>
                            <p className="text-gray-600 text-sm">
                            Efficient Billing enhance the overall patient experience and satisfaction.                            </p>
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}

export default page
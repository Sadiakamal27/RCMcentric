import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TestimonialCarousel from '@/components/TestimonialCarousel';


function page() {
    return (
        <div>
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-500 text-white py-40 px-5 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center md:items-start px-5 md:px-10 gap-10">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-left">
                        <h3 className="text-sm uppercase tracking-widest mb-2">
                            CREDENTIALING & ENROLLMENT
                        </h3>
                        <h1 className="text-3xl font-bold mb-4">
                            Medical Credentialing Services That Save Your Time & Frustration
                        </h1>
                        <hr className="w-30 h-0.25 bg-white mb-6" />
                        <p className="text-lg max-w-2xl">
                            Get rid of your credentialing woes and get enrolled with great efficiency.
                            Our highly experienced team manages everything and processes applications
                            with correct information.
                        </p>
                        <Link href="/ContactUs">
                            <Button className=" bg-red-500 mt-3 text-white rounded-full hover:bg-white hover:border-red-500 hover:text-blue-800 px-8 py-3 w-full sm:w-auto">
                                Discuss it Now

                            </Button>
                        </Link>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1">
                        <Image
                            src="/codingpage.png"
                            alt="Medical Credentialing"
                            width={800}
                            height={600}
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>


                </div>
            </section>

            <section className="bg-white py-8 sm:py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 sm:gap-0 mb-10 sm:mb-16">

                        {/* Revenue Card */}
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200  ">
                            <div className="mb-4 sm:mb-6">
                                <span className="text-5xl sm:text-6xl font-bold text-gray-600">WE</span>
                                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                                We think centric solution is a force for Good.
                            </h3>
                        </div>

                        {/* Centric Card */}
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 ">
                            <div className="mb-4 sm:mb-6">
                                <span className="text-5xl sm:text-6xl font-bold text-gray-600">YOU</span>
                                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                                You're seeking a certified billing partner.
                            </h3>
                        </div>

                        {/* Managing Card */}
                        <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center border border-gray-200 ">
                            <div className="mb-4 sm:mb-6">
                                <span className="text-5xl sm:text-6xl font-bold text-gray-600">US</span>
                                <span className="text-5xl sm:text-6xl font-bold text-red-500">.</span>
                            </div>
                            <h3 className="text-base sm:text-lg font-medium text-gray-600 leading-relaxed">
                                Together, let's protect and accelerate your Practice.
                            </h3>
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-2 mb-5 bg-gray-100">
                <div className="max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        {/* Left Column - Text Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
                                The Key to Faster Reimbursements
                            </h2>
                            <hr className="border-red-500 w-16 border-t-2 mb-6" />
                            <p className="text-gray-700 mb-4">
                                Enrollment determines how soon a provider can begin billing for services. Without being enrolled with insurers, even fully credentialed providers cannot collect payments. This makes enrollment a mission-critical function, especially when onboarding new staff or expanding into new markets.
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Timely, accurate payer enrollment:</strong>
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />
                                    Eliminates billing gaps caused by ineligibility
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />
                                    Keeps provider directories up to date
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />
                                    Enables electronic claim submission with reduced denial rates
                                </li>
                            </ul>

                            <p className="text-gray-700">
                                The longer enrollment takes, the more revenue sits in limbo—especially with large insurance networks or government payers.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/Webpage-illustration.webp"
                                alt="Doctor with documents"
                                width={800}
                                height={800}
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 text-gray-800">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-600">
                        Why Credentialing Is Essential for Compliance and Trust
                    </h2>

                    {/* Red underline */}
                    <hr className="w-20 border-t-2 text-gray-700 border-red-400 mb-6" />

                    {/* Paragraphs */}
                    <p className="mb-4">
                        Proper credentialing isn't just an administrative task—it's a compliance obligation and a trust-building tool. It validates a provider's professional standing and eligibility to offer services within regulated healthcare systems.
                    </p>
                    <p className="mb-4">
                        When done correctly, credentialing prevents regulatory violations, reduces the risk of denied claims, and reinforces the quality standards patients expect from healthcare organizations. Practices that overlook credentialing risk not only payment interruptions but potential legal repercussions.
                    </p>
                    <p className="mb-4">
                        From ensuring licensing accuracy to confirming work history and board certifications, credentialing allows hospitals and private practices to operate with integrity and assurance.
                    </p>

                    {/* Emphasis line */}
                    <p className="font-semibold">
                        It also helps:
                    </p>
                    <div className="grid  text-gray-700 grid-cols-1 sm:grid-cols-3  gap-6 mt-6">
                        <Card className='border-none shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader>
                                <CardTitle> Safeguard public trust in medical professionals</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Verifies providers meet standards,
                                    reinforcing patient confidence in their qualifications and care.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className='border-none shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader>
                                <CardTitle>Mitigate liability from negligent hiring or outdated credentials</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>Reduces legal risk by ensuring all staff are properly vetted and up to date.</CardDescription>
                            </CardContent>
                        </Card>
                        <Card className='border-none shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader>
                                <CardTitle> Create a competitive edge in value-based care environments</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>practices to meet payer expectations and outperform in
                                    quality-driven reimbursement models.</CardDescription>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </section>

            <section className="py-12 px-4 md:px-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Image */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/new-1.webp" // Replace with actual image path
                                alt="Credentialing process"
                                width={600}
                                height={600}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        {/* Right Column - Text Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why Practices Struggle with Credentialing Alone
                            </h2>
                            <hr className="border-red-500 w-16 border-t-2 mb-6" />
                            <p className="text-gray-700 mb-4">
                                Many practices underestimate the complexity of credentialing and enrollment. These processes require meticulous data entry, deep understanding of payer-specific requirements, and consistent tracking—something most internal teams aren't trained or staffed to handle.
                            </p>
                            <p className="text-gray-700 mb-4">
                                In-house credentialing often leads to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />
                                    Submissions with missing or inaccurate information</li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />

                                    Delayed approvals due to lack of follow-up</li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />

                                    Expired licenses or certificates going unnoticed</li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-800 flex-shrink-0 mt-1" />

                                    Manual tracking that falls behind during peak workload</li>
                            </ul>
                            <p className="text-gray-700">
                                This directly impacts revenue and can delay the start of services for new hires, ultimately disrupting operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-gray-600 mb-2">
                        Our Medical Credentialing Services Include
                    </h2>
                    <div className="flex items-center justify-center my-4 sm:my-6">

                        <div className="h-0.5 bg-red-400 w-40 sm:w-36"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example Card - repeat for each service */}
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/certificate.png"
                                alt="Registration"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                                Credentialing</h3>
                            <p className="text-gray-600 text-1xl">
                                Provider enrollment and physician credentialing services ensure that you are
                                credentialed and compliant with state and federal regulations to provide healthcare services.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/team.png"
                                alt="Charge Entry"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                                Dedicated Team                </h3>
                            <p className="text-gray-600 text-1xl">
                                Through our advanced billing solutions, a team that completes the credentialing details
                                and submits it to commercial Insurances, Medicare and Medicaid, as requested by healthcare physicians.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/compliant (1).png"
                                alt="Claim Submission"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                                Compliance </h3>
                            <p className="text-gray-600 text-1xl">
                                Our Physician Credentialing Services ensure compliance with the National Committee for
                                Quality Assurance and the Department of Health and Family Services.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/schedule.png"
                                alt="Insurance Verification"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                                Crucial Follow Ups</h3>
                            <p className="text-gray-600 text-sm">
                                Our medical billing and credentialing services ensure that all
                                follow-ups are performed properly for a smooth enrollment.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/internet.png"
                                alt="Payment Posting"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Portal Registrations</h3>
                            <p className="text-gray-600 text-sm">
                                Create and update CAQH & PECOS credentialing portals, Insurance portals
                                and web logins for providers.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/maintenance.png"
                                alt="Clearing House rejections"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">
                                Maintenance of Data                </h3>
                            <p className="text-gray-600 text-sm">
                                Auditing, organizing and correcting data in management systems and databases
                                to ensure accuracy and accessibility.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/contract.png"
                                alt="Denial management"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Contracting Issues</h3>
                            <p className="text-gray-600 text-sm">
                                We resolve contracting issues, address issues, verifications, credentialing requirements and detailed reports of coverage.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/technology.png"
                                alt="A/R Recovery"
                                width={48}
                                height={48}
                                className="mx-auto mb-4"
                            />
                            <h3 className="font-semibold mb-2">Data Integrity</h3>
                            <p className="text-gray-600 text-sm">
                                We integrate data between insurance and practice or in billing software. Our IT team has ability to integrate all data accurate.                            </p>
                        </div>
                        <div className="bg-gray-50 border-1 border-gray-500 rounded-lg p-6 text-center">
                            <Image
                                src="/updated.png"
                                alt="Quality check"
                                width={48}
                                height={48}
                                className="mx-auto mb-4 mt-4"
                            />
                            <h3 className="font-semibold mb-2">Updates and Changes</h3>
                            <p className="text-gray-600 text-sm">
                                Our medical credentialing team can update or change your information for
                                credentialing or re-credentialing.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-red-400 py-37 text-center">
                <div className="max-w-7xl mx-auto px-10">
                    <p className="text-white text-sm mb-4">READY TO START?</p>
                    <h2 className="text-5xl font-bold text-white mb-4">Start Today & Get Enrolled Faster!</h2>
                    <Link href="/TalktoSales">
                    <Button className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white rounded-full px-6 py-2">
                        Get Started Now
                    </Button>
                    </Link>
                </div>
            </section>

            {/* Testimonial Carousel Section */}
            <TestimonialCarousel />

        </div>
    )
}

export default page
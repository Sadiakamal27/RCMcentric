"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AutoPlayVideo from "@/components/AutoPlayVideo"
import { ArrowRight } from "lucide-react"




function page() {
    return (
        <div className="min-h-screen py-20 bg-white">

            {/* Hero Section */}
            <section className="py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-red-400 text-lg font-medium mb-2">Make Telehealth Convenient</p>
                        <div className="flex items-center mb-4">
                            <h1 className="text-3xl sm:text-5xl font-bold text-gray-700">
                                Efficient Telehealth Billing for Seamless Operations
                            </h1>
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg mb-8">
                            Telehealth is the use of digital communication technologies to provide healthcare
                            services and consultations remotely, enabling patients to receive medical care from any location.
                            WeCare RCM helps practitioners improve telehealth services by providing expert support in navigating telehealth billing
                            regulations and offering customized solutions to optimize revenue cycle management.
                        </p>
                        <div className="w-full max-w-md mx-auto lg:mx-0 flex flex-wrap sm:flex-nowrap gap-4">
                            <Link href="Pricing">
                                <Button className="bg-blue-600 text-white hover:bg-red-400 rounded-md px-6 py-2 w-full sm:w-auto">
                                    View Pricing
                                </Button>
                            </Link>
                            <Link href="ContactUs">
                                <Button className="bg-white text-red-400 hover:bg-red-600 hover:text-white border border-red-400 rounded-full px-6 py-2 w-full sm:w-auto">
                                    Get a Quote
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/Checkup-Apppointmens-9.gif"
                            alt="Billing Illustration"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                        Advantages of Using Telehealth
                    </h2>
                    <hr className="w-30 h-0.5 bg-red-500 mb-6" />

                    {/* Top bullet points */}
                    <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
                        {/* Left side */}
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">→</span>
                                Enables consultations with specialists in remote or underserved areas.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">→</span>
                                Facilitates regular health monitoring for chronic conditions through digital tools.
                            </li>
                        </ul>

                        {/* Right side */}
                        <ul className="space-y-3 text-gray-700 -mt-6 md:-mt-10">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">→</span>
                                Telehealth allows patients to consult doctors from the comfort of their homes.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">→</span>
                                Reduces the need for travel and waiting times in clinics.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500">→</span>
                                Lowers healthcare expenses by minimizing transportation and facility costs.
                            </li>
                        </ul>
                    </div>

                    {/* Card grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Increased Access to Care</h3>
                            <p className="text-gray-600">Provides healthcare to patients in remote or underserved areas.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Convenience</h3>
                            <p className="text-gray-600">Allows patients to receive care from home, reducing travel time.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Cost Savings</h3>
                            <p className="text-gray-600">Lowers healthcare costs by reducing overhead and transportation expenses.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Flexibility for Healthcare Providers</h3>
                            <p className="text-gray-600">Enables doctors and healthcare professionals to offer flexible scheduling and work remotely.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Timely Interventions</h3>
                            <p className="text-gray-600">Allows quicker consultations, leading to faster diagnosis and treatment.</p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-gray-800 mb-2">Improved Continuity of Care</h3>
                            <p className="text-gray-600">Ensures consistent care, especially for patients with long-term health conditions.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div
                    className="min-h-[60vh] sm:min-h-[48vh] bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col justify-center items-center px-3 sm:px-4 pb-6 md:pb-40"
                >
                    {/* Heading + Description */}
                    <div className="text-center p-4 sm:p-6 max-w-6xl mx-auto">
                        <p className="text-sm sm:text-base md:text-lg font-medium mb-2">Make Telehealth Convenient</p>

                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
                            TeleHealth Billing and Coding
                        </h1>
                        <div className="w-12 sm:w-16 md:w-24 h-1 bg-red-500 mx-auto"></div>
                    </div>

                    {/* Floating 3 cards (first row) */}
                    <div
                        className="relative md:absolute md:top-1/4 md:left-1/2 md:transform md:-translate-x-1/2 w-[98%] sm:w-[95%] md:w-[90%] max-w-6xl px-2 sm:px-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img
                                        src="/telehealth-specific-codes-icon-01-1-2048x2048.png"
                                        alt="HIPAA Compliant"
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Telehealth-Specific Codes</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        Telehealth services require distinct CPT and HCPCS codes to identify the type of service provided.
                                        These codes ensure accurate billing and reimbursement for remote consultations. We ensure your telehealth data remains fully secure and compliant with HIPAA regulations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img
                                        src="/POS-Code-icon-1-01-2048x2048.png"
                                        alt="Certified Expert Teams"
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Place of Service (POS) Codes</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        POS codes, such as "02" for telehealth; indicate where the service was delivered.
                                        This helps payers distinguish between in-person and remote services.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg  border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img
                                        src="/Medicare-Telehealtcare-Code-2048x1721.png"
                                        alt="24/7 Help & Support"
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Medicare Telehealth Codes</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        Medicare has specific billing codes for telehealth services, which include evaluations, consultations, and therapy sessions.
                                        Accurate use of these codes is crucial for providers to receive reimbursement from Medicare.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Second row of 3 cards (below, normal flow) */}
                <div className="mt-6 sm:mt-12 md:mt-60 max-w-6xl mx-auto px-3 sm:px-4 mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img
                                    src="/Commercial-Payer-Coding-Guidelines-1-01-2048x2048.png"
                                    alt="Trusted By Leaders"
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                                    Commercial Payer Coding Guidelines</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Each commercial insurance company may have its own coding guidelines for telehealth services.
                                    Providers need to stay updated on these to ensure compliance and avoid claim denials.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img
                                    src="/Telehealth-for-behavioral-health-01-2048x1928.png"
                                    alt="Another Feature"
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Telehealth for Behavioral Health</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Behavioral health telehealth services have specific codes for therapy and counseling sessions.
                                    Proper coding ensures compliance with both state and payer regulations.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img
                                    src="/Coding-for-RPM-01-2048x2048.png"
                                    alt="Next Feature"
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Coding for Remote Patient Monitoring (RPM)</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    RPM involves using technology to monitor patient data from a distance and has its own set of billing codes.
                                    Accurate coding of RPM helps in billing for ongoing patient care and monitoring.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-[#4267b2] py-12 px-4 sm:px-8 lg:px-16 text-white">
                <div className="max-w-7xl mx-auto">
                    {/* Top Flex Section */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

                        {/* Left Image Section */}
                        <div className="flex-1 flex justify-center lg:justify-start">
                            <img
                                src="/hippaaaa.jpg"
                                alt="Doctor illustration"
                                className="w-56 sm:w-72 md:w-80 lg:w-96  ml-19"
                            />
                        </div>

                        {/* Right Content Section */}
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                                HIPAA Compliance in Telehealth Billing
                            </h2>
                            {/* Red Line */}
                            <div className="flex justify-center lg:justify-start">
                                <hr className="w-24 h-1 bg-red-500 mb-6" />
                            </div>

                            {/* Bullet Points */}
                            <ul className="space-y-3 text-sm sm:text-base md:text-lg text-white/90">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">›</span>
                                    Requires HIPAA-compliant, encrypted platforms.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">›</span>
                                    Obtains patient consent for telehealth services.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">›</span>
                                    Controls secure storage and access to health records.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">›</span>
                                    Tracks data access through audit trails.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-400">›</span>
                                    Ensures secure transmission of PHI in virtual consultations.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

                        <div className="bg-[#365899] p-6 rounded-lg ">
                            <h3 className="text-lg font-bold mb-3">Encryption of Data</h3>
                            <p className="text-sm sm:text-base text-white/90">
                                Encrypt all patient health information (PHI) during transmission
                                and storage to protect it from unauthorized access.
                            </p>
                        </div>

                        <div className="bg-[#365899] p-6 rounded-lg ">
                            <h3 className="text-lg font-bold mb-3">Business Associate Agreements (BAAs)</h3>
                            <p className="text-sm sm:text-base text-white/90">
                                Ensure that any third-party service providers, such as telehealth
                                platforms or billing companies, sign BAAs to maintain HIPAA compliance.
                            </p>
                        </div>

                        <div className="bg-[#365899] p-6 rounded-lg ">
                            <h3 className="text-lg font-bold mb-3">Access Control</h3>
                            <p className="text-sm sm:text-base text-white/90">
                                Implement strict access control policies to limit who can view or
                                access patient information, ensuring only authorized personnel are involved.
                            </p>
                        </div>

                        <div className="bg-[#365899] p-6 rounded-lg ">
                            <h3 className="text-lg font-bold mb-3">Regular Risk Assessments</h3>
                            <p className="text-sm sm:text-base text-white/90">
                                Conduct periodic risk assessments to identify potential security
                                vulnerabilities in telehealth systems and implement corrective actions where necessary.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AutoPlayVideo
                        src="/claim-process.webm"
                        wrapperClassName="flex flex-col items-center"
                        videoClassName="w-full rounded-lg"
                    />
                </div>
            </section>

            <section className="bg-blue-50 py-12 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center mb-8 md:mb-0">
                        <Image
                            src="/importance-of-telehealth.svg"
                            alt="Financial Ecosystem Illustration"
                            width={500}
                            height={350}
                            className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
                        />
                    </div>
                    {/* Right: Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-gray-600 mb-2 text-center md:text-left">
                            <span className="text-blue-700 font-bold">Importance</span>{" "}
                            <span className="text-gray-700 font-bold"> and Use of Telehealth</span>
                        </h2>
                        <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
                        <p className="text-gray-700 mb-6 text-center md:text-left">
                            Telehealth plays a vital role in modern healthcare by enhancing access to medical services,
                            particularly for patients in remote or underserved areas. It allows for real-time consultations,
                            diagnoses, and follow-ups, reducing the need for in-person visits and making healthcare more
                            convenient and accessible. Telehealth is particularly important for managing chronic conditions,
                            mental health services, and routine check-ups,
                            ensuring continuity of care even when face-to-face interactions are not possible.
                            <br />
                            The use of telehealth also promotes cost savings for both providers and patients by
                            minimizing travel expenses, reducing overhead costs, and decreasing hospital readmissions.                       </p>
                        <Link href="/ContactUs">
                            <Button className="border-2 bg-red-500 text-white rounded-md hover:bg-blue-600 hover:border-blue-600 hover:text-white px-8 py-3 w-full sm:w-auto">
                                Contact Us
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>




            <section className="relative w-full text-center py-20 overflow-hidden">
                {/* Red background */}
                <div className="absolute inset-0 bg-red-400 z-0" />

                {/* Blue angled overlays */}
                <div className="absolute inset-0">
                    {/* Left blue */}
                    <div className="absolute top-0 left-0 w-full h-full bg-blue-600 clip-left" />
                    {/* Right blue */}
                    <div className="absolute top-0 right-0 w-full h-full bg-blue-600 clip-right" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <p className="uppercase text-sm font-semibold tracking-wider text-gray-200 mb-4">
                        Looking for expert services?
                    </p>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                        If you are looking for expert and cost-effective
                        Telehealth Billing services, Get in touch with us today!
                    </h2>
                    <Link href="/TalktoSales" >
                    <Button className="bg-white hover:bg-blue-700 hover:text-white text-gray-700 px-6 py-3 rounded-full text-md">
                        Get Started Now
                    </Button>
                    </Link>
                </div>
            </section>


            <section className="py-12 px-4 md:px-8 bg-white mt-20">
                {/* Heading */}
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Streamline Your Telehealth Billing with WeCare RCM
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Effortlessly manage and process telehealth claims with our specialized
                        billing services. We ensure accurate, timely submissions and
                        comprehensive follow-up, so you can focus on patient care. Let us
                        handle the complexities of telehealth billing while you enjoy a
                        smoother, more efficient workflow.
                    </p>
                    {/* Gray Divider Line */}
                    <div className="h-[2px] w-56 bg-red-500 mt-6 mb-12 mx-auto"></div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <img
                            src="/Webpage-illustrations-and-imags-12-2048x2048.png" // replace with your image path
                            alt="Telehealth Illustration"
                            className="max-w-sm w-full"
                        />
                    </div>

                    {/* Right Side - Features (no cards, just text) */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Effortless Claim Management
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Simplify your billing workflow with accurate and timely claim
                                submissions. Our system reduces errors and speeds up
                                reimbursement, so you can focus on patient care.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Seamless Integration
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Integrate our billing solutions smoothly with your telehealth
                                platform. Enjoy a hassle-free setup and streamline your billing
                                processes without disruption.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Real-Time Tracking
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Keep track of your claims and payments in real time. Our intuitive
                                tracking system provides up-to-date information, ensuring you stay
                                informed every step of the way.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                Dedicated Support
                            </h3>
                            <p className="text-gray-600 mt-2 text-sm">
                                Benefit from expert assistance tailored to your needs. Our
                                dedicated support team is available to address any billing issues
                                and provide solutions promptly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>










        </div >

    )
}

export default page
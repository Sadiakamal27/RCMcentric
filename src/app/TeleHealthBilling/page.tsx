import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"


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
                            WeCare Centric helps practitioners improve telehealth services by providing expert support in navigating telehealth billing
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
                    className="min-h-[60vh] sm:min-h-[50vh] bg-gradient-to-b from-blue-900 to-blue-700
    text-white flex flex-col justify-center items-center px-3 sm:px-4"
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
                        className="absolute top-[70%] sm:top-[65%] md:top-1/3 left-1/2 transform 
      -translate-x-1/2 w-[98%] sm:w-[95%] md:w-[90%] max-w-6xl px-2 sm:px-4"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img src="/telehealth-specific-codes-icon-01-1-2048x2048.png" alt="HIPAA Compliant" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Telehealth-Specific Codes</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        Telehealth services require distinct CPT and HCPCS codes to identify the type of service provided.
                                        These codes ensure accurate billing and reimbursement for remote consultations. We ensure your telehealth data remains fully secure and compliant with HIPAA regulations.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img src="/Certfied-Expert-Team-02.svg" alt="Certified Expert Teams" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Certified Expert Teams</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        Our experienced team delivers accurate billing and coding support for telehealth.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white text-black p-3 sm:p-4 md:p-6 rounded-lg shadow-lg border-none w-full">
                                <CardContent className="flex flex-col items-start text-left">
                                    <img src="/Help-and-Support-new.svg" alt="24/7 Help & Support" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">24/7 Help & Support</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        Get round-the-clock assistance from our telehealth billing experts.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Second row of 3 cards (below, normal flow) */}
                <div className="mt-80 sm:mt-72 md:mt-60 max-w-6xl mx-auto px-3 sm:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img src="/Trusted-By-leaders-04.svg" alt="Trusted By Leaders" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Trusted By Leaders</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Top healthcare providers rely on us for telehealth billing solutions.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img src="/Some-Other.svg" alt="Another Feature" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Another Feature</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Description of the feature goes here to explain the benefit clearly.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white text-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border-none w-full">
                            <CardContent className="flex flex-col items-start text-left">
                                <img src="/Some-Other-2.svg" alt="Next Feature" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-3 sm:mb-4" />
                                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Next Feature</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Another benefit statement to highlight your service or product.
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





        </div >

    )
}

export default page
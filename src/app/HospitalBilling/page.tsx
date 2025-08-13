import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

function page() {
    return (
        <div className="bg-gray-50 ">
            <section className="py-12c">
                <div className=" max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text and Buttons */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-sm text-blue-800">Comprehensive Solutions for Medical Billing</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            Explore RCM Centric's Innovative Hospital Billing Solutions
                        </h2>
                        <div className="h-[2px] w-16 bg-red-500 mt-2 mb-4 mx-auto md:mx-0 md:ml-0"></div>
                        <p className="text-gray-600 mb-6 max-w-lg">
                            In today's rapidly changing healthcare landscape, managing hospital billing efficiently is critical to ensuring financial stability and uninterrupted patient care. Our hospital billing services are designed to alleviate the administrative burden while maximizing revenue for healthcare facilities. With expertise in medical billing & coding, compliance, and reimbursement processes, we provide tailored solutions that align with the unique needs of hospitals.
                        </p>
                        <div className="space-x-4">
                            <Button
                                className="bg-blue-600 text-white hover:bg-red-500 hover:text-white transition-colors duration-300"
                            >
                                Talk to Sales
                            </Button>
                            <Button
                                variant="outline"
                                className="border-red-500 text-red-500 hover:border-blue-600 hover:text-blue-600 transition-colors duration-300"
                            >
                                Discover More
                            </Button>
                        </div>
                    </div>
                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/Webpage-illustrations-and-imags-21.png" // Replace with the actual image path
                            alt="Billing Illustration"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>


            <section className="py-12">
                <div className=" max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/a-01.png" // Replace with the actual image path
                            alt="Billing Benefits Illustration"
                            width={500}
                            height={400}
                            className=" mr-8 object-contain"
                        />
                    </div>
                    {/* Right column: Text and Points */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-sm text-gray-500">Maximizing Efficiency and Revenue</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mt-4">
                            Benefits of Outsourcing Your Billing Services to RCM Centric
                        </h2>
                        <div className="h-[2px] w-16 bg-red-500 mt-6 mb-4 mx-auto md:mx-0 md:ml-0"></div>
                        <p className="text-gray-600">	Outsourcing your hospital billing services offers several key
                            advantages that can streamline your revenue cycle, save time, and reduce overhead costs.
                            Here’s why partnering with us is a smart choice for hospitals:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-4 text-gray-600">
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Increased claim accuracy and fewer rejections</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Boost revenue with accurate claims.</span>
                            </div>

                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Faster reimbursements from payers</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Save on in-house billing costs.</span>
                            </div>

                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Reduced administrative burden on staff</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Focus more on patient care.</span>
                            </div>

                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Lower overhead and operational costs</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Ensure compliance with healthcare regulations.</span>
                            </div>

                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Access to expert billing professionals</span>
                            </div>
                            <div className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">»</span>
                                <span>Improve efficiency for faster reimbursements.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-200">
                <div className=" max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-2">
                            Why we are better than others?
                        </h2>
                        <div className="h-[2px] w-16 bg-gray-500 mt-6 mb-8 mx-auto md:mx-0"></div>
                        <ul className="space-y-6 text-gray-600">
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Experienced team ensuring accurate billing and timely claim submissions.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Tailored solutions to meet your specific hospital billing needs.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Proven record of reducing denials and boosting collections.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Advanced technology for streamlined and efficient billing processes.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Transparent reporting with real-time financial updates and insights.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Dedicated support for fast and effective issue resolution.
                            </li>
                            <li className="flex items-start">
                                <span className="w-4 h-4 mr-2 mt-1 text-red-500">➔</span>
                                Strong focus on compliance to avoid regulatory penalties.
                            </li>
                        </ul>
                    </div>
                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/why-we-are-better-01.svg" // Replace with the actual image path
                            alt="Why Better Illustration"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-2 mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="  border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500">
                        <CardContent className="p-6 ">
                            <h3 className="text-xl  font-semibold text-gray-800 mb-2">
                                Personalized Service
                            </h3>
                            <p className="text-gray-600">
                                While many competitors offer generic solutions,
                                we provide personalized billing strategies tailored
                                to the unique needs of your hospital. We take the time to
                                understand your specific challenges and goals, ensuring optimal results.                            </p>
                        </CardContent>
                    </Card>
                    <Card className=" border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Dedicated Support
                            </h3>
                            <p className="text-gray-600">
                                Unlike some competitors who may juggle multiple clients with limited resources,
                                we assign a dedicated team to your account.
                                This means quicker response times, better attention to detail, and proactive communication.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className=" border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Advanced Technology                            </h3>
                            <p className="text-gray-600">
                                We leverage cutting-edge billing software and analytics tools that streamline the claims
                                process and reduce errors. Our competitors may rely on outdated or manual processes,
                                which can lead to delays and inaccuracies.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>
            
            <section className="py-12 bg-red-400">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-sm text-white mb-4">
                    Looking For Expert Services?
                    </h3>
                    <h4 className="text-4xl font-black text-white mb-4">
                    If you are looking for expert and cost-effective Medical Billing services, Get in touch with us today!
                    </h4>
                    <Button
                        className="text-white rounded-full h-10 w-35 font-bold bg-blue-700 hover:bg-white hover:text-blue-700 transition-colors duration-300"
                    >
                        Get Started Now
                    </Button>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-1 h-22 bg-red-500"></div>
                            <h2 className="text-8xl md:text-4xl font-bold text-gray-800">
                                Your Solution for Streamlined Hospital Billing                            </h2>
                        </div>
                        <p className="text-gray-600 mb-6 max-w-lg">
                            Outsourcing your hospital billing services to a trusted partner like us can significantly
                            reduce errors, speed up payments, and improve overall financial performance.
                            By choosing us, you’re not just selecting a billing service—you’re choosing a dedicated
                            team that prioritizes accuracy, compliance, and efficiency,
                            helping your hospital thrive in an increasingly competitive environment.
                        </p>

                        <p className="text-gray-600 mb-6 max-w-lg">
                            Let us handle the complexities of hospital billing so that you can focus on what matters most: delivering exceptional patient care.
                            Ready to streamline your billing process and boost your revenue? Contact us today to get started.
                        </p>
                    </div>
                    {/* Right column: Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/HOSPITAL-BILLING-4f-01.png" // Replace with the actual image path
                            alt="Innovative Solutions Illustration"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

           
        </div>
    )
}

export default page
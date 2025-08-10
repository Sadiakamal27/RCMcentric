"use client"

import React from 'react'
import Image from 'next/image';
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const features = [
    {
        title: "Stable IT Processes",
        desc: "Our team of experienced professionals follows robust IT processes to maintain the stability and reliability of your IT infrastructure.",
        image: "/Stable-IT-processes-01.svg",
    },
    {
        title: "Safeguard IT Infrastructure",
        desc: "Through regular monitoring, security assessments, and system updates, we keep your sensitive healthcare data safe and secure.",
        image: "/Safeguard-IT-infrastructure-02.svg",
    },
    {
        title: "Timely Issue Resolution",
        desc: "We prioritize quick response and resolution to minimize downtime and ensure your systems are up and running smoothly.",
        image: "/Timely-issue-resolution-03.svg",
    },
    {
        title: "Support IT Evolution",
        desc: "We work closely with you to understand your unique requirements and provide strategic guidance to adapt and optimize your IT systems.",
        image: "/Support-IT-evolution-04.svg",
    },
];






function page() {

    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1, // triggers when 20% visible
        rootMargin: "0px",
    });

    const [row1Ref, row1Visible] = useIntersectionObserver({ threshold: 0.1 });
    const [row2Ref, row2Visible] = useIntersectionObserver({ threshold: 0.1 });
    const [row3Ref, row3Visible] = useIntersectionObserver({ threshold: 0.1 });

    

    return (

        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12 px-2 sm:px-6 text-center">
                <h1 className="text-2xl sm:text-5xl font-extrabold text-white mb-4 mt-19">
                    Healthcare IT Support Services
                </h1>
                <p className="text-white text-base sm:text-lg  p-10 mx-auto  mb-15 ">
                    Ensure Seamless IT Operations for Healthcare Providers with RCM Centric’s Expert IT Support Services. With over 10+ years of<br /> experience in healthcare IT, RCM Centric has been
                    dedicated to delivering reliable and efficient
                    IT support services to healthcare organizations,<br /> private practices, hospitals, and clinics.
                </p>
            </section>

            {/* Features Card Section */}
            <section className="max-w-6xl mx-auto -mt-12 z-10 relative">
                <div className="bg-white min-h-[250px] rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    {features.map((feature, idx) => {
                        const [ref, isVisible] = useIntersectionObserver({
                            threshold: 0.1,
                            rootMargin: "0px",
                        });

                        return (
                            <div
                                key={idx}
                                ref={ref}
                                className={`flex-1 flex flex-col text-left px-2 transition-all duration-700 
                ${isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                            >
                                <div className="mb-2">
                                    <Image src={feature.image} alt={feature.title} width={48} height={48} />
                                </div>
                                <h3 className="font-bold text-gray-700 mb-1">{feature.title}</h3>
                                <p className="text-gray-500 text-sm">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section
                ref={ref}
                className={` mt-10 py-8 sm:py-12 transition-all duration-700 
                          ${isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
                    {/* Left: Illustration */}
                    <div className="flex-1 flex justify-center mb-8 md:mb-0">
                        <Image
                            src="/bb-01.webp"
                            alt="Dream Team"
                            width={400}
                            height={300}
                            className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg"
                        />
                    </div>

                    {/* Right: Text */}
                    <div className="flex-1">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
                            Partner with RCM Centric for Reliable Healthcare IT Support
                        </h2>
                        <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
                        <p className="text-gray-700 mb-6 text-center md:text-left">
                            By partnering with RCM Centric, you gain a trusted ally in managing your healthcare
                            IT infrastructure. Our experienced team is committed to delivering exceptional
                            support services tailored to the specific needs of healthcare organizations.
                        </p>
                        <p className="font-semibold text-gray-500 mb-5">
                            Contact us today to learn more about how RCM Centric’s IT support services
                            can enhance the performance and reliability of your healthcare IT systems.
                        </p>
                        <Link href="/TalktoSales">
                            <Button className="border-2 bg-red-500 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 hover:text-white px-8 py-3 w-full sm:w-auto">
                                Connect Now
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className=" mb-10 mt-19">
                <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
                    {/* Row 1 */}
                    <div
                        ref={row1Ref}
                        className={`grid grid-cols-1 md:grid-cols-2 items-start gap-6 
                        ${row1Visible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                    >
                        {/* Left column: Heading + red line */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                                The Benefits Healthcare IT Support <br /> Brings to Your Organization
                            </h2>
                            <div className="mt-8 w-26 h-0.5 bg-red-500 mb-4"></div>
                        </div>
                        {/* Right column: Paragraph */}
                        <div>
                            <p className="text-gray-600">
                                Are you seeking to maximize the efficiency and reliability of your healthcare IT
                                infrastructure? Discover the numerous benefits that healthcare IT support brings
                                and how RCM Centric can empower your organization to thrive in the digital age.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div
                        ref={row2Ref}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 
                        ${row2Visible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                    >
                        <Card className="shadow-lg border-none rounded-lg">
                            <CardHeader>
                                <CardTitle className='text-blue-600 text-3xl'>95%-99%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Medical application's availability due to proactive infrastructure monitoring.
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg border-none rounded-lg">
                            <CardHeader>
                                <CardTitle className='text-blue-600 text-3xl'>92% Plus</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Patient and physician satisfaction due to quicker response to IT issues and improved stability of healthcare software.            </CardContent>
                        </Card>
                    </div>

                    {/* Row 3 */}
                    <div
                        ref={row3Ref}
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 
            ${row3Visible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                    >
                        <Card className="shadow-lg border-none rounded-lg">
                            <CardHeader>
                                <CardTitle className='text-blue-600 text-3xl'>+6%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Productivity of nurses and physicians thanks to the reduced number of issues and timely help desk response.
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg border-none rounded-lg">
                            <CardHeader>
                                <CardTitle className='text-blue-600 text-3xl'>100%</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Regulatory compliance of the IT infrastructure or its delegated part due to security monitoring.
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div
                    ref={ref}
                    className={`max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden flex items-center gap-4 p-4 transition-all duration-500 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    {/* Left Side - Image */}
                    <div className="flex-shrink-0 w-40 h-40 relative">
                        <Image
                            src="/one.png"
                            alt="Sample"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>

                    {/* Right Side - Text */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">
                                Outsource Your Healthcare IT Support to Get These Benefits!
                            </h2>
                            <p className="mt-2 text-gray-600 mb-4">
                                Partner with RCM Centric's IT support experts to enhance the reliability of your IT ecosystem and ensure timely handling of IT support requests. By leveraging our expertise,
                                you can maintain the satisfaction of patients and medical staff while delivering quality healthcare services.
                            </p>
                        </div>


                        <Link href="/TalktoSales">
                            <Button className="border-2  bg-red-500 text-white rounded-full hover:bg-blue-700 hover:border-blue-700 hover:text-white px-8 py-3 w-full sm:w-auto">
                                Connect Now
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>

                    </div>
                </div>
            </section>

           










        </div>


    )
}

export default page
"use client"

import React, { useRef } from 'react'
import Image from 'next/image';
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionsSection from '@/components/SolutionsSection';
import SolutionsAndServices from '@/components/SolutionsAndServices';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp } from "lucide-react";



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


const customers = [
    {
        img: "/Healthcare-Providers-01.svg",
        title: "Healthcare Providers",
    },
    {
        img: "/Medical-Device-manufacturers-02.svg",
        title: "Medical Device Manufacturers",
    },
    {
        img: "/Medical-billing-companies-03.svg",
        title: "Medical Billing Companies",
    },
    {
        img: "/Pharmaceutical-companies-04.svg",
        title: "Pharmaceutical Companies",
    },
];

const items = [
    { icon: "/legal-system-150x150.png", text: "HIPAA Compliance" },
    { icon: "/warranty-150x150.png", text: "Certified Team" },
    { icon: "/live-chat-150x150.png", text: "Live Chat" },
    { icon: "/convenient-150x150.png", text: "Easy to Use" },
    { icon: "/remote-control-150x150.png", text: "Remote Monitoring" },
    { icon: "/availability-150x150.png", text: "Always Available" },
];

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What are Healthcare IT Support services?",
        answer:
            "Healthcare IT support services refer to the range of technical assistance and solutions provided to healthcare organizations to manage and maintain their information technology systems. These services encompass various areas, including hardware and software support, network management, data security, system integration, and electronic health record (EHR) management.",
    },
    {
        question: "Why are healthcare IT support services important?",
        answer:
            "They ensure healthcare organizations can operate smoothly, protect sensitive data, and comply with regulations, ultimately improving patient care and operational efficiency.",
    },
    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },

    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },

    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },
    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },
    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },
    {
        question: "What specific services are included in healthcare IT support?",
        answer:
            "Services include hardware & software support, network management, cybersecurity, data backup, disaster recovery, and compliance assistance.",
    },
];


function page() {

    const [selected, setSelected] = useState<string[]>([])

    const toggleSelection = (value: string) => {
        setSelected((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        )
    }
    
    const options = [
        "Billing Services",
        "Credentialing",
        "Claims Coding",
        "Pricing",
        "Other",
    ]

    const [partnerRef, partnerVisible] = useIntersectionObserver({
        threshold: 0.01, // triggers when just 1% visible
        rootMargin: "0px",
    });

    const [row1Ref, row1Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [row2Ref, row2Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [row3Ref, row3Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.01 });
    const [customersRef, customersVisible] = useIntersectionObserver({ threshold: 0.01 });
    const [c1Ref, c1Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [c2Ref, c2Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [c3Ref, c3Visible] = useIntersectionObserver({ threshold: 0.01 });

    // New refs for four-card section animations
    const [fourCardHeadingRef, fourCardHeadingVisible] = useIntersectionObserver({ threshold: 0.01 });
    const [fourCardRow1Ref, fourCardRow1Visible] = useIntersectionObserver({ threshold: 0.01 });
    const [fourCardRow2Ref, fourCardRow2Visible] = useIntersectionObserver({ threshold: 0.01 });


    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                // When we reach the end of the original items, reset to start seamlessly
                if (prev >= items.length) {
                    return 0;
                }
                return prev + 1;
            });
        }, 2000); // slide every 2 sec
        return () => clearInterval(interval);
    }, []);

    // Calculate responsive card width and gap
    const cardWidth = isMobile ? 200 : 224; // 200px mobile, 224px desktop
    const cardGap = isMobile ? 16 : 24; // 16px mobile, 24px desktop

    // Create a seamless infinite loop by duplicating items multiple times
    const loopedItems = [...items, ...items, ...items, ...items];


    const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12 px-2 sm:px-6 text-center">
                <h1 className="text-2xl sm:text-5xl font-extrabold text-white mb-4 mt-19">
                    Healthcare IT Support Services
                </h1>
                <p className="text-white text-base sm:text-lg  p-10 mx-auto  mb-15 ">
                    Ensure Seamless IT Operations for Healthcare Providers with WeCare RCM's Expert IT Support Services. With over 10+ years of<br /> experience in healthcare IT, WeCare RCM has been
                    dedicated to delivering reliable and efficient
                    IT support services to healthcare organizations,<br /> private practices, hospitals, and clinics.
                </p>
            </section>

            {/* Features Card Section */}
            <section className="max-w-6xl mx-auto -mt-12 z-10 relative">
                <div className="bg-white min-h-[250px] rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
                    {features.map((feature, idx) => {
                        const [ref, isVisible] = useIntersectionObserver({
                            threshold: 0.01,
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
                ref={partnerRef}
                className={` mt-10 py-8 sm:py-12 transition-all duration-700 
                          ${partnerVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
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
                            Partner with WeCare RCM for Reliable Healthcare IT Support
                        </h2>
                        <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
                        <p className="text-gray-700 mb-6 text-center md:text-left">
                            By partnering with WeCare RCM, you gain a trusted ally in managing your healthcare
                            IT infrastructure. Our experienced team is committed to delivering exceptional
                            support services tailored to the specific needs of healthcare organizations.
                        </p>
                        <p className="font-semibold text-gray-500 mb-5">
                            Contact us today to learn more about how WeCare RCM's IT support services
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
                                and how WeCare RCM can empower your organization to thrive in the digital age.
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
                    ref={benefitsRef}
                    className={`max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-md overflow-hidden flex items-center gap-4 p-4 transition-all duration-500 ease-out transform ${benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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
                                Partner with WeCare RCM's IT support experts to enhance the reliability of your IT ecosystem and ensure timely handling of IT support requests. By leveraging our expertise,
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

            {/* New Four-Card Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div
                        ref={fourCardHeadingRef}
                        className={`text-left mb-12 ${fourCardHeadingVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
                            Healthcare IT Consulting Services Options
                        </h2>
                        <div className="w-20 h-1 bg-red-500  mt-2"></div>
                    </div>

                    <div className="space-y-8">
                        {/* Row 1: Two cards */}
                        <div
                            ref={fourCardRow1Ref}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${fourCardRow1Visible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                        >
                            {/* Card 1 */}
                            <Card className="h-full  border-none rounded-xl ">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold text-gray-700 text-left">
                                        Assessment of the existing IT environment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Analysis of your business needs and workflows</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Review of the IT environment components, data flows between them, etc.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Security and compliance analysis of the IT ecosystem.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>IT environment optimization guidance.
                                            </span>
                                        </li>
                                        <li className="flex items-start mb-4">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Compliance guidance on HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA regulations</span>
                                        </li>
                                    </ul>

                                    <SolutionsSection
                                        buttonText="Request IT Assessment →"
                                        buttonClassName="border border-blue-500 text-blue-700 bg-white hover:text-white hover:bg-blue-700"
                                        showDropdown={false}
                                    />
                                </CardContent>
                            </Card>

                            {/* Card 2 */}
                            <Card className="h-full border-none rounded-xl ">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold text-gray-700 text-left">
                                        IT strategy consulting
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Analysis of your business needs and planning of IT initiatives to tackle them.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>An efficient healthcare IT strategy and implementation roadmap to improve IT performance, reliability, ensure seamless workflows.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Software integration planning.
                                            </span>
                                        </li>
                                        <li className="flex items-start mb-8">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Compliance guidance on HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA regulations.</span>
                                        </li>

                                    </ul>

                                    <SolutionsSection
                                        buttonText="Request IT Consultant →"
                                        buttonClassName="border border-blue-500 text-blue-700 bg-white hover:text-white hover:bg-blue-700"
                                        showDropdown={false}
                                    />
                                </CardContent>
                            </Card>
                        </div>

                        {/* Row 2: Two cards */}
                        <div
                            ref={fourCardRow2Ref}
                            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${fourCardRow2Visible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
                        >
                            {/* Card 3 */}
                            <Card className="h-full  border-none rounded-xl  ">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold text-gray-700 text-left">
                                        Medical solution consulting
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Analysis of your business needs, operational processes, etc.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Technical design of the medical solution and its integrations (with EHR, CRM, revenue management software, etc.).
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Medical software costs estimation and ROI analysis.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Compliance guidance on HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA regulations.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Healthcare software implementation.
                                            </span>
                                        </li>
                                        <li className="flex items-start mb-4">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>User training.
                                            </span>
                                        </li>
                                    </ul>
                                    <SolutionsSection
                                        buttonText=" Request Solution Consultanting→ "
                                        buttonClassName=" border border-blue-500 text-blue-700 bg-white hover:text-white hover:bg-blue-700"
                                        showDropdown={false}
                                    />
                                </CardContent>
                            </Card>

                            {/* Card 4 */}
                            <Card className="h-full  border-none rounded-xl ">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl font-bold text-gray-700 text-left">
                                        Digital health startup consulting

                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Market and business needs analysis.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Healthcare software idea productization.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Healthcare software design (feature list, architecture, tech stack, etc.) Business case design (with cost and ROI estimation).
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Compliance guidance on HIPAA, HITECH, FDA, GDPR, MDR, IVDR, SAMHSA regulations.
                                            </span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>Healthcare software development.
                                            </span>
                                        </li>
                                        <li className="flex items-start mb-4">
                                            <span className="w-2 h-2 bg-red-500  mt-2 mr-3 flex-shrink-0"></span>
                                            <span>After-launch support.
                                            </span>
                                        </li>
                                    </ul>
                                    <SolutionsSection
                                        buttonText=" Request Startup Consultanting→ "
                                        buttonClassName=" border border-blue-500 text-blue-700 bg-white hover:text-white hover:bg-blue-700"
                                        showDropdown={false}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#446CB3] py-16 mb-10 mt-19">
                <div
                    ref={customersRef}
                    className={`max-w-7xl mx-auto px-4 transition-all duration-500 ease-out transform ${customersVisible ? "animate-slide-up-fast" : "slide-up-hidden"
                        }`}
                >
                    {/* Heading */}
                    <h2 className="text-white text-3xl font-bold text-center">
                        Customers We Serve
                    </h2>

                    {/* Centered line */}
                    <div className="w-46 h-[1px] bg-white mx-auto mt-4 mb-12"></div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {customers.map((item, index) => (
                            <Card
                                key={index}
                                className="bg-white rounded-lg text-center border-none flex flex-col items-center justify-center p-6 shadow-md"
                            >
                                <CardContent className="flex flex-col items-center gap-4">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                    <p className="text-lg sm:text-xl font-medium text-[#446CB3] whitespace-pre-line leading-snug">
                                        {item.title}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>



            <SolutionsAndServices
                heading="On-Demand Healthcare Services We Provide"
                headingClassName='text-3xl mb-4 text-gray-700'
                dividerColorClass=" bg-red-500"
                subheading={null}
                alignLeft
                dividerWidthClass="w-34"
                dividerHeightClass="h-0.25"
            />

            {/* IT Help Desk Outsourcing Section */}
            <section className="bg-blue-700 py-16">
                <div
                    ref={c1Ref}
                    className={`max-w-7xl mx-auto px-4 transition-all duration-500 ease-out transform ${c1Visible ? "animate-slide-up-fast" : "slide-up-hidden"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Left Column */}
                            <div className="flex-1">
                                {/* Heading and Red Line */}
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    IT Help Desk Outsourcing
                                </h2>
                                <div className="w-20 h-1 bg-red-500 mb-6"></div>

                                {/* Description */}
                                <p className="text-white text-lg mb-8">
                                    Scale your team faster by outsourcing your help desk team. Adjust available time according to your business hours.
                                </p>

                                {/* Six White Boxes in 3x2 Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                    {/* Box 1 */}
                                    <div className="bg-white rounded-none p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Teams</h3>
                                                <p className="text-gray-600 text-sm">Our teams are ready to help customers with any issue.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Box 2 */}
                                    <div className="bg-white rounded-none  p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dedicated Manager</h3>
                                                <p className="text-gray-600 text-sm">Get a dedicated team manager for all outsourced projects.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Box 3 */}
                                    <div className="bg-white rounded-none  p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertise</h3>
                                                <p className="text-gray-600 text-sm">We have expertise in delivering customer service.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Box 4 */}
                                    <div className="bg-white rounded-none  p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
                                                <p className="text-gray-600 text-sm">We operate 24/7/365, including holidays.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Box 5 */}
                                    <div className="bg-white rounded-none  p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Approach</h3>
                                                <p className="text-gray-600 text-sm">We find an approach to every client's needs.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Box 6 */}
                                    <div className="bg-white rounded-none  p-6 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Effective Support Tools</h3>
                                                <p className="text-gray-600 text-sm">We implement best and up-to-date tools into our work.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex-1 flex flex-col">
                                {/* Heading and Red Line */}
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Features
                                </h2>
                                <div className="w-20 h-1 bg-red-500 mb-6"></div>

                                {/* Bullet Points */}
                                <ul className="space-y-8 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Handling both long- and short term projects</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Hand-picking an experienced team for your project</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Offering flexible service packages</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Tracking regular KPI statistics</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Providing detailed QA reports regularly</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Ensuring a first-month-free policy (for team setup)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Providing the teams with pre-launch training</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-white">Conducting customer satisfaction surveys</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 bg-white">
                <div
                    ref={c2Ref}
                    className={`max-w-7xl mx-auto px-4 transition-all duration-500 ease-out transform ${c2Visible ? "animate-slide-up-fast" : "slide-up-hidden"
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                            Why Outsource Healthcare IT Support to WeCare RCM
                        </h2>
                        <div className="h-[2px] w-16 bg-red-500 mt-2 mb-8"></div>

                        {/* Slider */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex gap-4 md:gap-6 transition-transform duration-1000 ease-in-out"
                                style={{
                                    transform: `translateX(-${index * (cardWidth + cardGap)}px)`,
                                    width: `${loopedItems.length * (cardWidth + cardGap) - cardGap}px`, // Ensure full width for all items
                                }}
                            >
                                {loopedItems.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 w-48 md:w-56 bg-white shadow-md rounded-lg p-4 md:p-6 flex flex-col items-center justify-center min-h-[100px] md:min-h-[120px]"
                                    >
                                        <img src={item.icon} alt="" className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4" />
                                        <p className="text-gray-600 text-center text-sm md:text-base">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className='mt-8'>

                            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                                {/* Left column: Bullet points */}
                                <div className="flex-1">
                                    <ul className="space-y-4 text-gray-700">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            <span className='font-bold  mr-1'>16 years </span> {" "}
                                            <span>of expertise in IT support.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            Working experience with <span className='font-bold  mr-1 ml-1'>HIPAA</span>
                                            and <span className='font-bold  mr-1 ml-1'>FDA.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            <span className='font-bold  mr-1 ml-1'>Mature</span> quality and security management systems.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            Certified support teams for each <span className='font-bold  mr-1 ml-1'>Client.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            Ready to fulfill <span className='font-bold  mr-1 ml-1'>Test Tasks</span> and share case studies.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            Utilizing latest <span className='font-bold  mr-1 ml-1'>Technology</span> to improve productivity.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-blue-600 rounded-none mt-2 mr-2"></span>
                                            <span className='font-bold  mr-1 ml-1'> Secure</span> Cloud databases, warehouses and storage.
                                        </li>
                                    </ul>
                                </div>
                                {/* Right column: Image */}
                                <div className="flex-1 flex justify-center">
                                    <Image
                                        src="/IT-Support-Serviceslast-2048x1475.png" // Replace with the actual image path
                                        alt="IT Support Illustration"
                                        width={500}
                                        height={300}
                                        className="object-contain"
                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>

            {/* New Healthcare IT Support Section */}
            <section className="py-16 bg-white">

                <div className="max-w-7xl mx-auto px-4">
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                            Hand Over Healthcare IT Support
                        </h2>
                        <div className="h-[2px] w-20 bg-red-500 mx-auto"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column - Service Commitments */}
                        <div className="flex-1 bg-blue-50 p-8 rounded-lg">
                            <h2 className="text-2xl md:text-1xl font-bold text-gray-700 mb-6">
                                Hand Over Healthcare IT Support:
                            </h2>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">
                                        <span className="font-bold">30 minutes</span> to respond to help desk email tickets.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">
                                        First response time for calls <span className="font-bold">within 40 sec.</span> for 80% of calls.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">
                                        <span className="font-bold">2 hours</span> response time for urgent queries.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">
                                        IT component's service times adjusted for your <span className="font-bold">Business Hours</span>: 24/7, 12/7, 12/5, 8/5.
                                    </span>
                                </li>
                            </ul>

                            {/* Call to Action Button */}
                            <div className="text-center mb-8">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                                    Call Us Today at <span className="underline">(415) 530-2893</span>
                                </Button>
                            </div>

                            {/* LiveChat Section */}
                            <div className="text-center">
                                <div className="relative inline-block mb-4">
                                    <Image
                                        src="/Live-Chat.png" // replace with your image path
                                        alt="Live Chat"
                                        width={62}
                                        height={62}
                                        className="object-contain"
                                    />


                                </div>
                                <h3 className="text-lg font-bold text-gray-700 mb-2">LiveChat</h3>
                                <p className="text-gray-600 text-lg">
                                    Chat with our available agent and get answered to your quick queries.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="flex-1">
                            <h2 className="text-2xl text-gray-600 font-semibold mb-6">GET YOUR FREE TRIAL TODAY!</h2>

                            <form
                                className="space-y-4"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget;
                                    setIsSubmitting(true); // show spinner

                                    // 👇 Run built-in validation
                                    if (!form.checkValidity()) {
                                        form.reportValidity(); // shows default browser error messages
                                        setIsSubmitting(false);
                                        return; // stop here
                                    }

                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(formData.entries());

                                    try {
                                        const res = await fetch("/api/send", {
                                            method: "POST",
                                            headers: { "Content-Type": "application/json" },
                                            body: JSON.stringify(data),
                                        });

                                        if (res.ok) {
                                            alert("✅ Your request has been sent successfully!");
                                            form.reset();
                                        } else {
                                            alert("❌ Failed to send. Please try again.");
                                        }
                                    } catch (err) {
                                        console.error(err);
                                        alert("❌ Something went wrong. Try again later.");
                                    } finally {
                                        setIsSubmitting(false); // stop spinner
                                    }
                                }}
                            >
                                {/* Hidden field to identify this form */}
                                <Input
                                    type="hidden"
                                    name="formName"
                                    value="Support Services Form"
                                />


                                {/* Name & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        name="fullName"
                                        type="text"
                                        required
                                        placeholder="Full Name *"
                                        className="h-12 border border-gray-400 mb-4 rounded-none
      focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
      text-gray-500 placeholder:text-gray-400"
                                    />
                                    <Input
                                        name="phoneNumber"
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="h-12 border border-gray-400 mb-4 rounded-none
      focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700
      text-gray-500 placeholder:text-gray-400"
                                    />
                                </div>

                                {/* Email & Practice Name */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input
                                        name="email"
                                        type="email"
                                        required
                                        className="h-12 border border-gray-400 rounded-none
      focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
      text-gray-500 placeholder:text-gray-400"
                                        placeholder="Email Address *"
                                    />
                                    <Input
                                        name="businessName"
                                        type="text"
                                        required
                                        className="h-12 border border-gray-400 rounded-none
      focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
      text-gray-500 placeholder:text-gray-400"
                                        placeholder="Practice / Business Name *"
                                    />
                                </div>

                                {/* Checkbox Options */}
                                <div>

                                    <p className="text-1xl mb-2 mt-10 font-bold text-blue-700">
                                        What would you like to know? *
                                    </p>

                                    <div className="flex flex-wrap gap-4">
                                        {options.map((item, index) => {
                                            const checked = selected.includes(item)
                                            return (
                                                <label key={item} className="flex items-center space-x-2">
                                                    {/* UI checkbox */}
                                                    <Checkbox
                                                        id={item}
                                                        checked={checked}
                                                        onCheckedChange={() => toggleSelection(item)}
                                                        required={selected.length === 0 && index === 0}
                                                    />
                                                    <span className="text-gray-700">{item}</span>
                                                </label>
                                            )
                                        })}
                                    </div>

                                    {/* ✅ Hidden input that carries selection and enforces required */}
                                    <Input
                                        type="text"
                                        name="interest"
                                        value={selected.join(", ")} // comma-separated list
                                        required
                                        readOnly
                                        className="hidden"
                                    />

                                </div>



                                {/* Message */}
                                <div>
                                    <Textarea
                                        name="message"
                                        className="h-35 border border-gray-400 rounded-none
      ring-0 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 
      focus:outline-none transition-all duration-200
      text-gray-500 placeholder:text-gray-400"
                                        placeholder="Type your message here... (Optional)"
                                        maxLength={25}
                                    />
                                    <p className="text-xs text-gray-500 mt-3">0 of 25 max characters.</p>
                                </div>

                                {/* Privacy */}
                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="privacy"
                                        name="privacy"
                                        value="accepted"
                                        required
                                        className="rounded-sm border border-gray-400
      data-[state=checked]:bg-white data-[state=checked]:text-blue-500
      focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <label htmlFor="privacy" className="text-sm text-gray-700">
                                        By sending this form, I confirm that I have read and accept the{" "}
                                        <span className="text-blue-600 underline">
                                            <Link href="/PrivacyPolicy" target="_blank" rel="noopener noreferrer">

                                                Privacy Policy
                                            </Link></span>.
                                    </label>
                                </div>

                                {/* Button */}
                                <Button
                                    disabled={isSubmitting}
                                    className="bg-blue-600 font-semibold text-white 
    hover:text-white hover:bg-red-400 rounded-sm flex items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Submit Now"
                                    )}
                                </Button>
                            </form>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                {/* Heading + Divider */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Frequently Asked Questions - FAQ&apos;s
                    </h2>
                    <div className="w-20 h-1 bg-red-500 mx-auto mt-2"></div>
                </div>

                {/* FAQ Cards */}
                <div className="max-w-7xl mx-auto space-y-1">
                    {faqs.map((faq, index) => {
                        const contentRef = useRef<HTMLDivElement | null>(null);

                        return (
                            <Card
                                key={index}
                                className="border-none  shadow-none border-gray-200 bg-white overflow-hidden"
                            >
                                <CardHeader
                                    className="cursor-pointer h-0.25  flex flex-row items-center gap-1"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {/* Chevron on Left */}
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    )}
                                    <CardTitle className="text-lg font-semibold text-gray-800">
                                        {faq.question}
                                    </CardTitle>
                                </CardHeader>

                                {/* Expandable Content with Smooth Height Animation */}
                                <div
                                    ref={contentRef}
                                    style={{
                                        height:
                                            openIndex === index
                                                ? contentRef.current?.scrollHeight + "px"
                                                : "0px",
                                    }}
                                    className="transition-all duration-500 ease-in-out overflow-hidden"
                                >
                                    <CardContent className="bg-blue-50 text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </CardContent>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </section>



        </div>


    )
}

export default page
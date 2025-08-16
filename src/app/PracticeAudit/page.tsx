"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react"; // Phone icon
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState, useRef } from "react";


// Type for your card data
interface CardType {
    id: number;
    title: string;
    description: string;
    gradient: string;
    icon: string;
    backgroundImage: string;
    bulletPoints: string[];
}

const cardsData: CardType[] = [
    {
        id: 1,
        title: "Technology Assessment",
        description: "We evaluate your software systems and infrastructure.",
        gradient: "from-red-500 to-pink-500",
        icon: "/AUDIT-ICONS-05.svg",
        backgroundImage: "/background-1.jpg",
        bulletPoints: ["Software evaluation", "Integration opportunities", "Automation potential", "Security assessment"],
    },
    {
        id: 2,
        title: "Compliance Review",
        description: "We help ensure your operations meet industry standards.",
        gradient: "from-blue-500 to-indigo-500",
        icon: "/AUDIT-ICONS-06.svg",
        backgroundImage: "/background-2.jpg",
        bulletPoints: ["Policy check", "Regulation updates", "Risk analysis", "Reporting"],
    },
    {
        id: 3,
        title: "Process Optimization",
        description: "Streamline workflows to improve efficiency.",
        gradient: "from-green-500 to-emerald-500",
        icon: "/AUDIT-ICONS-07.svg",
        backgroundImage: "/background-3.jpg",
        bulletPoints: ["Workflow analysis", "Bottleneck removal", "Automation", "Cost savings"],
    },
    {
        id: 4,
        title: "Cybersecurity Audit",
        description: "Protect your business from potential threats.",
        gradient: "from-purple-500 to-pink-500",
        icon: "/AUDIT-ICONS-08.svg",
        backgroundImage: "/background-4.jpg",
        bulletPoints: ["Vulnerability scan", "Threat assessment", "Firewall check", "Data protection"],
    },
    {
        id: 5,
        title: "Cybersecurity Audit",
        description: "Protect your business from potential threats.",
        gradient: "from-purple-500 to-pink-500",
        icon: "/AUDIT-ICONS-08.svg",
        backgroundImage: "/background-4.jpg",
        bulletPoints: ["Vulnerability scan", "Threat assessment", "Firewall check", "Data protection"],
    },
];

function CardItem({ card }: { card: CardType }) {
    return (
        <div className="flex-[0_0_33.333%] px-4">
            <div className={`bg-gradient-to-br ${card.gradient} rounded-2xl overflow-hidden shadow-2xl h-96 relative group cursor-pointer`}>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ backgroundImage: `url('${card.backgroundImage}')` }}
                />
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <Image src={card.icon} alt={card.title} width={32} height={32} className="w-8 h-8 object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-white/90 text-sm leading-relaxed group-hover:hidden">{card.description}</p>
                        <div className="hidden group-hover:block text-left">
                            <div className="space-y-2">
                                {card.bulletPoints.map((point, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-white" />
                                        <span className="text-white/90 text-sm">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}







function page() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [sectionref, sectionisVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [section2ref, section2isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [lastsectionref, lastsectionisVisible] = useIntersectionObserver({ threshold: 0.2 });

    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(3); // start at first "real" card
    const slides = [...cardsData.slice(-3), ...cardsData, ...cardsData.slice(0, 3)];
  
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 3000);
      return () => clearInterval(slideInterval);
    }, []);
  
    useEffect(() => {
      const slider = sliderRef.current;
      if (!slider) return;
  
      const slideWidth = 100 / 3; // 3 cards visible
      slider.style.transition = "transform 0.8s ease-in-out";
      slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  
      // Jump instantly if we’re at clone
      if (currentIndex === slides.length - 3) {
        setTimeout(() => {
          slider.style.transition = "none"; // disable animation
          setCurrentIndex(3); // reset to first real card
        }, 900);
      } else if (currentIndex === 0) {
        setTimeout(() => {
          slider.style.transition = "none";
          setCurrentIndex(slides.length - 6); // jump to last real card
        }, 900);
      }
    }, [currentIndex, slides.length]);


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
        ${sectionisVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
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
                ${section2isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
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

            {/* Card Slider Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Practice Audit Solutions</h2>
                        <div className="h-[2px] w-16 bg-red-500 mx-auto"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Discover our comprehensive practice audit services designed to optimize your operations
                        </p>
                    </div>

                    {/* Slider */}
                    <div className="relative overflow-hidden">
                        <div ref={sliderRef} className="flex">
                            {slides.map((card, i) => (
                                <CardItem key={`${card.id}-${i}`} card={card} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={lastsectionref}
                className={`py-12 px-4 md:px-8 bg-gray-100 transition-all duration-1000 ease-out transform 
                ${lastsectionisVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Left Column - Text Content (moved here) */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
                                Outsourcing your {" "}
                                <span className="text-blue-800  mr-1 ml-1">Practice Audit</span>{" "}
                                to WeCare Centric Saves you
                                <span className="text-blue-800  mr-1 ml-1">
                                    up-to 47%</span>{" "}
                                on your Operational cost
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Outsourcing your practice audit to RCM Centric can result
                                in significant cost savings, reducing operational expenses by up to 47%.
                            </p>

                            <p className=" text-gray-700 mb-4 space-y-2">
                                Additionally, our audits uncover inefficiencies that might otherwise go unnoticed,
                                providing tailored solutions that drive both short- and long-term financial improvements.
                                This not only enhances your practice’s performance but also significantly reduces overhead costs.
                            </p>

                            <Button
                                className="bg-red-500 rounded-b-md text-white hover:bg-blue-600 transition-colors duration-300"
                            >
                                <Phone size={18} className="mr-2" /> 123 xyz
                            </Button>
                        </div>

                        {/* Right Column - Image (moved here) */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src="/audit-page-last-illustrations-01-1536x1536.webp"
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
'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

const cardData = [
    {
        image: '/Enhanched-Patient-Experience-03.svg',
        title: 'Enhanched Patient Experience',
        description: "We're transforming healthcare to be more empathetic and efficient for every patient.",
        backContent: "We're transforming healthcare to be more empathetic and efficient for every patient."
    },
    {
        image: '/High-First-Contact-Resolution-Rates-02.svg',
        title: 'High First Contact Resolution Rates',
        description: 'Get answers and solutions right away, thanks to our efficient support.',
        backContent: 'Get answers and solutions right away, thanks to our efficient support.'
    },
    {
        image: '/Operational-Efficiency-04.svg',
        title: 'Operational Efficiency',
        description: 'We continuously refine our operations for maximum effectiveness and minimal waste.',
        backContent: 'We continuously refine our operations for maximum effectiveness and minimal waste.'
    },
    {
        image: '/Increased-Patient-Retention-01.svg',
        title: 'Increased Patient Retention',
        description: 'We deliver care that leads to tangible improvements in your health and well-being.',
        backContent: 'We deliver care that leads to tangible improvements in your health and well-being.'
    },
    {
        image: '/Improved-Health-Outcomes.svg',
        title: 'Improved Health Outcomes',
        description: 'We deliver care that leads to tangible improvements in your health and well-being.',
        backContent: 'We deliver care that leads to tangible improvements in your health and well-being.'
    },
];





export default function page() {


    const [index, setIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const [isPaused, setIsPaused] = useState(false);
    const totalCards = cardData.length;
    const [visibleCards, setVisibleCards] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Create infinite loop by duplicating cards
    // Add buffer cards for infinite loop
    const extendedCardData = [
        ...cardData.slice(-visibleCards), // Clone last few cards at start
        ...cardData,
        ...cardData.slice(0, visibleCards), // Clone first few at end
    ];
    const extendedTotalCards = extendedCardData.length;

    // Adjust number of visible cards responsively
    useEffect(() => {
        const updateVisibleCards = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCards(1);
            } else if (width < 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);
        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    // When visibleCards changes, reset the index to the true start to avoid jumps
    useEffect(() => {
        setIsTransitioning(false);
        setIndex(visibleCards);
        const id = setTimeout(() => setIsTransitioning(true), 0);
        return () => clearTimeout(id);
    }, [visibleCards]);

    const handleCardClick = (cardIndex: number) => {
        // Pause the automatic sliding
        setIsPaused(true);

        // Get the actual card index (accounting for duplicates)
        const actualCardIndex = cardIndex % totalCards;

        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(actualCardIndex)) {
                newSet.delete(actualCardIndex);
            } else {
                newSet.add(actualCardIndex);
            }
            return newSet;
        });
    };

    const handleCardMouseLeave = (cardIndex: number) => {
        // Resume the automatic sliding
        setIsPaused(false);

        // Get the actual card index (accounting for duplicates)
        const actualCardIndex = cardIndex % totalCards;

        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(actualCardIndex)) {
                newSet.delete(actualCardIndex);
            }
            return newSet;
        });
    };

    const handlePrevious = () => {
        setIsPaused(true);
        setIndex(prevIndex => {
            const newIndex = prevIndex - 1;
            if (newIndex < 0) {
                return totalCards - visibleCards; // Jump to end of first set
            }
            return newIndex;
        });
        // Resume after 2 seconds
        setTimeout(() => setIsPaused(false), 2000);
    };

    const handleNext = () => {
        setIsPaused(true);
        setIndex(prevIndex => {
            const newIndex = prevIndex + 1;
            if (newIndex >= extendedTotalCards - visibleCards + 1) {
                return totalCards; // Jump to middle set
            }
            return newIndex;
        });
        // Resume after 2 seconds
        setTimeout(() => setIsPaused(false), 2000);
    };

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(() => {
                setIsTransitioning(true);
                setIndex((prevIndex) => prevIndex + 1);
            }, 3000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    // Reset when looping past edges
    useEffect(() => {
        if (index >= extendedTotalCards - visibleCards) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(visibleCards); // Reset back to true start (without transition)
            }, 700); // match duration
        } else if (index === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(totalCards);
            }, 700);
        } else {
            setIsTransitioning(true); // Re-enable transitions on normal slides
        }
    }, [index]);





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

            <section className="bg-[#4977BC] py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Top Text Block */}
                    <div className="text-left mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Why Our Patient Help Desk Is Different
                        </h2>
                        <p className="text-white text-lg mb-6">
                            Unlike automated hotlines or third-party call centers, our support team consists of trained healthcare professionals who understand medical processes, patient needs, and provider workflows.
                        </p>
                        <div className="h-0.5 w-20 bg-white" />
                    </div>

                    {/* Flex Section Below */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Left Column - Image */}
                        <div className="md:w-1/2 w-full flex justify-center">
                            <Image
                                src="/graph-1.png"
                                alt="Doctor illustration"
                                width={700}
                                height={500}
                                className="rounded-lg object-cover"
                            />
                        </div>

                        {/* Right Column - White Box with Card Slider */}
                        <div className="md:w-1/2 w-full bg-white rounded-2xl p-6 overflow-hidden relative min-h-[360px] md:min-h-[380px]">
                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                            </button>

                            <div
                                className={`flex ${isTransitioning ? 'transition-all duration-700 ease-in-out' : ''}`}
                                style={{
                                    transform: `translateX(-${(index * 100) / extendedTotalCards}%)`,
                                    width: `${(extendedTotalCards * 100) / visibleCards}%`,
                                }}
                            >
                                {extendedCardData.map((card, i) => (
                                    <div
                                        key={i}
                                        className="px-2 flex-shrink-0"
                                        style={{ width: `${100 / extendedTotalCards}%` }}
                                    >
                                        <div
                                            className="relative h-[320px] cursor-grab perspective-1000"
                                            onClick={() => handleCardClick(i)}
                                            onMouseLeave={() => handleCardMouseLeave(i)}
                                        >
                                            <div
                                                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.has(i % totalCards) ? 'rotate-y-180' : ''
                                                    }`}
                                            >
                                                {/* Front of card */}
                                                <Card className="h-full border border-none bg-blue-50 flex flex-col items-center text-center backface-hidden">
                                                    <CardContent className="pt-4 ">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.title}
                                                            width={50}
                                                            height={120}
                                                            className="mx-auto mb-4 rounded-md"
                                                        />
                                                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                                        <p className="text-gray-600 text-1xl">{card.description}</p>
                                                    </CardContent>
                                                </Card>

                                                {/* Back of card */}
                                                <Card className="h-full border border-none bg-blue-50 flex flex-col items-center text-center backface-hidden rotate-y-180 absolute inset-0">
                                                    <CardContent className="pt-4 flex flex-col justify-center h-full">

                                                        <p className="text-gray-600 text-1xl leading-relaxed">
                                                            {card.backContent}
                                                        </p>

                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 mt-8">
                <div className="flex flex-col md:flex-row gap-10 px-6 max-w-7xl mx-auto">

                    {/* LEFT SIDE */}
                    <div className="flex-1 ">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Icon */}
                            <div className=" flex items-center justify-center">
                                <Image
                                    src="/Our-Services-06.svg"
                                    alt="Doctor illustration"
                                    width={60}
                                    height={60}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </div>

                        <h1 className="text-3xl font-semibold  justify-between p-9px mb-10">
                            <span className="text-gray-800">  Outsourcing your </span>{" "}
                            <span className="text-blue-600 font-semibold">Patient Help Desk</span>{" "}
                            <span className="text-gray-800"> to WeCare Centric save you </span>{" "}
                            <span className="text-blue-600 font-semibold">Up to 47%</span>{" "}
                            <span className="text-gray-800"> on your operational costs.</span>
                        </h1>

                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> Centralized scheduling
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> Enhanced practice revenue
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> Reduced no-show rates
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> 100% Patient satisfaction
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> HIPAA Compliance
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-blue-500">➜</span> 24/7 Available
                            </li>
                        </ul>

                        <Button className="bg-red-400 text-white rounded-sm hover:bg-blue-600 mt-6">
                            12345
                        </Button>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="flex-1">
                        <h2 className="text-2xl text-gray-600 font-semibold mb-6">GET YOUR FREE TRIAL TODAY!</h2>

                        <form className="space-y-4">
                            {/* Name & Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  ">
                                <Input
                                    placeholder="Full Name *"
                                    className=" h-12 border  border-gray-400   mb-4 rounded-none
                                 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                                  text-gray-500 placeholder:text-gray-400"
                                />
                                <Input
                                    className=" h-12 border border-gray-400  mb-4 rounded-none
                                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700
                                 text-gray-500 placeholder:text-gray-400"
                                    placeholder="Phone Number" />
                            </div>

                            {/* Email & Practice Name */}
                            <div className="grid grid-cols-1  sm:grid-cols-2 gap-4">
                                <Input
                                    className=" h-12  border border-gray-400 rounded-none
                                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                                 text-gray-500 placeholder:text-gray-400"
                                    placeholder="Email Address *" />
                                <Input
                                    className=" h-12 border border-gray-400 rounded-none
                                focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                                 text-gray-500 placeholder:text-gray-400"
                                    placeholder="Practice / Business Name *" />
                            </div>

                            {/* Checkbox Options */}
                            <div>
                                <p className=" text-1xl mb-2 mt-10 font-bold text-blue-700">What would you like to know? *</p>
                                <div className="flex flex-wrap gap-4">
                                    {["Billing Services", "Credentialing", "Claims Coding", "Pricing", "Other"].map((label) => (
                                        <label key={label} className="flex items-center gap-2 ">
                                             <Checkbox id={label} className="rounded-sm border border-gray-400
                                              data-[state=checked]:bg-white data-[state=checked]:text-blue-500
                                              focus:ring-1 focus:ring-blue-500 focus:border-blue-500" />
                                            <span>{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div >
                                <Textarea
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
                            <div className="flex items-start gap-2 ">
                                <Checkbox id="privacy" className=" rounded-sm border border-gray-400
                                              data-[state=checked]:bg-white data-[state=checked]:text-blue-500
                                              focus:ring-1 focus:ring-blue-500 focus:border-blue-500 " />
                                <label htmlFor="privacy" className="text-sm text-gray-700">
                                    By sending this form, I confirm that I have read and accept the{" "}
                                    <span className="text-blue-600 underline">Privacy Policy</span>.
                                </label>
                            </div>

                            <Button className="bg-blue-600 font-semibold text-white 
                            hover:text-white hover:bg-red-400 rounded-sm">Submit Now</Button>
                        </form>
                    </div>
                </div>
            </section>




        </>


    );
}
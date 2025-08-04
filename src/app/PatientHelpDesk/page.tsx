'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';


const cardData = [
    {
        image: '/card1.jpg',
        title: 'Personalized Support',
        description: 'We tailor assistance based on your unique healthcare journey.',
        backContent: 'Our personalized approach ensures that every patient receives customized care plans, tailored communication preferences, and individualized support that matches their specific healthcare needs and circumstances.'
    },
    {
        image: '/card2.jpg',
        title: 'Trained Professionals',
        description: 'Get help from real healthcare experts, not bots.',
        backContent: 'Our team consists of certified healthcare professionals with extensive experience in patient care, medical billing, and healthcare administration. They understand your concerns and provide expert guidance.'
    },
    {
        image: '/card3.jpg',
        title: '24/7 Availability',
        description: 'Our support is available any time you need it.',
        backContent: 'Healthcare doesn\'t follow business hours, and neither do we. Our round-the-clock support ensures you can get help whenever you need it, whether it\'s 2 AM or 2 PM.'
    },
    {
        image: '/card4.jpg',
        title: 'Seamless Integration',
        description: 'Our help desk works with your existing systems.',
        backContent: 'We integrate seamlessly with your current healthcare management systems, electronic health records, and patient portals, ensuring a smooth and efficient workflow without disruption.'
    },
    {
        image: '/card5.jpg',
        title: 'Fast Issue Resolution',
        description: 'Get answers quickly without unnecessary delays.',
        backContent: 'Our streamlined processes and experienced team ensure that your issues are resolved quickly and efficiently, minimizing wait times and getting you back to focusing on your health.'
    },
];





export default function page() {


    const [index, setIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const [isPaused, setIsPaused] = useState(false);
    const totalCards = cardData.length;
    const visibleCards = 3;
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
                                width={500}
                                height={500}
                                className="rounded-lg object-cover"
                            />
                        </div>

                        {/* Right Column - White Box with Card Slider */}
                        <div className="md:w-1/2 w-full bg-white rounded-md p-6 overflow-hidden relative min-h-[400px]">
                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrevious}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
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
                                        className="w-[10%] px-2 flex-shrink-0"
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
                                                <Card className="h-full  flex flex-col items-center text-center backface-hidden">
                                                    <CardContent className="pt-4">
                                                        <Image
                                                            src={card.image}
                                                            alt={card.title}
                                                            width={50}
                                                            height={120}
                                                            className="mx-auto mb-4 rounded-md"
                                                        />
                                                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                                        <p className="text-gray-600 text-sm">{card.description}</p>
                                                    </CardContent>
                                                </Card>

                                                {/* Back of card */}
                                                <Card className="h-full flex flex-col items-center text-center backface-hidden rotate-y-180 absolute inset-0">
                                                    <CardContent className="pt-4 flex flex-col justify-center h-full">
                                                        <h3 className="text-lg font-semibold mb-4 text-blue-600">
                                                            {card.title}
                                                        </h3>
                                                        <p className="text-gray-600 text-sm leading-relaxed">
                                                            {card.backContent}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-4">Click to flip back</p>
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




        </>


    );
}
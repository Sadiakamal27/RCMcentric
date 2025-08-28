"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import Link from "next/link";


function page() {

    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [s2ref, s2isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [cardsref, cardsisVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [cards2ref, cards2isVisible] = useIntersectionObserver({ threshold: 0.2 });
    const [lastsectionref, lastsectionisVisible] = useIntersectionObserver({ threshold: 0.2 });


    const [animatedCards, setAnimatedCards] = useState<Set<string>>(new Set());
    const [isScrollHijacked, setIsScrollHijacked] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let isAnimating = false;

        const handleScroll = () => {
            if (isAnimating) return;

            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if we're entering the section
            if (rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2 && !isScrollHijacked) {
                setIsScrollHijacked(true);
                isAnimating = true;

                // Start the card unstacking animation sequence
                animateCardsSequentially();
            }
        };

        const animateCardsSequentially = () => {
            // Card 3 (top layer) first
            setTimeout(() => {
                setAnimatedCards(prev => new Set(prev).add('card-3'));
            }, 500);

            // Card 2 (middle layer) second
            setTimeout(() => {
                setAnimatedCards(prev => new Set(prev).add('card-2'));
            }, 1500);

            // Card 1 (bottom layer) last
            setTimeout(() => {
                setAnimatedCards(prev => new Set(prev).add('card-1'));

                // Resume normal scrolling after all cards are unstacked
                setTimeout(() => {
                    setIsScrollHijacked(false);
                    isAnimating = false;
                }, 1000);
            }, 2500);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrollHijacked]);

    // Prevent normal scrolling when cards are animating
    useEffect(() => {
        if (isScrollHijacked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isScrollHijacked]);

    const isCardAnimated = (cardId: string) => animatedCards.has(cardId);

    return (
        <div className="bg-gray-50 ">
            <section className="py-22">
                <div className=" max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text and Buttons */}
                    <div className="flex-1 text-center md:text-left">
                        <h3
                            ref={ref}
                            className={`text-sm text-blue-800 transition-all duration-700 ease-out transform 
          ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
                        >Comprehensive Solutions for Medical Billing</h3>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            Explore WeCare <span className='text-red-500 hover:text-blue-700  mr-1 ml-1'> Centric's Innovative</span> Hospital Billing Solutions
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


            <section
                ref={s2ref}
                className={`py-12 transition-all duration-1000 ease-out transform 
        ${s2isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
            >
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
                            Benefits of Outsourcing Your Billing Services to WeCare Centric
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
                    <Card
                        ref={cardsref}
                        className={`
        border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500
        transform transition-all duration-700 ease-out
        ${cardsisVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
      `}
                    >     <CardContent className="p-6 ">
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
                    <Card
                        ref={cardsref}
                        className={`
        border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500
        transform transition-all duration-700 ease-out
        ${cardsisVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
      `}
                    >
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
                    <Card
                        ref={cardsref}
                        className={`
        border-b-2 border-t-0 border-l-0 border-r-0 bg-white border-blue-500
        transform transition-all duration-700 ease-out
        ${cardsisVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
      `}
                    >
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

            <section className="py-16 bg-white mt-10">
                {/* Top Flex Section */}
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start gap-6 mb-12">
                    {/* Left Column - Heading */}
                    <h2 className="text-3xl font-bold text-gray-700 md:w-1/2">
                        How to Improve Your Hospital Billing Process
                    </h2>

                    {/* Right Column - Vertical Line + Text */}
                    <div className="md:w-1/2 flex items-start gap-4">
                        <div className="w-2 h-22 bg-red-500"></div>
                        <p className="text-gray-600">
                            Invest in Technology Implement advanced billing software to streamline processes and reduce manual errors.
                            Train Your Staff Ensure that your billing team stays updated on the latest coding and compliance regulations.
                        </p>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-3 mb-10">
                    {/* Card 1 */}
                    <Card
                        ref={cards2ref}
                        className={`
                         shadow-sm rounded-xl border-none
                         transform transition-all duration-700 ease-out
                         ${cards2isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
                          `}
                    >
                        <CardHeader className="flex flex-col items-start">
                            <Image
                                src="/monitordenials-01-ezgif.com-png-to-webp-converter-2048x2048.webp" // replace with your image path
                                alt="Monitor Denials"
                                width={64}
                                height={64}
                            />
                            <CardTitle className="mt-4 text-lg font-bold text-gray-600">Monitor Denials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                Monitor denials closely to identify patterns and root causes of rejected claims.
                                By analyzing denial trends, we can address issues quickly and reduce the likelihood
                                of recurring errors. This proactive approach improves revenue cycle efficiency and boosts reimbursement rates.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card
                        ref={cards2ref}
                        className={`
                         shadow-sm rounded-xl border-none
                         transform transition-all duration-700 ease-out
                         ${cards2isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
                          `}
                    >
                        <CardHeader className="flex flex-col items-start">
                            <Image
                                src="/conductauditS-02-ezgif.com-png-to-webp-converter-2048x2048.webp"
                                alt="Conduct Audits"
                                width={64}
                                height={64}
                            />
                            <CardTitle className="mt-4 text-lg font-bold text-gray-600">Conduct Audits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                Conduct regular audits to ensure billing accuracy and compliance with industry regulations.
                                By reviewing claims and processes, we can identify potential errors and areas for improvement,
                                enhancing operational efficiency and minimizing financial risks.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card
                        ref={cards2ref}
                        className={`
                         shadow-sm rounded-xl border-none
                         transform transition-all duration-700 ease-out
                         ${cards2isVisible ? "animate-slide-up-fast" : "slide-up-hidden"}
                          `}
                    >
                        <CardHeader className="flex flex-col items-start">
                            <Image
                                src="/outsourcecomplextasks-03-ezgif.com-png-to-webp-converter-2048x2048.webp"
                                alt="Outsource Complex Tasks"
                                width={64}
                                height={64}
                            />
                            <CardTitle className="mt-4 text-lg font-bold text-gray-600">Outsource Complex Tasks</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm">
                                Outsourcing complex tasks lets your team focus on patient care.
                                Experts handle intricate billing processes, ensuring accuracy and efficiency,
                                reducing administrative burden, and enhancing overall operational performance.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>


            {/* New Sticky Scroll Overlapping Cards Section */}
            <section className="stack-section py-12">
                {/* Section Header */}
                <header>
                    <div>
                        <h1 className=" text-5xl mb-4 text-center text-gray-700 font-bold">
                            Results That Move You Forward
                        </h1>



                        <p className="text-lg text-center md:text-center">
                            Elevate efficiency and outcomes with intelligent,
                            fully connected health tech systems.
                        </p>

                    </div>
                    <div className="h-[3px] w-46 bg-gray-700 mb-2 mx-auto md:mx-0"></div>
                </header>

                {/* Cards */}
                <main>
                    <ul id="cards">

                        {/* Card 1 */}
                        <li className="card" style={{ ["--index" as any]: 1 }}>
                            <div className="card__content flex flex-col md:!flex-row items-center md:items-start gap-6 border-t-4 border-blue-500">

                                {/* Left Column */}
                                <div className="flex flex-col gap-3 ml-10 md:w-1/2">
                                    {/* Small Icon */}
                                    <img
                                        src="/expert-billing-compliance-icon-01.png"
                                        alt="icon"
                                        className="w-10 h-10"
                                    />

                                    {/* Heading */}
                                    <h2 className=" font-medium text-2xl md:text-4xl">
                                        Expert Billing Compliance Support                                    </h2>

                                    {/* Paragraph */}
                                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                        Hospital billing requires strict adherence to changing federal and state regulations. Our team stays ahead of evolving compliance standards, ensuring accurate claims and reduced audit risks. From documentation accuracy to coding precision,
                                        we help hospitals avoid penalties and maintain operational integrity through consistent
                                        regulatory alignment.  </p>


                                </div>

                                {/* Right Column */}
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src="Expert-Billing-Compliance-01-01.png"
                                        alt="big-preview"
                                        className="rounded-lg ml-30 max-h-[300px] w-240 object-contain"
                                    />
                                </div>

                            </div>
                        </li>

                        {/* Card 2 */}
                        <li className="card" style={{ ["--index" as any]: 2 }}>
                            <div className="card__content flex flex-col md:!flex-row items-center md:items-start gap-6 border-t-4 border-blue-500">

                                {/* Left Column */}
                                <div className="flex flex-col gap-3  ml-10 md:w-1/2">
                                    {/* Small Icon */}
                                    <img
                                        src="/fewer-denials-faster-payment-icon-01.png"
                                        alt="icon"
                                        className="w-10 h-10"
                                    />

                                    {/* Heading */}
                                    <h2 className=" font-medium text-2xl md:text-4xl">
                                        Fewer Denials, Faster Payments
                                    </h2>

                                    {/* Paragraph */}
                                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                        Denied claims drain hospital revenue and delay reimbursements.
                                        Our proactive claims management system identifies potential errors before submission,
                                        significantly reducing rework. By addressing root causes and continuously optimizing claim data,
                                        we enable hospitals to boost first-pass resolution rates and stabilize their revenue flow.    </p>


                                </div>

                                {/* Right Column */}
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src="Fewer-Denials-01.png"
                                        alt="big-preview"
                                        className="rounded-lg ml-30 max-h-[300px] w-240 object-contain"
                                    />
                                </div>

                            </div>
                        </li>

                        {/* Card 3 - Only this one has a button */}
                        <li className="card" style={{ ["--index" as any]: 3 }}>
                            <div className="card__content flex flex-col md:!flex-row items-center md:items-start gap-6 border-t-4 border-blue-500">

                                {/* Left Column */}
                                <div className="flex flex-col gap-3  ml-10 md:w-1/2">
                                    {/* Small Icon */}
                                    <img
                                        src="/icon-smarter-revenue-cycle-01.svg"
                                        alt="icon"
                                        className="w-10 h-10"
                                    />

                                    {/* Heading */}
                                    <h2 className=" font-medium text-2xl md:text-4xl">
                                        Smarter Revenue Cycle Integration
                                    </h2>

                                    {/* Paragraph */}
                                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                        Disjointed systems often lead to billing delays and revenue leakage.
                                        Our billing solution integrates clinical, administrative, and financial data into one
                                        platform—giving decision-makers real-time visibility across the revenue cycle.
                                        This seamless integration improves coordination, billing accuracy, and timely reimbursements at every step.	   </p>

                                    {/* Button (only on last card) */}
                                    <Link href="/ContactUs" >

                                    <Button
                                        className="bg-blue-600 hover:bg-red-500 text-white px-5 py-2 rounded-md w-fit mt-2"
                                    >
                                        Get in Touch
                                    </Button>
                                    </Link>
                                </div>

                                {/* Right Column */}
                                <div className="md:w-1/2 flex justify-center">
                                    <img
                                        src="Smarter-revenue-cycle-01.png"
                                        alt="big-preview"
                                        className="rounded-lg ml-30 max-h-[300px] w-240 object-contain"
                                    />
                                </div>

                            </div>
                        </li>

                    </ul>
                </main>
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

            <section ref={lastsectionref}
                className={`py-12 transition-all duration-1000 ease-out transform 
        ${lastsectionisVisible ? "animate-slide-up-fast" : "slide-up-hidden"}`}
            >
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                    {/* Left column: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-1 h-22 bg-red-500"></div>
                            <h2 className="text-5xl md:text-4xl font-bold text-gray-800">
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
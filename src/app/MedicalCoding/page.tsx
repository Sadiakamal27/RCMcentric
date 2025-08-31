"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import SolutionSection from "@/components/SolutionsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ExpertiseSection from "@/components/ExpertiseSection";
import { Card, CardContent } from '@/components/ui/card';



const cardData = [
  {
    img: "/icd.svg",
    title: "Card Title 1",
    desc: "This is a description for card 1. You can replace this with your actual content."
  },
  {
    img: "/CPT-01.svg",
    title: "Card Title 2",
    desc: "This is a description for card 2. You can replace this with your actual content."
  },
  {
    img: "/HCPCS-02.svg",
    title: "Card Title 3",
    desc: "This is a description for card 3. You can replace this with your actual content."
  },
  {
    img: "/EM-04.svg",
    title: "Card Title 4",
    desc: "This is a description for card 4. You can replace this with your actual content."
  }
];

const benefits = [
  {
    number: '1',
    title: 'Better Cash Flows',
    description:
      'Cash flows act as the lifeblood of any organization, and healthcare providers are no different. Our professional revenue cycle management services offer experienced professionals who can expertly handle different types of medical claims on the first submission.',
  },
  {
    number: '2',
    title: 'Quick Submission',
    description:
      'Providers get to experience faster claim submissions on their behalf. Not only that, but we provide technologically advanced solutions from the get-go. In brief, we ensure easy filing of all the details, maintaining a certain speed for reimbursements. Practice beyond financial restrictions.',
  },
  {
    number: '3',
    title: 'Expert Teams',
    description:
      'Our team of expert medical coding consultants is the answer to all the pressing concerns around accurate medical billing and audit. In short, it is precise and to the point. You can expect timely submissions, alongside the proactive handling of insurance companies and patients.',
  },
  {
    number: '4',
    title: 'Denial Management',
    description:
      'The team here at RCM Centric timely reports if they find any problems related to submissions, including errors and omissions. It is our transparent approach that keeps our providers updated about the status of claims and reasons for delays.',
  },
  {
    number: '5',
    title: 'Advanced Reporting',
    description:
      'Detailed analysis reports are submitted to physicians and specialists as per their custom requirements to help them make smart business decisions. We also break up each stage of the process as per the needs of clinicians belonging to different specialties.',
  },
  {
    number: '6',
    title: 'Reduced Costs',
    description:
      'Once you decide to outsource medical billing to us, you are about to cut down on the costs drastically. It is the right mix of skills, experience, and resilience that allows us to accelerate your revenue cycle. Let us put a lid on expenses together and scale beyond boundaries.',
  },
];

export default function MedicalCodingPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");



  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']);



  return (
    <>
      <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center bg-gray-100 overflow-hidden">
        {/* Hero Background Image */}
        <Image
          src="/hero33.jpg" // Replace with your actual image path
          alt="Medical Coding Hero"
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Flex container for content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row 
        items-start md:items-center">
          {/* Left column: Content */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <p className="text-red-400 text-lg font-medium mb-2">One-Stop Shop Solution</p>
            <div className="flex items-center mb-4">
              <div className="w-1 h-12 bg-red-400 mr-3"></div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Medical Coding Services</h1>
            </div>
            <p className="text-gray-100 text-base sm:text-lg mb-8">
              RCM Centric provides customized medical coding service solutions for
              all medical specialists and practices, ensuring accuracy and compliance.
            </p>
            <div className="w-full max-w-md lg:mx-0">
              <h3 className="text-base sm:text-xl text-gray-200 mb-2">Find Right Codes By Your Speciality</h3>
              <SolutionSection buttonText="Get Code →"
              buttonClassName=" text-white bg-blue-500 hover:bg-red-500  hover:text-white "
              selectClassName=" text-gray-600 "
              />
            </div>
          </div>
          {/* Right column: Empty */}
          <div className="flex-1 hidden md:block"></div>
        </div>
      </section>

      {/* Four Cards Section */}
      <section className="w-full flex justify-center mb-10 mt-10">
        <div className="flex flex-col sm:flex-row w-full max-w-5xl mx-auto">
          {cardData.map((card, i) => (
            <div key={i} className="flex-1">
              <div className="bg-white shadow border  border-gray-200  flex flex-col items-center justify-center p-6 text-center h-full">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="mb-4 object-contain"
                />
                <h4 className="font-semibold mb-2">{card.title}</h4>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance/ROI Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Centered Heading and Divider */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            ROI From Maximum Reimbursement
          </h2>
          <div className="w-24 h-0.5 bg-red-300 mx-auto"></div>
        </div>
        {/* Flex Row: Image and Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/coding-sec.svg" // Replace with your actual image path
              alt="Performance Diagram"
              width={420}
              height={420}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg object-contain"
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Find the right "CODE" for your patients' bills
            </h3>
            <p className="text-gray-600 mb-6">
              We value the traditional relationship with our clients and welcome all customers from those who may need one-off or ongoing medical coding services for all specialties. We will aim to manage all your practice needs, including your complete RCM solution, at one roof.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 font-bold text-lg mr-2">›</span>
                Expand your practice
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 font-bold text-lg mr-2">›</span>
                Buy new medical equipment
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 font-bold text-lg mr-2">›</span>
                Increase your take-home pay
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 font-bold text-lg mr-2">›</span>
                Get quality medical coding from a reliable company
              </li>
              <li className="flex items-start text-gray-700">
                <span className="text-red-500 font-bold text-lg mr-2">›</span>
                Work with certified team of experts
              </li>
            </ul>

            <Link href="/TalktoSales">
              <Button className="border-2 bg-blue-600 text-white rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto">
                Talk To Sales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      <section ref={sectionRef} className="relative w-full bg-blue-900 min-h-screen md:h-[400vh] py-20 md:py-26">
        
        
        <div className="sticky top-30 mb-20 flex flex-col md:flex-row items-start min-h-screen md:h-screen">
          {/* Left Column (Sticky) */}
          <div className="flex-1 flex flex-col w-full md:w-1/2 justify-center md:justify-start">
            {/* Image on top */}
            <div className="flex justify-center mb-6 px-4 md:px-0">
              <Image
                src="/Checkup-Apppointmens-1-1.png"
                alt="Benefits of Outsourcing"
                width={500}
                height={400}
                className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg"
              />
            </div>
            {/* Text content below */}
            <div className="text-white px-4 md:px-8 lg:px-30 mt-4 md:mt-10 mb-8 md:mb-0">
              <div className="mb-2 text-red-400 font-medium text-sm md:text-base">BENEFITS OF OUR SERVICES</div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-4">Benefits of Outsourcing</h2>
              <p className="mb-6 text-sm md:text-base leading-relaxed">
                Here is how medical billing solutions by RCM Centric will assist you as a provider.
                You will get most of the benefits for free with the services of your choice. We always deliver the best results
                to boost your monthly collection and streamline the revenue process.
              </p>
              <p className="font-bold mb-6 text-sm md:text-base">
                It's just like outsourcing the results. RCM Centric will be responsible for the delivery and compliance.
              </p>
            </div>
          </div>

          {/* Right Column (Scrolling Benefits) */}
          <div className="w-full md:w-1/2 h-auto md:h-screen px-4 md:px-8 lg:px-20 py-8 md:py-16 overflow-y-auto md:overflow-hidden relative">
            <motion.div style={{ y: translateY }} className="space-y-8 md:space-y-18">
              {benefits.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start gap-4 md:gap-8 text-white">
                  <div className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-blue-950 mb-2 sm:mb-0">{item.number}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-sm md:text-base">{item.title}</h3>
                    <p className="text-xs md:text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-10">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <Image
              src="/Medicalcodinglast2.webp"
              alt="Dream Team"
              width={400}
              height={300}
              className="object-contain w-full max-w-xs sm:max-w-md md:max-w-lg"
            />
          </div>
          {/* Right: Text */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
              Make Appointment
            </h2>
            <div className="w-16 h-1 bg-red-400 mb-4 mx-auto md:mx-0"></div>
            <p className="text-gray-700 mb-6 text-center md:text-left">
              Getting an accurate medical coding can be one of the most impactful experiences that you can have
              — especially if you’ve been in search of that answer for a while. We can help you get there.            </p>
            <Link href="/TalktoSales">
              <Button className="border-2 bg-blue-600 text-white rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto">
                Schedule Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Expertise Section */}
      <ExpertiseSection />


    

    </>
  );
}

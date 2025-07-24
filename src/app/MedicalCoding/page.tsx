"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import SolutionSection from "@/components/SolutionsSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ExpertiseSection from "@/components/ExpertiseSection";

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

export default function MedicalCodingPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");

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
              <SolutionSection />
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

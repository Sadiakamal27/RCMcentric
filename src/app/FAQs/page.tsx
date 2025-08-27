"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

const topCategories = [
  {
    title: "Medical Billing FAQ's",
    desc: "Get answers related to our healthcare medical billing services and process in details.",
    image: "/medical-billing-01.png",
    href: "/FAQs/MedicalBilling",
  },
  {
    title: "Medical Coding FAQ's",
    desc: "Get answers related to our healthcare medical coding services and process in details.",
    image: "/Medical-coding-02.png",
    href: "/FAQs/MedicalCoding",
  },
  {
    title: "Credentialing FAQ's",
    desc: "Get answers related to our provider credentialing and enrollment services and process.",
    image: "/Credentialing-03.png",
    href: "/FAQs/Credentialing",
  },
  {
    title: "Patient Desk FAQ's",
    desc: "Get answers related to our PHD (Patient Help Desk) solution for each medical practice.",
    image: "/Patient-help-Desk-04.png",
    href: "/FAQs/PatientHelpDesk",
  },
];

const infoCards = [
  {
    title: "Blog & Articles",
    desc: "Read our latest blogs and articles written by healthcare professionals.",
    image: "/Blogs-and-articles.png",
    href: "/Blog",
  },
  {
    title: "Live Chat",
    desc: "Chat with our available agent and get answered to your quick queries.",
    image: "/Live-Chat.png",
    href: "/LiveChat",
  },
  {
    title: "Talk to Sales",
    desc: "Get everything needed for your practice performance under RCM Centric.",
    image: "/Talk-to-Sales.png",
    href: "/TalktoSales",
  },
  {
    title: "FAQ's",
    desc: "Find answers of frequently asked questions and get to know our services.",
    image: "/FAQ-01.svg",
    href: "/FAQ",
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-800 py-8 px-4 sm:px-10 md:px-32 flex flex-col md:flex-row items-center justify-between relative">
        <div className="flex-1 text-left text-white max-w-2xl mt-10 sm:mt-20 sm:ml-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Frequently Asked<br />Questions</h1>
          <p className="text-lg mb-4">
            Get answered to your most questions or queries instantly and explore our services more easily. If you can’t find your answer, please reach our support team so they can help you right away.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0 w-full">
          <img src="/faq-img.png" alt="FAQ Illustration" className="max-w-full h-40 sm:h-70" />
        </div>
      </div>

      {/* Top Categories */}
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Categories</h2>
        <div className="flex flex-col sm:flex-row items-stretch">
          {topCategories.map((cat, idx) => (
            <Card
              key={idx}
              className="w-full sm:flex-1 border-none hover:border-none transition-shadow hover:shadow-lg hover:border-blue-400 hover:bg-blue-700 group flex flex-col items-center text-center p-4 py-2 rounded-2xl h-[300px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-12 mb-1 mt-3 transition-all"
              />
              <div className="font-bold text-base sm:text-lg mb-1 transition-colors group-hover:text-white">
                {cat.title}
              </div>
              <div className="text-gray-500 mb-2 transition-colors group-hover:text-white text-sm sm:text-base line-clamp-2">
                {cat.desc}
              </div>
              <Link
                href={cat.href}
                className="inline-flex items-center px-4 sm:px-6 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold transition group-hover:bg-white group-hover:text-blue-700 group-hover:border-white group-hover:border text-sm sm:text-base"
              >
                <span className="group-hover:text-blue-700">Explore</span>{" "}
                <span className="ml-2 group-hover:text-blue-700">↗</span>
              </Link>
            </Card>
          ))}
        </div>
      </div>


      {/* Features and Benefits Link */}
      <div className="py-8 text-center bg-white">
        <span className="font-semibold text-gray-700">
          New to WeCare Centric?{" "}
          <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded ml-1 mr-2 align-middle">NEW</span>
        </span>
        <span>
          View our all{" "}
          <Link href="/Features" className="text-red-500 font-semibold hover:underline">
            features and benefits
          </Link>{" "}
          to get started
        </span>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-5xl mx-auto py-8 px-2 sm:px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 items-stretch">
          {infoCards.map((infoCard, idx) => (
            <Card
              key={idx}
              className="w-full sm:h-full sm:flex-1 border-1 border-gray-300 hover:border-none transition-shadow hover:shadow-lg hover:border-blue-400"
            >
              <div className="flex flex-col items-center justify-center py-6 sm:py-8">
                <Link href={infoCard.href} className="group" tabIndex={-1}>
                  <img
                    src={infoCard.image}
                    alt={infoCard.title}
                    className="h-12 mb-4 transition-transform group-hover:scale-105"
                  />
                </Link>
                <div className="font-bold text-base sm:text-lg text-center mb-2">{infoCard.title}</div>
                <div className="text-gray-500 text-center px-2 sm:px-4 text-sm sm:text-base">{infoCard.desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
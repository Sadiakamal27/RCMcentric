"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";

const cards = [
  
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
  {
    title: "Services Features",
    desc: "View all RCM Centric's features and explore more about our services.",
    image: "/SErvices-and-features-.png",
    href: "/Features",
  },
  {
    title: "Plans & Pricing",
    desc: "Get to know our customized pricing for all type of medical practices.",
    image: "/Plan-and-pricing-02.svg",
    href: "/Pricing",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-blue-700 py-16 px-4 text-center relative">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">How can we help?</h1>
        
      </div>
      {/* Features and Benefits Link */}
      <div className="py-8 text-center bg-white">
        <span className="font-semibold text-gray-700">
          New to WeCare RCM?{" "}
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
      {/* Cards Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {cards.map((card, idx) => (
          <Card key={idx} className="h-full border-1 border-gray-300 hover:border-none transition-shadow hover:shadow-lg hover:border-blue-400">
            <div className="flex flex-col items-center justify-center py-8">
              <Link href={card.href} className="group" tabIndex={-1}>
                <img src={card.image} alt={card.title} className="h-16 mb-4 transition-transform group-hover:scale-105" />
              </Link>
              <div className="font-bold text-lg text-center mb-2">{card.title}</div>
              <div className="text-gray-500 text-center px-4">{card.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 
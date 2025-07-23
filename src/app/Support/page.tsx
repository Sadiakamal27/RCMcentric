"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Search } from "lucide-react";

const cards = [
  {
    title: "Blog & Articles",
    desc: "Read our latest blogs and articles written by healthcare professionals.",
    image: "/path/to/blog-image.png", // Replace with actual path
    href: "/Blog",
  },
  {
    title: "Live Chat",
    desc: "Chat with our available agent and get answered to your quick queries.",
    image: "/path/to/live-chat-image.png",
    href: "/LiveChat",
  },
  {
    title: "Talk to Sales",
    desc: "Get everything needed for your practice performance under RCM Centric.",
    image: "/path/to/talk-to-sales-image.png",
    href: "/TalktoSales",
  },
  {
    title: "FAQ's",
    desc: "Find answers of frequently asked questions and get to know our services.",
    image: "/path/to/faq-image.png",
    href: "/FAQ",
  },
  {
    title: "Services Features",
    desc: "View all RCM Centric's features and explore more about our services.",
    image: "/path/to/services-features-image.png",
    href: "/Features",
  },
  {
    title: "Plans & Pricing",
    desc: "Get to know our customized pricing for all type of medical practices.",
    image: "/path/to/plans-pricing-image.png",
    href: "/Pricing",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Section */}
      <div className="bg-blue-700 py-16 px-4 text-center relative">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-8">How can we help?</h1>
        <div className="max-w-xl mx-auto flex items-center shadow overflow-hidden">
          <input
            type="text"
            placeholder="Search all help and learning resources"
            className="flex-1 h-14 px-6 text-lg outline-none border-none bg-white rounded-l"
          />
          <button className="h-14 px-6 bg-gray-100 hover:bg-red-400 rounded-r flex items-center justify-center">
            <Search className="text-blue-700" />
          </button>
        </div>
      </div>
      {/* Features and Benefits Link */}
      <div className="py-8 text-center bg-white">
        <span className="font-semibold text-gray-700">
          New to RCM Centric?{" "}
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
          <Card key={idx} className="h-full border transition-shadow hover:shadow-lg hover:border-blue-400">
            <div className="flex flex-col items-center justify-center py-8">
              <Link href={card.href} className="group" tabIndex={-1}>
                <img src={card.image} alt={card.title} className="h-16 mb-4 transition-transform group-hover:scale-105" />
              </Link>
              <div className="font-bold text-lg text-center mb-2">{card.title}</div>
              <div className="text-gray-500 text-center">{card.desc}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 
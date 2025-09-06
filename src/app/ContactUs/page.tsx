import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import Link from "next/link";


const topCategories = [
  
  {
    title: "Help & FAQ's",
    desc: "In our FAQ's you will find the answer to most frequently asked questions.",
    image: "/conversation-1.png",
    href: "/FAQs",
  },
  {
    title: "Our Specialties",
    desc: "We help each specialty with dedicated billing, credentialing and coding teams.",
    image: "/healthcare.png",
    href: "/Specialties",
  },
  {
    title: "Talk to Sales",
    desc: "Talk or schedule with CRM expert to get started with RCM Centric.",
    image: "/customer-service.png",
    href: "/TalktoSales",
  },
];



export default function ContactSection() {
  return (
    <>
      <div className="relative bg-blue-800 text-white  py-20 px-10 md:px-12">
        {/* Content */}
        <div className="relative z-10 max-w-4xl pl-29  text-left">
          <h2 className="text-5xl font-extrabold mb-4">Contact Us</h2>
          <hr className="w-16 h-0.5 bg-white mb-6" />
          <p className="text-base md:text-lg">
            Feel free to contact us anytime through the form.
            <br /> We will respond to your inquiry as quickly as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 mb-20 px-4 sm:px-10 md:px-20 lg:px-40 flex flex-col md:flex-row gap-8">
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Write us below</h2>
          <hr className="w-12 h-0.5 bg-red-500 mb-4" />
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
              <Input
                type="text"
                placeholder="Full Name *"
                className="w-full border-2 border-gray-300 focus:border-blue-900 focus:ring-0 hover:shadow-lg transition duration-300"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-2 border-gray-300 focus:border-blue-900 focus:ring-0 hover:shadow-lg transition duration-300"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address *"
                className="w-full border-2 border-gray-300 focus:border-blue-900 focus:ring-0 hover:shadow-lg transition duration-300"
                required
              />
              <Input
                type="text"
                placeholder="Practice / Business Name *"
                className="w-full border-2 border-gray-300 focus:border-blue-900 focus:ring-0 hover:shadow-lg transition duration-300"
                required
              />
            </div>
            <div>
              <label className="text-lg font-bold text-blue-800 mb-2 block">
                What would you like to know? *
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center space-x-2">
                  <Checkbox id="billing" />
                  <span className="text-gray-700">Billing Services</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="credentialing" />
                  <span className="text-gray-700">Credentialing</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="claims" />
                  <span className="text-gray-700">Claims Coding</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="pricing" />
                  <span className="text-gray-700">Pricing</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Checkbox id="other" />
                  <span className="text-gray-700">Other</span>
                </label>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Type your message here... (Optional)"
              className="w-full h-24 border-2 border-gray-300 focus:border-blue-900 focus:ring-0 hover:shadow-lg transition duration-300 resize-none"
            />
            <p className="text-sm text-gray-500">0 of 25 max characters.</p>
            <div className="flex items-start sm:items-center space-x-2">
              <Checkbox id="privacy" className="focus:border-blue-800 focus:ring-0" />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                By sending this form, I confirm that I have read and accept the Privacy Policy.
              </label>
            </div>
            <Button className="w-full sm:w-auto bg-blue-800 text-white rounded-b-md font-bold hover:bg-red-500">
              Submit Now
            </Button>
          </form>
        </div>

        {/* Right Section - Connect with RCM Centric */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Connect with WeCare Centric
          </h2>
          <hr className="w-12 h-0.5 bg-red-500 mb-4" />
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10 rounded">
                ✉️
              </span>
              <span className="text-gray-700">info@rcmcentric.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10 rounded">
                📞
              </span>
              <span className="text-gray-700">(415) 530-2893</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10 rounded">
                📠
              </span>
              <span className="text-gray-700">(628) 251-8619</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10 rounded">
                📍
              </span>
              <span className="text-gray-700">Patterson, CA 95263</span>
            </div>
            <div className="border-t pt-6">
              {/* Business Hours & Support */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mb-6 gap-6">
                {/* Business Hours */}
                <div className="flex items-center space-x-4 md:w-1/2">
                  <span className="inline-flex justify-center items-center w-8 h-8 text-red-400 text-xl">
                    ⏰
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">Monday - Friday</div>
                    <div className="text-sm text-gray-600">09:00AM – 05:00PM (PDT)</div>
                  </div>
                </div>

                {/* Help & Support */}
                <div className="flex items-center space-x-4 md:w-1/2">
                  <span className="inline-flex justify-center items-center w-8 h-8 text-red-400 text-xl">
                    🕑
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">Help & Support</div>
                    <div className="text-sm text-gray-600">24/7 for Clients & Patients</div>
                  </div>
                </div>
              </div>

              {/* Follow Us Section */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* Social icons unchanged */}
                {/* Facebook / Instagram / LinkedIn / Twitter / YouTube */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help And Resources */}
      <div className="container mx-auto py-10 mb-20 px-4 sm:px-10 md:px-20 lg:px-40">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Help And Resources</h2>
        <hr className="w-12 h-0.5 bg-red-500 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topCategories.map((cat, idx) => (
            <Card
              key={idx}
              className="w-full border-none transition-shadow group flex flex-col items-center text-center p-4 py-6 rounded-2xl min-h-[300px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-12 mb-1 mt-3 transition-all"
              />
              <div className="font-bold text-base sm:text-lg mb-1 transition-colors">
                {cat.title}
              </div>
              <div className="text-gray-500 mb-2 transition-colors text-sm sm:text-base line-clamp-2">
                {cat.desc}
              </div>
              <Link href={cat.href} target="_blank" rel="noopener noreferrer">
                <Button
                  asChild
                  className="rounded-full bg-blue-100 text-blue-700 hover:text-white hover:bg-blue-700 font-semibold text-sm sm:text-base px-4 sm:px-6 py-2 transition inline-flex items-center"
                >
                  <span>
                    Explore <span className="ml-2">↗</span>
                  </span>
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>

    </>
  );
}

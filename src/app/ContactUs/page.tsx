import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import Link from "next/link";


const topCategories = [
  {
    title: "Blog & News",
    desc: "All tutorials, all tools and Blog posts-explained by experts at WeCare Centric.",
    image: "/blog.png",
    href: "/FAQs/MedicalBilling",
  },
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

      <div className="container mx-auto py-10 mb-20 px-20 md:px-40 flex flex-col md:flex-row gap-8">
        {/* Left Section - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-15 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold  text-gray-800 mb-5">
            Write us below
          </h2>
          <hr className="w-12 h-0.5 bg-red-500 mb-4" />
          <form className="space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2  mt-8 gap-4">
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
              <label className="text-lg font-bold text-blue-800  mb-2 block">
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
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                className="focus:border-blue-800 focus:ring-0"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                By sending this form, I confirm that I have read and accept the
                Privacy Policy.
              </label>
            </div>
            <Button className="w-25 bg-blue-800 text-white rounded-b-md font-bold hover:bg-red-500">
              Submit Now
            </Button>
          </form>
        </div>

        {/* Right Section - Connect with RCM Centric */}
        <div className="w-full md:w-1/2 bg-white p-15 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5">
            Connect with WeCare Centric
          </h2>
          <hr className="w-12 h-0.5 bg-red-500 mb-4" />
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10  rounded">
                ✉️
              </span>
              <span className="text-gray-700">info@rcmcentric.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10  rounded">
                📞
              </span>
              <span className="text-gray-700">(415) 530-2893</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center  hover:bg-red-500 justify-center w-10 h-10  rounded">
                📠
              </span>
              <span className="text-gray-700">(628) 251-8619</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center hover:bg-red-500 justify-center w-10 h-10  rounded">
                📍
              </span>
              <span className="text-gray-700">Patterson, CA 95263</span>
            </div>
            <div className="border-t pt-6">
              {/* Business Hours & Support */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between mb-6">
                {/* Business Hours */}
                <div className="flex items-center space-x-4 md:w-1/2">
                  <span className="inline-flex justify-center items-center w-8 h-8 text-red-400 text-xl">
                    ⏰
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Monday - Friday
                    </div>
                    <div className="text-sm text-gray-600">
                      09:00AM – 05:00PM (PDT)
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden md:block mx-6 h-16 border-l border-gray-300"></div>

                {/* Help & Support */}
                <div className="flex items-center space-x-4 md:w-1/2 mt-6 md:mt-0">
                  <span className="inline-flex justify-center items-center w-8 h-8 text-red-400 text-xl">
                    🕑
                  </span>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Help & Support
                    </div>
                    <div className="text-sm text-gray-600">
                      24/7 for Clients & Patients
                    </div>
                  </div>
                </div>
              </div>

              {/* Follow Us Section */}
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.233.304 2.734.667.577.365 1.005.865 1.37 1.23.365.365.865.793 1.23 1.37.363.501.605 1.368.667 2.734.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.304 2.233-.667 2.734-.365.577-.865 1.005-1.23 1.37-.365.365-.793.865-1.37 1.23-.501.363-1.368.605-2.734.667-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.233-.304-2.734-.667-.577-.365-1.005-.865-1.37-1.23-.365-.365-.865-.793-1.23-1.37-.363-.501-.605-1.368-.667-2.734-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.304-2.233.667-2.734.365-.577.865-1.005 1.23-1.37.365-.365.793-.865 1.37-1.23.501-.363 1.368-.605 2.734-.667 1.266-.058 1.646-.07 4.85-.07zm0 1.637c-3.14 0-3.536.013-4.776.072-1.183.057-1.968.267-2.666.57-.76.33-1.403.767-2.03 1.394-.627.627-1.064 1.27-1.394 2.03-.303.698-.513 1.483-.57 2.666-.059 1.24-.072 1.636-.072 4.776s.013 3.536.072 4.776c.057 1.183.267 1.968.57 2.666.33.76.767 1.403 1.394 2.03.627.627 1.27 1.064 2.03 1.394.698.303 1.483.513 2.666.57 1.24.059 1.636.072 4.776.072s3.536-.013 4.776-.072c1.183-.057 1.968-.267 2.666-.57.76-.33 1.403-.767 2.03-1.394.627-.627 1.064-1.27 1.394-2.03.303-.698.513-1.483.57-2.666.059-1.24.072-1.636.072-4.776s-.013-3.536-.072-4.776c-.057-1.183-.267-1.968-.57-2.666-.33-.76-.767-1.403-1.394-2.03-.627-.627-1.27-1.064-2.03-1.394-.698-.303-1.483-.513-2.666-.57-1.24-.059-1.636-.072-4.776-.072zm0 4.666a4.334 4.334 0 100 8.668 4.334 4.334 0 000-8.668zm0 1.637a2.697 2.697 0 110 5.394 2.697 2.697 0 010-5.394z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M23.954 4.569c-.885.392-1.83.656-2.825.775 
    1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.003.959-3.127 
    1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 
    0-4.924 2.206-4.924 4.923 0 .39.045.765.127 
    1.124-4.09-.205-7.719-2.164-10.148-5.144-.424.722-.666 
    1.561-.666 2.475 0 1.71.87 3.213 2.188 
    4.096-.807-.026-1.566-.248-2.229-.616v.061c0 
    2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 
    0-.615-.03-.916-.086.631 1.953 2.445 3.377 
    4.604 3.419-1.68 1.319-3.809 2.105-6.102 
    2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 
    2.209 7.557 2.209 9.054 0 14-7.496 
    14-13.986 0-.21 0-.423-.015-.637.962-.689 
    1.8-1.56 2.46-2.548l-.047-.02z"
                    />
                  </svg>
                </a>

                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">YouTube</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M19.615 3.184C18.403 2.75 12 2.75 12 2.75s-6.403 
    0-7.615.434C3.384 3.618 2.618 4.384 2.184 
    5.596 1.75 6.808 1.75 9.6 1.75 9.6s0 2.793.434 
    4.005c.434 1.212 1.2 1.978 2.411 2.412 1.212.434 
    7.615.434 7.615.434s6.403 0 7.615-.434c1.212-.434 
    1.978-1.2 2.412-2.412.434-1.212.434-4.005.434-4.005s0-2.793-.434-4.005c-.434-1.212-1.2-1.978-2.412-2.412zM9.75 
    13.5v-5l5 2.5-5 2.5z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto py-10 mb-20 px-20 md:px-40">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Help And Resources</h2>
        <hr className="w-12 h-0.5 bg-red-500 mb-4" />
        <div className="flex flex-col sm:flex-row items-stretch">
          {topCategories.map((cat, idx) => (
            <Card
              key={idx}
              className="w-full sm:flex-1 border-none  transition-shadow group flex flex-col items-center text-center p-4 py-2 rounded-2xl h-[300px]"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="h-12 mb-1 mt-3 transition-all"
              />
              <div className="font-bold text-base sm:text-lg mb-1 transition-colors ">
                {cat.title}
              </div>
              <div className="text-gray-500 mb-2 transition-colors  text-sm sm:text-base line-clamp-2">
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

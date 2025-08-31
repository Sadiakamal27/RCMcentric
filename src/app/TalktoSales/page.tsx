import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TalkToSales() {
  return (
    <>
      <div
        className="min-h-[60vh] bg-gradient-to-b from-blue-900 to-blue-700
           text-white flex justify-center items-center px-4 md:px-8"
      >
        <div className="text-center md:text-left max-w-4xl mx-auto md:ml-16 lg:ml-32 xl:ml-48">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Talk To Sales</h1>
          <p className="text-shadow-md max-w-2xl mb-6 mx-auto md:mx-0 text-base md:text-lg">
            Looking for more information on WeCare? Simply fill out this
            brief form and an WeCare representative will follow up with you
            right away to better understand how we can help you future-proof
            your practice.
          </p>
        </div>
      </div>

      {/* Form Container - Responsive positioning */}
      <div className="relative -mt-16 md:-mt-20 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-36 md:mt-38 lg:mt-26 lg:ml-8 xl:ml-16">
              <div className="bg-white p-6 md:p-8 rounded-lg h-fit">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                  Call or fill out this form to <br className="hidden lg:block" /> connect with a sales expert
                </h3>
                <hr className="w-16 h-0.5 bg-red-400 mb-6 mx-auto lg:mx-0" />

                {/* Phone */}
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a1 1 0 011-1h2a1 1 0 01.97.757l.75 3a1 1 0 01-.216.918l-1.285 1.285a16.016 16.016 0 006.364 6.364l1.285-1.285a1 1 0 01.918-.216l3 .75A1 1 0 0119 18v2a1 1 0 01-1 1h-1C9.163 21 3 14.837 3 7V5z"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium text-sm md:text-base">(415) 530-2893</span>
                </div>

                {/* Email */}
                <div className="flex items-center mb-4 justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12l-4 4m0 0l-4-4m4 4V8m8 8a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium text-sm md:text-base">
                    sales@rcmcentric.com
                  </span>
                </div>

                {/* Chat */}
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 md:w-8 md:h-8 text-gray-700 mr-3 hover:text-red-500 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.834l-4 1 1-3.39A7.962 7.962 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="text-gray-800 font-medium text-sm md:text-base">Chat With Us</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="max-w-sm md:max-w-md mx-auto lg:ml-auto lg:mr-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full">
                  <div className="w-full p-4 flex flex-col items-center justify-center">
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                      Request Form
                    </h2>
                  </div>

                  {/* Main Form Container */}
                  <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    <form className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Full Name *"
                        className="w-full border-gray-300"
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Work Email *"
                        className="w-full border-gray-300"
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Work Phone *"
                        className="w-full border-gray-300"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Practice Name *"
                        className="w-full border-gray-300"
                        required
                      />

                      <Select>
                        <SelectTrigger className="w-full border-gray-300 text-gray-500">
                          <SelectValue placeholder="Job Role *" />
                        </SelectTrigger>
                        <SelectContent className="bg-white text-black border-none">
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="doctor">Doctor</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger className="w-full border-gray-300">
                          <SelectValue placeholder="Number of Providers *" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-none">
                          <SelectItem value="1-5">1-5</SelectItem>
                          <SelectItem value="6-10">6-10</SelectItem>
                          <SelectItem value="11+">11+</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger className="w-full border-gray-300">
                          <SelectValue placeholder="Services Interest *" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-none">
                          <SelectItem value="billing">Billing Services</SelectItem>
                          <SelectItem value="credentialing">Credentialing</SelectItem>
                          <SelectItem value="claims">Claims Coding</SelectItem>
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger className="w-full border-gray-300">
                          <SelectValue placeholder="Monthly Collection *" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-none">
                          <SelectItem value="0-50k">$0 - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="100k+">$100K+</SelectItem>
                        </SelectContent>
                      </Select>

                      <Button className="w-full md:w-auto bg-blue-800 text-white hover:bg-blue-700 rounded-full px-6 py-2">
                        Send Your Request Now
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remove the old contact section since it's now integrated above */}
      <div className="min-h-[10vh] bg-white"></div>
    </>
  );
}

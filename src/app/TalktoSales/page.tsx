"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function TalkToSales() {
  return (
    <section className="relative">
      {/* Top Blue Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Talk To Sales</h2>
          <p className="text-sm sm:text-base leading-relaxed max-w-2xl mt-4">
            Looking for more information on WeCare RCM? Simply fill out this
            brief form and an WeCare RCM representative will follow up with you
            right away to better understand how we can help you future-proof
            your practice.
          </p>
        </div>
      </div>

      {/* Main Content Grid (Info + Form) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 sm:px-12 lg:px-20 relative -mt-22">
        {/* Left Info Box */}
        <div className="mt-42">
          <div className="bg-white text-gray-800 rounded-lg p-6 sm:p-8 ">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">
              Call or fill out this form to connect with a sales expert
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-700">📞</span>
                <span>(1234) abc xyz</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-700">✉️</span>
                <span>sales@abc.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-700">💬</span>
                <span>Chat With Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-10 text-center">
              Request Form
            </h3>
            <form className="space-y-4">
              <Input
                placeholder="Full Name *"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />
              <Input
                placeholder="Work Email *"
                type="email"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />
              <Input
                placeholder="Work Phone *"
                type="tel"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />
              <Input
                placeholder="Practice Name *"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />

              <Select>
                <SelectTrigger className="  border-gray-300 border-t-0
                 text-gray-500 focus:outline-none focus:ring-0 data-[state=open]:ring-0 data-[state=open]:outline-none">
                  <SelectValue placeholder="Job Role *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none "
                  align="start">
                  <SelectItem
                    value="physician"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    ">
                    Physician / Practice</SelectItem>
                  <SelectItem value="manager"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    0">
                    Practice Manager
                  </SelectItem>
                  <SelectItem value="admin"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    0">
                    Laboratory
                  </SelectItem>
                  <SelectItem value="consultant"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    ">
                    Consultant</SelectItem>
                  <SelectItem value="hospital"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    ">
                    Hospital</SelectItem>
                  <SelectItem value="billing"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    ">
                    Billing Company</SelectItem>
                  <SelectItem value="other"
                    className="hover:bg-blue-600 hover:text-white cursor-pointer 
                    ">
                    Other</SelectItem>

                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="focus:outline-none focus:ring-0 
                data-[state=open]:ring-0 data-[state=open]:outline-none border-gray-300 border-t-0 text-gray-500">
                  <SelectValue placeholder="Number of Providers *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none ">
                  <SelectItem value="1" className="hover:bg-blue-600 hover:text-white cursor-pointer">1 Provider</SelectItem>
                  <SelectItem value="2" className="hover:bg-blue-600 hover:text-white cursor-pointer">2 Providers</SelectItem>
                  <SelectItem value="3-5" className="hover:bg-blue-600 hover:text-white cursor-pointer">3-5 Providers</SelectItem>
                  <SelectItem value="6-10" className="hover:bg-blue-600 hover:text-white cursor-pointer">6-10 Providers</SelectItem>
                  <SelectItem value="10+" className="hover:bg-blue-600 hover:text-white cursor-pointer">More Than 10 Providers</SelectItem>

                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="focus:outline-none focus:ring-0 data-[state=open]:ring-0 data-[state=open]:outline-none
                 border-gray-300 border-t-0 text-gray-500">
                  <SelectValue placeholder="Services Interest *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none ">
                  <SelectItem value="billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Medical Billing Services</SelectItem>
                  <SelectItem value="coding" className="hover:bg-blue-600 hover:text-white cursor-pointer">Medical Coding Services</SelectItem>
                  <SelectItem value="dental billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Dental Billing Services</SelectItem>
                  <SelectItem value="credentialing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Credentialing & Enrollment</SelectItem>
                  <SelectItem value="hospital billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Hospital Billing</SelectItem>
                  <SelectItem value="audit" className="hover:bg-blue-600 hover:text-white cursor-pointer">Practice Audit</SelectItem>
                  <SelectItem value="DME Billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">DME Billing</SelectItem>
                  <SelectItem value="Telehealth Billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Telehealth Billing</SelectItem>
                  <SelectItem value="Patient Help Desk" className="hover:bg-blue-600 hover:text-white cursor-pointer">Patient Help Desk</SelectItem>
                  <SelectItem value="A/R Recovery" className="hover:bg-blue-600 hover:text-white cursor-pointer">A/R Recovery</SelectItem>
                  <SelectItem value="Other" className="hover:bg-blue-600 hover:text-white cursor-pointer">Other Services</SelectItem>

                 
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="focus:outline-none focus:ring-0 
                data-[state=open]:ring-0 data-[state=open]:outline-none border-gray-300 border-t-0 text-gray-500" >
                  <SelectValue placeholder="Monthly Collection *"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none ">
                  <SelectItem value="Under $20K" className="hover:bg-blue-600 hover:text-white cursor-pointer">Under $20K</SelectItem>
                  <SelectItem value="20-50k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$20K - $50K</SelectItem>
                  <SelectItem value="50-100k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$50K - $100K</SelectItem>
               

                  <SelectItem value="100-500k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$100K - $500K</SelectItem>
                  <SelectItem value="500k-1M" className="hover:bg-blue-600 hover:text-white cursor-pointer">$500K - $1M</SelectItem>
                  <SelectItem value="1M+" className="hover:bg-blue-600 hover:text-white cursor-pointer">Over $1M</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-blue-700 hover:bg-red-500 text-white font-semibold rounded-full mt-4 px-6 py-2 mx-auto block">
                Send Your Request Now
              </Button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

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
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useFormSubmit } from "@/hook/useFormSubmit"


export default function TalkToSales() {

  const { handleSubmit, loading } = useFormSubmit()

  // ✅ states to store values of shadcn Selects
  const [jobRole, setJobRole] = useState("")
  const [numProviders, setNumProviders] = useState("")
  const [serviceInterest, setServiceInterest] = useState("")
  const [monthlyCollection, setMonthlyCollection] = useState("")

  // Handle select changes and update hidden inputs
  const handleJobRoleChange = (value: string) => {
    setJobRole(value)
  }

  const handleNumProvidersChange = (value: string) => {
    setNumProviders(value)
  }

  const handleMonthlyCollectionChange = (value: string) => {
    setMonthlyCollection(value)
  }





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
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              {/* Hidden field to identify the form */}
              <input type="hidden" name="formName" value="WeCare RCM Request Form" />
              
              {/* Hidden inputs for select values */}
              <input type="hidden" name="jobRole" value={jobRole} />
              <input type="hidden" name="numProviders" value={numProviders} />
              <input type="hidden" name="monthlyCollection" value={monthlyCollection} />

              <Input
                name="fullName"
                placeholder="Full Name *"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />

              <Input
                name="workEmail"
                placeholder="Work Email *"
                type="email"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />

              <Input
                name="workPhone"
                placeholder="Work Phone *"
                type="tel"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />

              <Input
                name="practiceName"
                placeholder="Practice Name *"
                required
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300"
              />

<div className="space-y-4"> {/* Vertical stacking with spacing */}
  {/* Job Role Select */}
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">
      Job Role <span className="text-red-500">*</span>
    </label>
    <Select onValueChange={handleJobRoleChange} required>
      <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
        focus:outline-none focus:ring-0 focus:ring-offset-0
        data-[state=open]:ring-0 data-[state=open]:outline-none
        focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectValue placeholder="Select Job Role" />
      </SelectTrigger>
      <SelectContent className="bg-white w-full mt-2 border-t-0 border-black rounded-none" align="start">
        <SelectItem value="physician" className="hover:bg-blue-600 hover:text-white cursor-pointer">Physician / Practice</SelectItem>
        <SelectItem value="manager" className="hover:bg-blue-600 hover:text-white cursor-pointer">Practice Manager</SelectItem>
        <SelectItem value="admin" className="hover:bg-blue-600 hover:text-white cursor-pointer">Laboratory</SelectItem>
        <SelectItem value="consultant" className="hover:bg-blue-600 hover:text-white cursor-pointer">Consultant</SelectItem>
        <SelectItem value="hospital" className="hover:bg-blue-600 hover:text-white cursor-pointer">Hospital</SelectItem>
        <SelectItem value="billing" className="hover:bg-blue-600 hover:text-white cursor-pointer">Billing Company</SelectItem>
        <SelectItem value="other" className="hover:bg-blue-600 hover:text-white cursor-pointer">Other</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Grid for Number of Providers and Monthly Collection */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Number of Providers <span className="text-red-500">*</span>
      </label>
      <Select onValueChange={handleNumProvidersChange} required>
        <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="Select Number of Providers" />
        </SelectTrigger>
        <SelectContent className="bg-white w-full mt-2 border-t-0 border-black rounded-none">
          <SelectItem value="1" className="hover:bg-blue-600 hover:text-white cursor-pointer">1 Provider</SelectItem>
          <SelectItem value="2-5" className="hover:bg-blue-600 hover:text-white cursor-pointer">2-5 Providers</SelectItem>
          <SelectItem value="6-10" className="hover:bg-blue-600 hover:text-white cursor-pointer">6-10 Providers</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Monthly Collection <span className="text-red-500">*</span>
      </label>
      <Select onValueChange={handleMonthlyCollectionChange} required>
        <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
          <SelectValue placeholder="Select Monthly Collection" />
        </SelectTrigger>
        <SelectContent className="bg-white w-full mt-2 border-t-0 border-black rounded-none">
          <SelectItem value="0-50k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$0 - $50k</SelectItem>
          <SelectItem value="50k-100k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$50k - $100k</SelectItem>
          <SelectItem value="100k+" className="hover:bg-blue-600 hover:text-white cursor-pointer">$100k+</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</div>
              {/* ✅ Submit Button with loader */}
              <Button
                type="submit"
                className="w-full sm:w-auto bg-blue-800 cursor-pointer text-white rounded-b-md font-bold hover:bg-red-500 flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Request Now"
                )}
              </Button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}

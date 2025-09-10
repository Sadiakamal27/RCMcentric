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

export default function TalkToSales() {



  const [isSubmitting, setIsSubmitting] = useState(false)

  // ✅ states to store values of shadcn Selects
  const [jobRole, setJobRole] = useState("")
  const [numProviders, setNumProviders] = useState("")
  const [serviceInterest, setServiceInterest] = useState("")
  const [monthlyCollection, setMonthlyCollection] = useState("")





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
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget
                setIsSubmitting(true)
            
                if (!form.checkValidity()) {
                  form.reportValidity()
                  setIsSubmitting(false)
                  return
                }
            
                const formData = new FormData(form)
            
                // 🔑 Only keep what backend expects
                const payload = {
                  formName: formData.get("formName") as string, // hidden input is already there
                  email: formData.get("workEmail") as string,   // map workEmail → email
                }
            
                try {
                  const res = await fetch("/api/send", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  })
            
                  if (res.ok) {
                    alert("✅ Your request has been sent successfully!")
                    form.reset()
                  } else {
                    alert("❌ Failed to send. Please try again.")
                  }
                } catch (err) {
                  console.error(err)
                  alert("❌ Something went wrong. Try again later.")
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              {/* Hidden field to identify the form */}
              <input type="hidden" name="formName" value="WeCare RCM Request Form" />

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

              {/* ✅ Job Role */}
              <Select value={jobRole} onValueChange={setJobRole}>
                <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Job Role *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none" align="start">
                  <SelectItem value="physician" className="hover:bg-blue-600 hover:text-white">Physician / Practice</SelectItem>
                  <SelectItem value="manager" className="hover:bg-blue-600 hover:text-white">Practice Manager</SelectItem>
                  <SelectItem value="admin" className="hover:bg-blue-600 hover:text-white">Laboratory</SelectItem>
                  <SelectItem value="consultant" className="hover:bg-blue-600 hover:text-white">Consultant</SelectItem>
                  <SelectItem value="hospital" className="hover:bg-blue-600 hover:text-white">Hospital</SelectItem>
                  <SelectItem value="billing" className="hover:bg-blue-600 hover:text-white">Billing Company</SelectItem>
                  <SelectItem value="other" className="hover:bg-blue-600 hover:text-white">Other</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="jobRole" value={jobRole} required />

              {/* ✅ Number of Providers */}
              <Select value={numProviders} onValueChange={setNumProviders}>
                <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Number of Providers *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none">
                  <SelectItem value="1" className="hover:bg-blue-600 hover:text-white">1 Provider</SelectItem>
                  <SelectItem value="2" className="hover:bg-blue-600 hover:text-white">2 Providers</SelectItem>
                  <SelectItem value="3-5" className="hover:bg-blue-600 hover:text-white">3-5 Providers</SelectItem>
                  <SelectItem value="6-10" className="hover:bg-blue-600 hover:text-white">6-10 Providers</SelectItem>
                  <SelectItem value="10+" className="hover:bg-blue-600 hover:text-white">More Than 10 Providers</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="numProviders" value={numProviders} required />

              {/* ✅ Services Interest */}
              <Select value={serviceInterest} onValueChange={setServiceInterest}>
                <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Services Interest *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none">
                  <SelectItem value="billing" className="hover:bg-blue-600 hover:text-white">Medical Billing Services</SelectItem>
                  <SelectItem value="coding" className="hover:bg-blue-600 hover:text-white">Medical Coding Services</SelectItem>
                  <SelectItem value="dental billing" className="hover:bg-blue-600 hover:text-white">Dental Billing Services</SelectItem>
                  <SelectItem value="credentialing" className="hover:bg-blue-600 hover:text-white">Credentialing & Enrollment</SelectItem>
                  <SelectItem value="hospital billing" className="hover:bg-blue-600 hover:text-white">Hospital Billing</SelectItem>
                  <SelectItem value="audit" className="hover:bg-blue-600 hover:text-white">Practice Audit</SelectItem>
                  <SelectItem value="dme" className="hover:bg-blue-600 hover:text-white">DME Billing</SelectItem>
                  <SelectItem value="telehealth" className="hover:bg-blue-600 hover:text-white">Telehealth Billing</SelectItem>
                  <SelectItem value="helpdesk" className="hover:bg-blue-600 hover:text-white">Patient Help Desk</SelectItem>
                  <SelectItem value="ar" className="hover:bg-blue-600 hover:text-white">A/R Recovery</SelectItem>
                  <SelectItem value="other" className="hover:bg-blue-600 hover:text-white">Other Services</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="serviceInterest" value={serviceInterest} required />

              {/* ✅ Monthly Collection */}
              <Select value={monthlyCollection} onValueChange={setMonthlyCollection}>
                <SelectTrigger className="w-full border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
          focus:outline-none focus:ring-0 focus:ring-offset-0
          data-[state=open]:ring-0 data-[state=open]:outline-none
          focus-visible:ring-0 focus-visible:ring-offset-0">
                  <SelectValue placeholder="Monthly Collection *" />
                </SelectTrigger>
                <SelectContent className="bg-white w-[260px] mt-2 border-t-0 border-black rounded-none">
                  <SelectItem value="under20k" className="hover:bg-blue-600 hover:text-white">Under $20K</SelectItem>
                  <SelectItem value="20-50k" className="hover:bg-blue-600 hover:text-white">$20K - $50K</SelectItem>
                  <SelectItem value="50-100k" className="hover:bg-blue-600 hover:text-white">$50K - $100K</SelectItem>
                  <SelectItem value="100-500k" className="hover:bg-blue-600 hover:text-white">$100K - $500K</SelectItem>
                  <SelectItem value="500k-1M" className="hover:bg-blue-600 hover:text-white">$500K - $1M</SelectItem>
                  <SelectItem value="1M+" className="hover:bg-blue-600 hover:text-white">Over $1M</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="monthlyCollection" value={monthlyCollection} required />

              {/* ✅ Submit Button with loader */}
              <Button
                type="submit"
                className="w-full sm:w-auto bg-blue-800 text-white rounded-b-md font-bold hover:bg-red-500 flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
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

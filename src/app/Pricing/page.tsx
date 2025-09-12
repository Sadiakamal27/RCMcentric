"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react";

function page() {

  const { handleSubmit, loading } = useFormSubmit()
  
  // States for select values
  const [jobRole, setJobRole] = useState("")
  const [numProviders, setNumProviders] = useState("")
  const [monthlyCollection, setMonthlyCollection] = useState("")

  // Handle select changes
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
    <div>
      <section className="min-h-screen py-12 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
          <div className="mb-6 sm:mb-8 md:mb-0 md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get Pricing Details</h2>
            <hr className="w-16 sm:w-20 h-1 mt-3 bg-white mb-4 sm:mb-6 mx-auto md:mx-0" />
            <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed px-4 sm:px-2 md:px-0 max-w-lg mx-auto md:mx-0">
              For more than 10 years, we've been helping physicians, clinics,
              group practices, and hospital-owned physician groups with their
              medical billing and coding tasks. Establish and grow a healthy
              practice with WeCare RCM's unique strategy and integrated
              technology.
            </p>
            <div className="relative mt-4 sm:mt-6">
              <img
                src="/Plan-and-pricing-02.svg"
                alt="Pricing illustration"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <p className="mb-4 font-bold text-gray-600">
              Please enter your practice details to see estimated prices for our
              services
            </p>

            <div className="min-h-[400px]">
              <form
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                {/* Hidden field to identify this form */}
                <input type="hidden" name="formName" value="Pricing Form" />
                
                {/* Hidden inputs for select values */}
                <input type="hidden" name="jobRole" value={jobRole} />
                <input type="hidden" name="numProviders" value={numProviders} />
                <input type="hidden" name="monthlyCollection" value={monthlyCollection} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="firstName"
                      placeholder="Enter First Name"
                      required
                      className="border-t-0 border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="lastName"
                      placeholder="Enter Last Name"
                      required
                      className="border-t-0 border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="workEmail"
                      placeholder="Enter Work Email"
                      type="email"
                      required
                      className=" border-t-0 border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300 w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Work Phone <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="workPhone"
                      placeholder="Enter Work Phone"
                      type="tel"
                      required
                      className="border-t-0 border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300 w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Practice Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="practiceName"
                      placeholder="Enter Practice Name"
                      required
                      className=" border-t-0 border-l-0 border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-gray-400 border-gray-300 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Job Role <span className="text-red-500">*</span>
                    </label>
                    <Select onValueChange={handleJobRoleChange} required>
                      <SelectTrigger className="w-full  border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Providers <span className="text-red-500">*</span>
                    </label>
                    <Select onValueChange={handleNumProvidersChange} required>
                      <SelectTrigger className="w-full  border-l-0 border-r-0 border-gray-300 border-t-0 text-gray-500
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
                      <SelectContent className="bg-white  w-full mt-2 border-t-0 border-black rounded-none">
                        <SelectItem value="0-50k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$0 - $50k</SelectItem>
                        <SelectItem value="50k-100k" className="hover:bg-blue-600 hover:text-white cursor-pointer">$50k - $100k</SelectItem>
                        <SelectItem value="100k+" className="hover:bg-blue-600 hover:text-white cursor-pointer">$100k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
              type="submit"
              className="w-full sm:w-auto bg-blue-800 text-white rounded-b-md font-bold hover:bg-red-500 flex items-center justify-center gap-2"
              disabled={loading} // prevent multiple clicks
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                " $ View Pricing"
              )}
            </Button>
              </form>


            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
import { useFormSubmit } from "@/hook/useFormSubmit";

export default page;

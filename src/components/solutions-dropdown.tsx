"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ExternalLink, BarChart3, FileText, Award, Headphones, Settings, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function SolutionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center font-bold space-x-1 text-gray-700 hover:text-red-500 cursor-pointer">
          <span>Solutions</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen max-w-4xl p-0 border-0 shadow-xl" align="start">
        <div className="grid lg:grid-cols-2">
          {/* Left Side - Blue Section */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 text-white">
            <div className="space-y-2">
              {/* Illustration */}
              <div className="relative w-39 h-50 mx-auto">
                <Image
                  src="/solutions.jpg?height=96&width=128"
                  alt="Provider Centric Solution Illustration"
                  width={39}
                  height={96}
                  className="w-100 h-44 object-contain"
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold">A Complete Provider Centric Solution</h3>
                <p className="text-blue-100 leading-tight text-sm">
                  Get everything needed for your practice performance under RCM Centric's professional provider centric
                  solutions.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Talk to Sales <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Services List */}
          <div className="bg-blue-100 p-4">
            <div className="space-y-4">
              {/* Medical Billing Services */}
              <div className="flex items-start space-x-3 group cursor-pointer  p-2 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center  transition-colors">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/bill.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                <Link href="/MedicalBilling" target="_blank" rel="noopener noreferrer">

                  <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Medical Billing Services
                  </h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Get your medical billing team to streamline your practice collection.
                  </p>
                  </Link>
                </div>
              </div>

              {/* Medical Coding Services */}
              <div className="flex items-start space-x-3 group cursor-pointer  p-2 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center  transition-colors">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/coding.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Medical Coding Services
                  </h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    RCM Centric will reduce your compliance risks by accurate coding.
                  </p>
                </div>
              </div>

              {/* Credentialing & Enrollment */}
              <div className="flex items-start space-x-3 group cursor-pointer  p-2 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center  transition-colors">
                   <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/diploma.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                    Credentialing & Enrollment
                  </h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Help you navigate the process of your practice credentialing tasks.
                  </p>
                </div>
              </div>

              {/* Patient Help Desk */}
              <div className="flex items-start space-x-3 group cursor-pointer  p-2 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center  transition-colors">
                   <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/registration.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">Patient Help Desk</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    RCM Centric provides dedicated Help desk services for your patient's queries.
                  </p>
                </div>
              </div>

              {/* IT Support Services */}
              <div className="flex items-start space-x-3 group cursor-pointer  p-2 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center  transition-colors">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/information-desk.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">IT Support Services</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Ensure Seamless IT Operations with RCM Centric's Expert IT Support Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

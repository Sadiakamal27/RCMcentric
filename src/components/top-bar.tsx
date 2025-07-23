"use client"

import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, MessageCircle, HelpCircle, Users } from "lucide-react"

export function TopBar() {
  return (
    <div className="hidden sm:block bg-gray-50 border-b border-gray-200 py-2 px-2 sm:px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
        {/* Left Side - Social Media Icons */}
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 mb-2 sm:mb-0">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-700 transition-colors">
            <Linkedin className="w-4 h-4" />

          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>(415) 530-2893</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
            <MessageCircle className="w-4 h-4" />
            <span>Live Chat</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </div>
          <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
            <Users className="w-4 h-4" />
            <span>Careers</span>
          </div>
        </div>
      </div>
    </div>
  )
}
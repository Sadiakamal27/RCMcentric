"use client"

import React, { useState, useEffect } from "react";
import { SolutionsDropdown } from "./solutions-dropdown";
import { SpecialtiesDropdown } from "./specialities-dropdown";
import { CompanyDropdown } from "./company-dropdown";
import { ResourcesDropdown } from "./resources-dropdown";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set to true when scrolling starts (even a small amount)
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white px-2 sm:px-4">
      {/* Header */}
      <header
        className={`${isScrolled
          ? "fixed top-0 left-0 w-full z-40 bg-white shadow-md"
          : "relative"
          } bg-white border-b border-gray-100 px-2 sm:px-4 py-4 transition-all duration-300`}
      >

        {/* Mobile Only: Logo, Get Pricing, Hamburger */}

        <div className="flex items-center justify-between w-full lg:hidden">
          {/* Logo */}

         
            <Link href="/" className="">
              <Image
                src="/Logo-Gif.gif"
                alt="RCM Centric Logo"
                width={120}    // required
                height={40}    // required
                unoptimized    // prevents optimization so GIF animation plays
                className="h-8 w-auto"
              />
            </Link>

            {/* Get Pricing Button */}
            <Link href="/Pricing" className="">
              <Button className="rounded-full bg-red-400 hover:bg-red-500 text-white font-bold px-6 py-2 text-base">
                Get Pricing
              </Button>
            </Link>
            {/* Hamburger Menu */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="focus:outline-none">
                  <Menu className="w-8 h-8 text-blue-900" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-[#f3f6f8] p-0 w-full max-w-xs min-h-screen">
                <div className="flex flex-col h-full">
                  {/* Logo and Close */}
                  <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <div className="flex items-center space-x-2">
                      <img src="/Logo-Gif.gif" alt="RCM Centric Logo" className="h-8 w-auto" />
                      <span className="font-bold text-2xl text-gray-800">WeCare</span>
                      <span className="font-bold text-2xl text-gray-800">RCM</span>
                    </div>
                    <DrawerClose asChild>
                      <button className="text-2xl text-gray-700 focus:outline-none">
                        <X className="w-6 h-6" />
                      </button>
                    </DrawerClose>
                  </div>
                  {/* Navigation Links */}
                  <nav className="flex-1 flex flex-col gap-1 px-0">
                    <Link href="/" className="block px-6 py-2 font-semibold text-white bg-red-400">Home</Link>
                    <Link href="#" className="block px-6 py-2 text-black">Solutions</Link>
                    <Link href="#" className="block px-6 py-2 text-black">Specialties</Link>
                    <Link href="#" className="block px-6 py-2 text-black">Credentialing</Link>
                    <Link href="/Pricing" className="block px-6 py-2 text-black">Pricing & Plans</Link>
                    <Link href="#" className="block px-6 py-2 text-black">Get a Free Quote</Link>
                    <Link href="/About" className="block px-6 py-2 text-black">About</Link>
                    <Link href="#" className="block px-6 py-2 text-black">Blog</Link>
                    <Link href="/ContactUs" className="block px-6 py-2 text-black">Contact Us</Link>
                  </nav>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          {/* Desktop Only: Full Header */}
          <div className="hidden lg:flex max-w-7xl mx-auto flex-col lg:flex-row items-center justify-between gap-2 lg:gap-0">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-2 lg:mb-0">
              <div className="w-36 h-9 rounded flex items-center justify-center">
                <img
                  src="/Logo-Gif.gif"
                  alt="Telehealth Billing Icon"
                  className="object-contain"
                />
              </div>
            </div>
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <SolutionsDropdown />
              <SpecialtiesDropdown />
              <div className="text-gray-700 hover:text-red-500 font-bold cursor-pointer">
                <Link href="/WhyRCM" target="_blank" rel="noopener noreferrer">
                  Why WeCare RCM
                </Link>
              </div>
              <CompanyDropdown />
              <ResourcesDropdown />
            </nav>
            {/* CTA Buttons (Desktop) */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <Link href="/Pricing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-red-300 rounded-full text-red-500 hover:bg-red-500 hover:text-white bg-transparent w-full sm:w-auto"
                >
                  Get Pricing
                </Button>
              </Link>
              <Link href="/ContactUs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="rounded-full bg-blue-600 hover:bg-red-500 hover:text-white text-white font-bold w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
      </header>
    </div>
  );
}

export default Header;
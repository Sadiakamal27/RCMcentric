"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MedicalBillingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Play video when section comes into view
          if (videoRef.current) {
            videoRef.current.play().catch(console.error);
            setIsVideoPlaying(true);
          }
        } else {
          // Pause video when section leaves view
          if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const benefits = [
    "Reduce in-house cost",
    "More time for patients",
    "Smooth, accurate and faster",
    "Optimized billing process",
    "Monthly audits, reporting and analytics",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 sm:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
              <div className="text-white font-bold text-lg">
                <div>WeCare</div>
                <div className="text-xs">RCM</div>
              </div>
            </div>

            {/* Header */}
            <div className="space-y-4">
              <p className="text-red-400 font-medium tracking-wide uppercase text-sm">
                SOLUTIONS BY SPECIALTY
              </p>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-700 leading-tight">
                Customized Billing Solutions
                <br />
                For Your Medical{" "}
                <span className="relative inline-block">
                  Specialty
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-1000 ease-out ${isVisible ? "w-full" : "w-0"
                      }`}
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Our operations and billing team is here to provide you with
              everything you need, whenever you need it, so you can focus on
              what matters most: caring for your patients.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className={`flex items-center space-x-3 transform transition-all duration-500 ease-out ${isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[-20px] opacity-0"
                    }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <Link href="/Specialties" target="_blank" rel="noopener noreferrer">
            <Button
              className={`bg-blue-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 
     transition-transform duration-300 
     
    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "800ms" }}
            >
              <span>View All Specialties</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
            </Link>

          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="rounded-lg h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                src="/rcm-specialties.mp4"
                poster="/path/to/your/video-poster.jpg"
              >
                <source src="/why-choose-rcm-centric.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay content to simulate the medical specialties */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Primary Care */}
                <div
                  className={`absolute top-16 right-16 flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg transform transition-all duration-700 ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-20px] opacity-0"
                    }`}
                  style={{ transitionDelay: "400ms" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

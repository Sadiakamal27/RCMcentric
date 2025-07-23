"use client";

import { useEffect, useRef, useState } from "react";

import React from "react";

export default function OnboardingPage() {
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

  return (
    

  
    <div className="min-h-screen py-10 sm:py-16 px-2 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Side - Video */}
        <div className="w-full md:w-1/2 relative mb-8 md:mb-0 md:mr-8">
          <div className="rounded-lg h-48 sm:h-64 md:h-auto flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
              src="/rcm-centric-video-animation-0012.mp4"
             preload="metadata"
            >
              <source src="/why-choose-rcm-centric.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          <h2 className="text-red-600 text-base sm:text-lg font-bold mb-2">WELCOME TO A SMOOTH START</h2>
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Effortless Onboarding and Seamless Transition</h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            At RCM Centric, we understand that switching to a new billing service can seem daunting. That’s why we’ve designed our onboarding and transition process to be as simple and stress-free as possible. Here’s how we ensure an effortless start for your practice:
          </p>
          <ul className="list-none mb-6">
            <li className="flex items-center mb-2 text-sm sm:text-base">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Personalized Onboarding Plan
            </li>
            <li className="flex items-center mb-2 text-sm sm:text-base">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Comprehensive Data Migration
            </li>
            <li className="flex items-center mb-2 text-sm sm:text-base">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Step-by-Step Guidance
            </li>
            <li className="flex items-center mb-2 text-sm sm:text-base">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Seamless Integration
            </li>
            <li className="flex items-center mb-2 text-sm sm:text-base">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Quick Start to Improved Efficiency
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full w-full sm:w-fit">
            Let’s Connect
          </button>
        </div>
      </div>
    </div>
 
  );
}
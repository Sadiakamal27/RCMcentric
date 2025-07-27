import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
function ExpertiseSection() {
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
    <div className="min-h-screen py-10 sm:py-16 px-2 sm:px-4 bg-white flex items-center mt-10 sm:mt-20 justify-center">
      <div className="text-center w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Expertise in Software</h1>
        <div className="mt-2">
          <hr className="w-16 mx-auto border-t-2 border-red-500" />
          <div className="w-full relative mb-8">
            <div className="w-full aspect-video flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                src="/rcm-billing-software-animation.mp4"
                preload="metadata"
              >
                <source src="/why-choose-rcm-centric.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>




        <Card className="w-full grid grid-cols-1 lg:grid-cols-2 bg-blue-100 max-w-3xl mx-auto overflow-hidden mt-6">

          <CardHeader className="bg-gradient-to-r to-white/50 p-1 text-left">
            <CardTitle className="text-base sm:text-xl font-semibold ">
              Unite your healthcare workflows and save 40+ hours every week.
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-1">

            <div className="flex-1 w-full mb-2 sm:mb-0">
              <Input
                type="email"
                placeholder="Work Email"
                className="w-full border border-gray-400 focus:border-gray-300 focus:ring-0 focus:outline-none text-sm"
              />
            </div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-4 sm:px-6 py-2 w-full sm:w-auto">
              GET STARTED
            </Button>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default ExpertiseSection
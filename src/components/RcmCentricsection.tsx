"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useIntersectionObserver } from "./../hook/UseIntersectionObserver";
import AutoPlayVideo from "./AutoPlayVideo";

const features = [
  {
    icon: "/go-fast.svg?height=64&width=64",
    alt: "GO FAST",
    title: "GO FAST",
    description: "Billing and coding key processes so you can understand and improve operations—as it happens.",
  },
  {
    icon: "/go-big.svg?height=64&width=64",
    alt: "GO BIG",
    title: "GO BIG",
    description: "Improve your practice billing and coding errors and streamline maximum collections.",
  },
  {
    icon: "/go-bold.svg?height=64&width=64",
    alt: "GO BOLD",
    title: "GO BOLD",
    description: "Dream up and deliver more care to your patients' that advance your practice health.",
  },
  {
    icon: "/go-smooth.svg?height=64&width=64",
    alt: "GO SMOOTH",
    title: "GO SMOOTH",
    description: "With RCM Centric, your practice will achieve the results set for success in a short time.",
  },
];

export default function RCMCentricSection() {
  const [triggerRef, isVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  return (
    <section className="bg-blue-100 py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-700">Why WeCare RCM?</h2>
              <div className="w-24 h-1 bg-red-500"></div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Upgrade and simplify your practice to ensure seamless, precise, and efficient service on the go.
              </p>
              <AutoPlayVideo
                        src="/why-choose-rcm-centric.mp4"
                        wrapperClassName="flex flex-col items-center"
                        videoClassName="w-full rounded-lg"
                    />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-8 relative px-0 sm:px-0">

            {/* Trigger for Observer */}
            <div ref={triggerRef} className="absolute top-0 left-0 w-full h-1"></div>

            {/* Animating Content */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "animate-slide-up-medium" : "slide-up-hidden"
              } flex flex-col gap-3 sm:gap-4`}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 p-3 sm:p-6 rounded-lg hover:bg-white/50 transition-colors duration-700"
                >
                  <div className="flex-shrink-0 mb-2 sm:mb-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center">
                      <Image
                        src={feature.icon || "/placeholder.svg"}
                        alt={feature.alt}
                        width={64}
                        height={64}
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-sm sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}

              <div className="bg-blue-600 rounded-lg p-3 sm:p-8 text-center text-white shadow-lg mt-4 sm:mt-8 mx-1 sm:mx-0">
                <h2 className="text-base sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-6 leading-tight">
                  Connect for a free Practice Audit to build out your tailored improvement plan
                </h2>
                <Link href="/ContactUs" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg transform hover:scale-105 transition-all duration-200">
                  Connect Now <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

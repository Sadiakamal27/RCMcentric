import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import { ExternalLink } from "lucide-react";

function CounterBox({
  targetNumber,
  label,
}: {
  targetNumber: number;
  label: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const duration = 2000; // 2 seconds
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="bg-white text-pink-600 font-bold border border-dashed rounded-lg border-pink-700
     text-center w-full h-20 sm:h-24 md:h-30 gap-2 sm:gap-3 flex flex-col items-center justify-center p-2 sm:p-4">
      <span className="text-3xl sm:text-4xl md:text-5xl">{count}+</span>
      <span className="text-xs sm:text-sm font-medium mt-1 text-center leading-tight">{label}</span>
    </div>
  );
}

export function SuccessSection() {
  const [successRef, isSuccessVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  return (
    <section
      ref={successRef}
      className={`bg-white py-20 px-5 transition-all duration-700 ${
        isSuccessVisible ? "animate-slide-up" : "slide-up-hidden"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-40">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h4 className="uppercase text-pink-600 font-semibold tracking-widest mb-4">
        	Our Mission		
          </h4>

          <div className="flex items-center gap-4">
            {/* Blue vertical line */}
            <div className="w-1 h-16 bg-pink-600 hidden md:block"></div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-2">
              A Forward Thinking Company
            </h2>
          </div>

          <p className="text-gray-600 mb-6 mt-3">
            WeCare RCM is HIPAA Compliant, a forward-thinking company that builds strong
             relationships, embraces new approaches to healthcare, understands its client's
              needs, and works hard to get maximum reimbursement and solve practice issues.
          </p>
           <p className="text-gray-600 mb-6">
            WeCare RCM has the resources, billing and coding knowledge, insurance relationships,
             and outside service relationships to provide complete solutions with the confidence that 
            their medical practices, hospitals, medical groups, or facilities get expert staff for 
            their billing operations.  </p>

          <Link href="/ContactUs" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" 
            
            className="text-white font-semibold hover:bg-red-500 bg-blue-700 cursor-pointer">
              Get In Touch <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Right Side - Success Bar + Counters */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
          {/* Success Bar */}
          <div>
            <div className="text-gray-800 font-bold mb-2 text-base sm:text-lg">
              Success Rate
            </div>
            <div className="bg-gray-300 h-6 sm:h-8 w-full overflow-hidden relative rounded-full">
              <div
                className="bg-blue-600 h-full transition-all duration-1000 rounded-full"
                style={{ width: isSuccessVisible ? "90%" : "0%" }}
              ></div>
            </div>
          </div>

          {/* Counters */}
          {isSuccessVisible && (
            <div className="grid grid-cols-2 font-bold gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <CounterBox targetNumber={12} label="Years of Service" />
              <CounterBox targetNumber={45} label="Specialty Experts" />
              <CounterBox targetNumber={48} label="States Covered" />
              <CounterBox targetNumber={20} label="Revenue Increased" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

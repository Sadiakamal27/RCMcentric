"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
// Chart Data (your code)
const chartData = [
  {
    label: "In-House",
    values: [
      { height: 75, color: "bg-red-300 hover:bg-red-500", label: "Denials" },
      {
        height: 45,
        color: "bg-rose-200 hover:bg-rose-400",
        label: "Rejections",
      },
      {
        height: 35,
        color: "bg-blue-200 hover:bg-blue-400",
        label: "Net Collection",
      },
    ],
  },
  {
    label: "Outsourced to RCM",
    values: [
      { height: 10, color: "bg-red-300 hover:bg-red-500", label: "Denials" },
      {
        height: 5,
        color: "bg-rose-200 hover:bg-rose-400",
        label: "Rejections",
      },
      {
        height: 85,
        color: "bg-blue-200 hover:bg-blue-400",
        label: "Net Collection",
      },
    ],
  },
];

export default function RCMBenefitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* Your Existing Chart Section */}
      <section className="bg-[#0B1B39] text-white py-10 sm:py-20 px-2 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-red-400 font-semibold text-lg mb-2">
              Scale Medical Practice Revenue
            </h4>
            <h2 className="text-4xl font-bold mb-4">
              Here's How WeCare RCM Can Benefit Your Practice
            </h2>
            <p className="text-gray-300 text-lg">
              For ambitious practices around the United States, WeCare RCM
              makes moving revenue growth as simple, borderless, and
              approachable as the rest of the healthcare technology. Our teams
              are experienced in each medical specialty to streamline your
              practice collection.
            </p>
          </div>

          {/* Right Chart */}
          <div ref={ref} className="bg-white rounded-md p-6">
            <div className="flex justify-center gap-4 mb-6">
              <Legend color="bg-red-300" label="Denials" />
              <Legend color="bg-rose-200" label="Rejections" />
              <Legend color="bg-blue-200" label="Net Collection" />
            </div>

            <div className="relative flex w-full h-64 overflow-x-auto">
              <div className="flex flex-col justify-between mr-4 text-sm text-black">
                {[100, 80, 60, 40, 20, 0].map((num) => (
                  <div
                    key={num}
                    className="h-[calc(100%/6)] flex items-start justify-end pr-2"
                  >
                    {num}
                  </div>
                ))}
              </div>

              <div className="flex flex-col justify-between h-full w-full min-w-[320px] sm:min-w-0 relative">
                {[...Array(6)].map((_, idx) => (
                  <div
                    key={idx}
                    className="absolute left-0 w-full border-t border-gray-200"
                    style={{ top: `${(100 / 6) * idx}%` }}
                  />
                ))}

                <div className="flex items-end justify-around h-full w-full gap-4 sm:gap-8 z-10">
                  {chartData.map((group, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-end h-full w-full"
                    >
                      <div className="flex items-end gap-1 sm:gap-2 h-full">
                        {group.values.map((bar, i) => (
                          <AnimatedBar
                            key={i}
                            height={bar.height}
                            color={bar.color}
                            isInView={isInView}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-gray-800 font-semibold text-center">
                        {group.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Top Section */}
      <section className="bg-[#0B1B39] text-white px-2 sm:px-5 py-6 sm:py-9">
        <section className="bg-[#0B1B39] text-white px-2 sm:px-6 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto text-center grid grid-cols-1 md:grid-cols-5 gap-2 sm:gap-4">
            <FeatureBox
              title="Eliminate All Pain Points in Your Practice"
              desc="Working with the doctors’ billing service partner will save your facility significant time and effort."
            />
            <FeatureBox
              title="Significantly Increases Collections"
              desc="Our simple and error-free process decreases denials and rejections, resulting in more significant practice revenue."
            />
            <FeatureBox
              title="Predictable Cash Flows & Increase Revenue"
              desc="Our certified professional billers scrub claims before sending them off to payers. This leads to faster claim processing."
            />
            <FeatureBox
              title="No Excuses - 100% Accountability"
              desc="One account manager is your single point of contact and accepts 100% accountability for achieving optimal results."
            />
            <FeatureBox
              title="It’s Easy To Use & Monitor Progress"
              desc="You don’t have to worry about learning anything new when using our medical billing services."
            />
          </div>
        </section>

        {/* Calculator Box */}
        <div className="bg-[#F5F5F5] rounded-md flex flex-col md:flex-row items-center justify-between p-4 sm:p-6 my-8 sm:my-12 max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <Image
              src="/dollar.png"
              alt="Cost Calculator Icon"
              width={40}   // w-10 = 40px
              height={40}  // h-10 = 40px
              className="w-10 h-10"
            />

            {/* Text Content */}
            <div>
              <p className="text-[#0B1B39] font-bold text-lg leading-tight">
                Cost
                <br />
                Calculator
              </p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex-1 text-left">
            <h3 className="text-[#3D3D3D] font-semibold text-lg mb-2">
              Your time and cost-saving path to the best-fit talent for your
              next project.
            </h3>
            <button className="mt-3 bg-[#4B6FD9] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#2D5BFF] transition">
              Click to Start Saving &nbsp; →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/calculator-graphic.jpg"
              alt="Calculator Graphic"
              width={128} // w-32 = 128px
              height={0} // set any number, Next.js needs a value (can be adjusted)
              className="h-auto"
            />
          </div>
        </div>

        {/* WeCare RCM One Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center justify-between gap-6 sm:gap-8 py-8 sm:py-12 border-b border-[#1f2c4a]">
          {/* Left Section */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl font-bold text-white mb-2">WeCare RCM One</h2>
            <p className="text-white text-sm mb-6">
              The operating system for healthcare providers
            </p>
            <p className="text-gray-300 text-sm">
              Run your entire medical practice, clinic, or hospital on WeCare
              RCM with our unified centric solution, designed to help you
              streamline the collection process and improve revenue.
            </p>
            <button className="mt-6 bg-white text-[#0B1B39] font-semibold px-4 py-2 rounded hover:bg-gray-200 transition">
              Get Started Now →
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center mx-6  md:flex">
            <img src="/rcmlogo2 wc.png" alt="RCM Logo" className="h-26 w-auto" />
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-blue-500 hidden md:block h-50"></div>

          {/* Right Testimonial */}
          <div className="flex-1 text-left mt-10 md:mt-0">
            <div className="text-9xl text-rose-400 mb-2">“</div>
            <p className="text-white text-sm italic mb-4">
              "WeCare RCM has improved our revenue by reducing errors and
              streamlined the collection process"
            </p>
            <p className="font-semibold text-white">Donna Arkin</p>
            <p className="text-sm text-gray-400">
              Certified Clinical Nurse Specialist
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// 🔵 Reusable Feature Box
function FeatureBox({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-1 text-left">
      <div className="flex items-start gap-2">
        {/* Vertical red line with fixed height */}
        <div className="w-3 h-15 bg-red-500 text-transparent  mt-1">|</div>

        {/* Content */}
        <div>
          <h4 className="font-semibold text-white mb-2 leading-snug">
            {title}
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

// 🔵 Boxy Bars
function AnimatedBar({
  height,
  color,
  isInView,
}: {
  height: number;
  color: string;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isInView ? `${height}%` : 0 }}
      transition={{ duration: 1 }}
      className={`w-6 sm:w-10 ${color} transition-all`}
    />
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${color}`} />
      <span className="text-sm text-gray-800">{label}</span>
    </div>
  );
}

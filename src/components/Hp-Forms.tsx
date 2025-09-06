"use client";

import React, { useState } from "react";

export default function TabSwitchForms() {
  const [activeTab, setActiveTab] = useState<"contact" | "signup">("contact");

  return (
    <main className="w-full flex flex-col items-center">
      <h1 className="text-center text-3xl font-bold mb-8">Tab Switch</h1>

      {/* Tab Switch */}
      <div className="wrapper relative flex rounded-full bg-gray-200 p-1 max-w-xs w-full">
        <div
          className={`absolute top-0 h-full w-1/2 rounded-full bg-blue-500 shadow-md transition-all duration-500 ease-in-out ${
            activeTab === "contact" ? "left-0" : "left-1/2"
          }`}
        />
        <button
          onClick={() => setActiveTab("contact")}
          className={`relative z-10 flex-1 py-3 text-center font-semibold transition-colors ${
            activeTab === "contact" ? "text-white" : "text-blue-500"
          }`}
        >
          Contact
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`relative z-10 flex-1 py-3 text-center font-semibold transition-colors ${
            activeTab === "signup" ? "text-white" : "text-blue-500"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Forms */}
      <div className="mt-8 w-full max-w-md p-6 rounded-xl bg-white shadow-lg">
        {activeTab === "contact" ? (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-500 py-3 font-semibold text-white shadow-md hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="********"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-blue-500 py-3 font-semibold text-white shadow-md hover:bg-blue-600 transition"
            >
              Create Account
            </button>
          </form>
        )}
      </div>
    </main>
  );
}

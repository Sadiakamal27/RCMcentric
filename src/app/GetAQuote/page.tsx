"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function page() {
  const [isSubmitting, setIsSubmitting] = useState(false)


  return (
    <div>
      <section className="min-h-screen py-12 bg-blue-800  text-white">
        <div className="max-w-7xl mx-auto mb-3 px-1 mt-10 flex flex-col md:flex-row items-center justify-center">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get a Free Quote</h2>
            <hr className="w-29 h-1 mt-3 bg-white mb-6" />
            <p className="mb-6 p-1 ">
              Let us help you find the best plan for your practice needs. We’ll respond to your quote within 24 hours –
              providing you multiple benefits and options to streamline your practice.
            </p>
            <div className="relative">
              <img
                src="/ezgif.com-gif-maker-1-1.png"
                alt="Pricing illustration"
                className="w-100 h-70 max-w-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-gray-800">
            <p className="mb-4 font-bold text-gray-600">
              Please enter your practice details to see quote for our
              services
            </p>
            <div className="min-h-[400px]">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  setIsSubmitting(true) //show spinner
                  // 👇 Run built-in validation
                  if (!form.checkValidity()) {
                    form.reportValidity(); // shows default browser error messages
                    return; // stop here
                  }
    
                  const formData = new FormData(form);
                  const data = Object.fromEntries(formData.entries());
    
                  try {
                    const res = await fetch("/api/send", {   // make sure correct route
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
    
                    if (res.ok) {
                      alert("✅ Your request has been sent successfully!");
                      form.reset();
                    } else {
                      alert("❌ Failed to send. Please try again.");
                    }
                  } catch (err) {
                    console.error(err);
                    alert("❌ Something went wrong. Try again later.");
                  }
                  finally {
                    // ✅ stop loading AFTER popup has been shown
                    setIsSubmitting(false)}
                }}
              
                
              >
                {/* Hidden field to identify this form */}
                <input type="hidden" name="formName" value="Get A Quote Form" />

                {/* First + Last Name (UI only, not submitted) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email" // 👈 simplified (used in JS)
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Work Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    />
                  </div>
                </div>

                {/* Practice Name + Job Role (UI only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Practice Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="practiceName"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Job Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="jobRole"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    >
                      <option value="">Select Job Role</option>
                      <option value="physician">Physician / Practice</option>
                      <option value="manager">Practice Manager</option>
                      <option value="admin">Laboratory</option>
                      <option value="consultant">Consultant</option>
                      <option value="hospital">Hospital</option>
                      <option value="billing">Billing Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Number of Providers + Monthly Collection (UI only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Number of Providers *
                    </label>
                    <select
                      name="providers"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    >
                      <option value="">Select Number</option>
                      <option value="1">1 Provider</option>
                      <option value="2">2 Providers</option>
                      <option value="3-5">3-5 Providers</option>
                      <option value="6-10">6-10 Providers</option>
                      <option value="10+">More Than 10 Providers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Monthly Collection *
                    </label>
                    <select
                      name="collection"
                      className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                      required
                    >
                      <option value="">Select Amount</option>
                      <option value="under20k">Under $20K</option>
                      <option value="20-50k">$20K - $50K</option>
                      <option value="50-100k">$50K - $100K</option>
                      <option value="100-500k">$100K - $500K</option>
                      <option value="500k-1M">$500K - $1M</option>
                      <option value="1M+">Over $1M</option>
                    </select>
                  </div>
                </div>

                {/* Services Interest (UI only) */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Services Interest *
                  </label>
                  <select
                    name="services"
                    className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="billing">Medical Billing Services</option>
                    <option value="coding">Medical Coding Services</option>
                    <option value="dental billing">Dental Billing Services</option>
                    <option value="credentialing">Credentialing & Enrollment</option>
                    <option value="hospital billing">Hospital Billing</option>
                    <option value="audit">Practice Audit</option>
                    <option value="dme">DME Billing</option>
                    <option value="telehealth">Telehealth Billing</option>
                    <option value="helpdesk">Patient Help Desk</option>
                    <option value="ar">A/R Recovery</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                {/* Submit */}
                <Button
              type="submit"
              className="w-full sm:w-auto bg-blue-800 text-white rounded-b-md font-bold hover:bg-red-500 flex items-center justify-center gap-2"
              disabled={isSubmitting} // prevent multiple clicks
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                " Send Request Now"
              )}
            </Button>
              </form>



            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;

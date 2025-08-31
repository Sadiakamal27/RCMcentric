import React from "react";

function page() {
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
              Please enter your practice details to see estimated prices for our
              services
            </p>
            <div className="min-h-[400px]">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full  focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded "
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
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
                    className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Practice Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Role <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded" required>
                    <option value="" >Select Job Role</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Administrator</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Number of Providers *
                  </label>
                  <select className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded" required>
                    <option value="">Select Number</option>
                    <option value="1">1</option>
                    <option value="2-5">2-5</option>
                    <option value="6-10">6-10</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Monthly Collection *
                  </label>
                  <select className="mt-1 p-2 w-full focus:border-gray-300 focus:ring-0 focus:outline-none shadow rounded" required>
                    <option value="">Select Amount</option>
                    <option value="0-50k">$0 - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                $ View Pricing
              </button>
            </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;


import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#0B1B39] items-center text-white py-6 px-2 sm:px-10 ">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Left Section - Contact Us */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0 w-full md:w-auto">
        <Link href="/PatientHelpDesk" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="bg-transparent text-gray-400 hover:text-white text-xs px-3 py-1 rounded w-full md:w-auto"
          >
            <span className="mr-1">📩</span> Contact Us
          </Button>
          </Link>
          <p className="text-xs text-gray-400 text-center md:text-left w-full md:w-auto">
            Capitol Ave, San Jose, CA 95127, United States
          </p>
        </div>

        {/* Right Section - Get Started Button */}
        <div className="text-center items-center w-full md:w-auto">
          <Button
            variant="outline"
            className="bg-blue-600 text-lg w-full md:w-110 border border-none text-white hover:bg-red-500 px-6 py-2 rounded"
          >
            Get Started with WeCare Centric
          </Button>
          <p className="text-lg text-gray-400 mt-1">or see our plans & pricing</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-10 sm:mt-16 px-2 sm:px-0">
      {/* RCM Centric */}
        <div>
          <h3 className="text-lg font-semibold mb-2">WeCare Centric</h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>
              <Link href="/features" className="hover:underline">Features</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">Pricing</Link>
            </li>
            <li>
              <Link href="/specialties" className="hover:underline">Our Specialties</Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Solutions</h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>
              <Link href="/services-overview" className="hover:underline">Services Overview</Link>
            </li>
            <li>
              <Link href="/medical-billing" className="hover:underline">Medical Billing</Link>
            </li>
            <li>
              <Link href="/medical-coding" className="hover:underline">Medical Coding</Link>
            </li>
            <li>
              <Link href="/credentialing" className="hover:underline">Credentialing & Enrollment</Link>
            </li>
            <li>
              <Link href="/practice-audit"className="hover:underline">Practice Audit</Link>
            </li>
            <li>
              <Link href="/patient-help-desk" className="hover:underline">Patient Help Desk</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="text-xs text-gray-400 space-y-1">
            <li>
              <Link href="/about-us" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">Contact Us</Link>
            </li>
            <li>
              <Link href="/why-rcm-centric" className="hover:underline">Why WeCare Centric</Link>
            </li>
          </ul>
        </div>

        {/* Resources & Follow Us */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>
                <Link href="/blog-news" className="hover:underline">Blog & News</Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">FAQs</Link>
              </li>
              <li>
                <Link href="/contact-support" className="hover:underline">Contact Support</Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:underline">Get A Quote</Link>
              </li>
              
              <li>
                <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
              </li>
              
              <li>
              <Link href="/E-Consent" target="_blank" rel="noopener noreferrer"
              className="hover:underline">e-Communications Consent</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold ml-20 flex flex-row mb-2">Follow Us</h3>
            <ul className="text-xs text-gray-400  space-y-1 ml-20">
              <li>
                <Link href="https://facebook.com" className="hover:underline">Facebook</Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="hover:underline">Instagram</Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="hover:underline"> LinkedIn</Link>
              </li>
              <li>
                <Link href="https://twitter.com" className="hover:underline">Twitter</Link>
              </li>
              <li>
                <Link href="https://youtube.com" className="hover:underline">YouTube</Link>
              </li>
            </ul>
          </div>
        </div>
      

      
      </div>
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-xs border-t border-gray-600 pt-4 px-2 sm:px-0">
      <div className="flex space-x-4">
        <Link href="/rcm-centric" className="flex items-center">
          <Image
            src="/footer1.png" // Replace with your image path
            alt="RCM Centric Logo"
            width={80}
            height={20}
            className="mr-2"
          />
         
        </Link>
        <Link href="/credentialing" className="flex items-center">
          <Image
            src="/footer2.png" // Replace with your image path
            alt="Credentialing & Enrollment Logo"
            width={80}
            height={20}
            className="mr-2"
          />
          
        </Link>
        <Link href="/hipaa" className="flex items-center">
          <Image
            src="/footer3.png" // Replace with your image path
            alt="HIPAA Complaint Logo"
            width={80}
            height={20}
            className="mr-2"
          />
         
        </Link>
        <Link href="/hipaa" className="flex items-center">
          <Image
            src="/footer4.png" // Replace with your image path
            alt="HIPAA Complaint Logo"
            width={80}
            height={20}
            className="mr-2"
          />
         
        </Link>
      </div>
      <p className="mt-2 md:mt-0">© 2025 RCM Centric | All Rights Reserved.</p>
    </div>
    </footer>
  );
}

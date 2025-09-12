"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import Link from "next/link";

const features = [
  { title: "HIPAA Compliant", image: "/hippa.svg" },
  { title: "Certified Expert Teams", image: "/Certfied-Expert-Team-02.svg" },
  { title: "24/7 Help & Support", image: "/Help-and-Support-new.svg" },
  { title: "Trusted By Leaders", image: "/Trusted-By-leaders-04.svg" },
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">

      {/* Blue Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 px-4 sm:px-6 text-center w-full">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            What Makes Us So Special?
          </h1>
          <p className="text-white text-base sm:text-lg mb-6 max-w-3xl mx-auto">
            We are not only geeky with advanced skills, but we aim to work closely
            with practices, hospitals and try to bring a positive change to the
            Healthcare industry and the wider world in which we live.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="max-w-5xl w-full mx-auto -mt-12 relative z-10 px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center px-2">
              <Image src={feature.image} alt={feature.title} width={48} height={48} />
              <h3 className="font-bold text-gray-800 mt-2">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Management Section */}
      <section className="bg-gray-100 w-full px-4 md:px-8 lg:px-16 py-10 md:py-16 flex flex-col lg:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            WeCare RCM delivers a seasoned team of Practice Management experts.
          </h1>
          <hr className="w-16 h-1 mt-3 bg-red-500 mb-6 mx-auto lg:mx-0" />
          <ul className="text-gray-700 space-y-4 text-left max-w-xl mx-auto lg:mx-0">
            {[
              "Audit and analyze your practice positioning from a strategic perspective.",
              "Acquire a deep knowledge of your billing and coding objectives, as well as your needs.",
              "Implement processes to create successful claims that get maximum reimbursement.",
              "Regularly updates within healthcare changes to keep your practice billing up-to-date.",
              "Recommend additional initiatives to further benefit your practice revenue.",
              "Complete RCM top-notch solution to get you fast claim reimbursement.",
            ].map((item, idx) => (
              <li key={idx} className={`flex items-start ${idx % 2 === 0 ? "text-green-600" : "text-red-600"}`}>
                <span className="mr-2">✔</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/Revenue-new.gif"
            alt="Growth Report"
            width={550}
            height={400}
            className="rounded-lg object-contain w-full max-w-md"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 w-full text-center px-4 md:px-8 py-10 md:py-12">
        <div className="max-w-4xl mx-auto bg-blue-800 rounded-lg  p-6 md:p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Looking to level-up your Revenue and ROI?
          </h2>
          <p className="text-base md:text-lg text-white mb-6">
            Let's discuss your next move.
          </p>
          <Link href="/TalktoSales">
            <Button className="bg-red-500 hover:bg-blue-700 text-white rounded-full px-6 py-2">
              Let's Talk →
            </Button>
          </Link>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-gray-50 w-full px-4 md:px-8 lg:px-16 xl:px-32 py-16">
        <div className="text-center max-w-6xl mx-auto mb-8">
          <h2 className="text-lg md:text-2xl font-bold text-red-500 uppercase mb-4">Innovate. Then do it again.</h2>
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Let your imagination soar and explore uncharted territories with fresh ideas and innovative thinking.
          </h1>
          <hr className="w-32 mx-auto border-t-2 border-red-500 mb-4" />
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Whether you're seeking assistance in rapid practice expansion, handling seasonal fluctuations, or optimizing the patient journey with cutting-edge solutions, WeCare RCM, is equipped to provide top-notch support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Cards */}
          {[
            {
              image: "/skin.png",
              title: "Expertise in Healthcare Medical Billing & Coding",
              content: "Our company specializes in medical billing services, with a team of experienced professionals who possess in-depth knowledge of the intricacies of the healthcare industry. We stay up-to-date with the latest industry regulations and coding practices, ensuring accurate and timely submission of claims, maximizing reimbursements, and minimizing claim denials.",
            },
            {
              image: "/Support-IT-evolution-04.svg",
              title: "Advanced Technology Solutions for Better Revenue Collection",
              content: "We leverage state-of-the-art technology to streamline the billing process and enhance efficiency. Our advanced software systems automate various tasks, such as claim generation, payment posting, and denial management, reducing manual errors and saving time. Additionally, our secure online portal allows easy access to financial reports, billing data, and real-time updates, providing transparency and convenience.",
            },
            {
              image: "/Stable-IT-processes-01.svg",
              title: "Exceptional Customer Experience & Patient Help Desk Solution",
              content: "At WeCare RCM, we prioritize delivering exceptional customer experiences. Our dedicated team is committed to providing prompt and friendly customer support, addressing any concerns or questions you may have. We strive to maintain open lines of communication, ensuring that you are always informed about the status of your billing and receivables. Our aim is to get maximum reimbursement for our clients.",
            },
          ].map((card, idx) => (
            <Card key={idx} className="shadow-lg border-none">
              <CardHeader>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto w-20 h-20 md:w-24 md:h-24"
                />
                <CardTitle className="text-base md:text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm md:text-base">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* What Else Do You Get Section */}
      {/* What Else Do You Get Section */}
      <section className="bg-gray-50 w-full px-4 md:px-8 lg:px-16 xl:px-32 py-16">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-lg md:text-2xl font-bold text-red-500 uppercase mb-4">
            What Else Do You Get?
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            Imagine a solution that goes beyond just handling your invoices.
            <br className="hidden md:block" />
            It empowers you to elevate your entire practice, making workflows seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {[
            {
              image: "/revenue1.svg",
              title: "Make The Most Of Revenue That Matter",
              content: "Transform your revenue cycle with our comprehensive billing and coding solutions. We go beyond just processing claims - our approach is designed to maximize your practice's financial health. Our expert team identifies and resolves key pain points that often lead to claim denials, coding errors, and revenue leakage. By focusing on accurate, efficient, and proactive billing, we help you capture every dollar your practice deserves, turning your revenue into a powerful growth engine."
            },
            {
              image: "/patients.svg",
              title: "Increase Patients Visits",
              content: "Empower your practice with a patient-centered approach that enhances both operational efficiency and patient satisfaction. From seamless front desk operations to accurate financial management, we streamline every aspect of the patient journey. This results in increased daily visits, improved patient loyalty, and a centralized view of costs, return on investment (ROI), and overall impact. With our support, your practice can focus on providing exceptional care while we handle the administrative complexities."
            },
            {
              image: "/Money.svg",
              title: "Financial Growth & Stability",
              content: "Empower your practice with a patient-centered approach that enhances both operational efficiency and patient satisfaction. From seamless front desk operations to accurate financial management, we streamline every aspect of the patient journey. This results in increased daily visits, improved patient loyalty, and a centralized view of costs, return on investment (ROI), and overall impact. With our support, your practice can focus on providing exceptional care while we handle the administrative complexities."
            },
            {
              image: "/Expand-Medical-Practice.svg",
              title: "Expand Medical Practice",
              content: "Empower your practice with a patient-centered approach that enhances both operational efficiency and patient satisfaction. From seamless front desk operations to accurate financial management, we streamline every aspect of the patient journey. This results in increased daily visits, improved patient loyalty, and a centralized view of costs, return on investment (ROI), and overall impact. With our support, your practice can focus on providing exceptional care while we handle the administrative complexities."
            },
          ].map((card, idx) => (
            <Card key={idx} className="shadow-md border border-gray-300 w-full">
              <CardHeader className="text-center md:text-left">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="mx-auto md:mx-0 w-20 h-20 md:w-24 md:h-24"
                />
                <CardTitle className="text-lg md:text-xl mt-2">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm md:text-base">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>




      {/* Video Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-32 py-16 w-full flex flex-col lg:flex-row 
      items-center gap-8 max-w-7xl mx-auto">
        <div className="relative w-full lg:w-1/2">
          <div className="relative rounded-lg overflow-hidden shadow-2xl mx-auto" style={{
            width: "100%", maxWidth: "600px", aspectRatio: "3/2"
          }}>
            {isPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/To8tul_TsWE?autoplay=1&controls=1&rel=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <>
                <img
                  src="/v1.png?height=400&width=600"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/90 hover:bg-white text-blue-600 shadow-lg"
                    onClick={handlePlay}
                  >
                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Here's why clients choose us. And stay with us.</h3>
          <hr className="w-20 h-1 mt-3 bg-red-500 mb-6" />
          <p className="text-gray-600 text-base md:text-lg">
            We have a unique 99% client retention rate at WeCare RCM. And it's unique because we're uniquely set up to provide a dedicated solution and services for your medical practice.
          </p>
          <Link href="/Pricing" target="_blank">
            <Button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center">
              Check Prices <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Cloud Section */}
      <section className="bg-gray-50 w-full px-4 md:px-8 lg:px-16 xl:px-32 py-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-lg md:text-2xl font-bold text-black uppercase mb-4">
              Have Complete Peace of Mind
            
              with Our Cloud Centric
            </h2>
            <hr className="border-red-500 w-32 border-t-2 mb-6" />
            <p className="text-gray-600 mb-6 text-sm md:text-base max-w-3xl">
              We'll move your practice documents to our Cloud Centric from any server or drive for FREE,
              so you don't have to worry about migration complexities & technicalities of moving your practice.
            </p>
            <Link href="/TalktoSales" target="_blank">
              <Button className="mt-6 text-white bg-red-500 px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center">
                Connect Now <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/Checkup-Apppointmens-5-1-1536x1536.png"
              alt="Checkup-Apppointmens"
              width={400}
              height={300}
              className="object-cover rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

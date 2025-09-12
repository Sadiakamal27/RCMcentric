"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hook/UseIntersectionObserver";
import { SuccessSection } from "@/components/SuccessSection";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

function AboutPage() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  const [lastref, isLastVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });


  const [imageRef, isImageVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  const [respectRef, isRespectVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  const [integrityRef, isIntegrityVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });

  const [titleRef, isTitleVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });
  const [subtitleRef, isSubtitleVisible] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });
  const [valuesRef1, isValuesVisible1] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });
  const [valuesRef2, isValuesVisible2] = useIntersectionObserver({
    threshold: 0,
    rootMargin: "0px",
  });
  return (
    <>
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-500 text-white py-40 px-5 overflow-hidden">
        {/* Background Rocket (Pseudo-element or placeholder) */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-32 h-32 bg-pink-600 rotate-45 clip-polygon"></div>
        <div className="absolute top-2/3 right-20 transform -translate-y-1/3 w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="absolute top-3/4 right-16 transform -translate-y-1/4 w-12 h-12 bg-gray-300 rounded-full"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 text-left px-4 sm:px-6 md:px-10">
          <h3 className="text-xs sm:text-sm uppercase tracking-widest mb-2">
            Building What's Next
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">We are WeCare RCM</h1>
          <hr className="w-12 sm:w-16 h-1 bg-white mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg max-w-2xl">
            We strive for excellence in all that we do. Each employee's
            contribution is vital towards delivering an exceptional customer
            service experience to our clients.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        {/* Slide-up on entire container */}
        <div
          ref={ref}
          className={`flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-10 transition-all duration-500 
            ${isVisible ? "animate-slide-up-fast" : "slide-up-hidden"
            }`}
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h4 className="uppercase text-pink-600 font-semibold tracking-widest mb-4">
              Company Growth
            </h4>

            <div className="flex items-center gap-4">
              {/* Blue vertical line */}
              <div className="w-1 h-16 bg-pink-600 hidden md:block"></div>

              {/* Heading */}
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-2">
                From Startup to Industry Leader
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              On-demand services by industry leaders for all our healthcare
              professionals. Our aim is to help our client’s generate maximum
              revenue for their business and make the process smoother for
              better growth. Our integrity ensures our credibility and results.
              Honor your commitments and take ownership of your actions. Our
              words and deeds are true and reliable.
            </p>

            <Link href="/About" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-semibold">
                Know More <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Right Blue Card */}
          <div className="w-full h-110 md:w-1/2 bg-blue-700 rounded-[40px] p-10 text-white">
            <div className="mb-4">
              <Image
                src="/wcaboutLogo.png"
                alt="WeCare RCM Logo"
                width={60}
                height={60}
              />
            </div>
            <p className="italic text-lg leading-relaxed text-white">
              “Through every stage of the healthcare billing and coding, RCM
              Centric is a brain-trust dedicated to forward-thinking. We bring
              value to healthcare specialist, hospitals, practices and their
              patients through our billing and coding experts. We are a team of
              advanced skills to serve each healthcare specialty and hospitals
              to get maximum revenue. Our aim is to make healthcare billing easy
              and accurate so you won&apost lose any single coin and focus on your
              patient’s health that is very important.”
            </p>
          </div>
        </div>
      </section>

      <div ref={imageRef} className="h-full w-full">
        <section
          className={`bg-white py-0 px-3 transition-all duration-700 ${isImageVisible ? "animate-slide-up-fast" : "opacity-0"
            }`}
        >
          <div className="max-w-7xl mx-auto">
            <Image
              src="/infograph.png"
              alt="Our Team"
              width={1200}
              height={600}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>
      <SuccessSection />
      <section className="bg-white py-20 px-5">
        <div
          ref={respectRef}
          className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 transition-all duration-500 ${isRespectVisible ? "animate-slide-up-fast" : "slide-up-hidden"
            }`}
        >
          <div className="w-full md:w-1/2 text-left">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold outline-text">1</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">Respect</h3>
            <hr className="w-12 sm:w-16 h-1 bg-pink-600 mb-4 sm:mb-6" />
            <p className="text-gray-600 text-base sm:text-lg">
              We build a culture of mutual appreciation, respect, and
              importance. We pridefully act towards others while celebrating
              diversity and endorsement in everything we do.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-[40px] p-4 sm:p-6 md:p-10 relative flex items-center justify-center md:justify-end">
            <Image
              src="/respect.png"
              alt="Team Member"
              width={550}
              height={400}
              className="mt-6 rounded-lg w-full h-auto max-w-md sm:max-w-lg md:max-w-none"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        {/* Slide-up on entire container */}
        <div
          ref={integrityRef}
          className={`flex flex-col md:flex-row max-w-7xl mx-auto items-center gap-10 transition-all duration-500 ${isIntegrityVisible ? "animate-slide-up-fast" : "slide-up-hidden"
            }`}
        >
          <div className="w-full md:w-1/2 bg-white rounded-[40px] p-4 sm:p-6 md:p-10 relative flex items-center justify-center md:justify-start">
            <Image
              src="/integrity.png"
              alt="Team Member"
              width={550}
              height={400}
              className="mt-6 rounded-lg w-full h-auto max-w-md sm:max-w-lg md:max-w-none"
            />
          </div>
          <div className="w-full md:w-1/2 text-right">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold outline-text">2</div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Collaboration
            </h3>
            <hr className="w-12 sm:w-16 h-1 bg-pink-600 mb-4 sm:mb-6 mr-0 ml-auto" />
            <p className="text-gray-600 text-base sm:text-lg">
              We foster a spirit of teamwork and collaboration, working together
              to achieve common goals and drive innovation across all levels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div
            ref={titleRef}
            className={`transition-all duration-500 ${isTitleVisible
                ? "animate-slide-up-fast opacity-100"
                : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">Our Values</h2>
            <hr className="w-12 sm:w-16 mx-auto mb-3 border-t-2 border-red-500" />
          </div>
          <div
            ref={subtitleRef}
            className={`transition-all duration-500 ${isSubtitleVisible
                ? "animate-slide-up-fast opacity-100"
                : "opacity-0 translate-y-10"
              }`}
          >
            <p className="text-center text-gray-600 mb-10">
              Our integrity ensures our credibility and results. Honor your
              commitments and take ownership of your actions. Our words and
              deeds are true and reliable.
            </p>
          </div>
          <div
            ref={valuesRef1}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
            gap-4 sm:gap-6 transition-all duration-500 ${isValuesVisible1 ? "animate-slide-up-fast" : "slide-up-hidden"
              }`}
          >
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Caring.svg"
                    alt="Empathy First"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Caring above all else
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our foundation is built on a culture of helping each other out
                  and genuinely caring about one another and the work we do. We
                  are one team with one dream with advanced skills.{" "}
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Customer-is-business.svg"
                    alt="Client Focus"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Customer is the business
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Customers are the center of our universe. We built this
                  business to service their needs. As a team, we&apos;re winning when
                  they are winning. We&apos;re happy when they are happy.
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Think-big.svg"
                    alt="Innovate Boldly"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Think BIG and start small
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We think big, and believe that anything is possible. We know
                  success is found in the steps along the way and encourage big,
                  audacious thinking but a process-oriented approach to get
                  there.
                </p>
              </CardContent>
            </Card>
          </div>
          <div
            ref={valuesRef2}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-4 sm:gap-6 transition-all duration-500 ${isValuesVisible2 ? "animate-slide-up-fast" : "slide-up-hidden"
              }`}
          >
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Chase-Excellence.svg"
                    alt="Pursue Mastery"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Chase excellence
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Exceptional results require exceptional thinking and effort.
                  We push ourselves and each other to make incredible things
                  happen.
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Outcomes.svg"
                    alt="Impact Over Effort"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Outcomes, not outputs
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We focus on what we do best to increase inputs, not outputs,
                  for success. By focusing our efforts on high leverage actions
                  and strengths, we can achieve optimal results.
                </p>
              </CardContent>
            </Card>
            <Card className="border-pink-300 p-3 sm:p-4 md:p-5 text-center">
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <Image
                    src="/Enjoy-the-ride.svg"
                    alt="Celebrate Joy"
                    width={40}
                    height={40}
                    className="object-contain sm:w-12 sm:h-12"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
                  Enjoy the ride
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We enjoy our work, and we have fun doing it. Life is too short
                  to not have fun. We take pride in making sure we laugh along
                  the way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-20 px-5">
        <div
          ref={lastref}
          className={`max-w-7xl mx-auto flex flex-col
             md:flex-row items-center gap-10 transition-all duration-500 ${isLastVisible ? "animate-slide-up-fast" : "slide-up-hidden"
            }`}
        >
          <div className="w-full md:w-1/2 text-left">

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">How WeCare RCM Help Practice's Grow</h3>

            <p className="text-gray-600 text-base sm:text-lg">
              By optimizing revenue cycles, practices gain financial strength, fueling investments in better
              patient care and expanded services. A focus on efficient billing and reduced errors frees up staff,
              allowing them to concentrate on patient acquisition and enhanced experiences, driving sustainable growth.
            </p>
            <hr className="w-12 sm:w-16 h-1 mt-3 bg-pink-600 mb-4 sm:mb-6" />
            <ul className="list-none text-base sm:text-lg mt-4 sm:mt-6 space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✔</span> Dedicated account manager for each account
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✔</span> On-staff experts in billing, coding, credentialing and A/R
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✔</span> Clear and concise reporting platform
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✔</span> 24/7 uptime and support
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✔</span> HIPAA-compliant and certified team of experts
              </li>
            </ul>
            <Link href="/get-started" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4 sm:mt-6 bg-white text-blue-600 border-2 border-blue-600 
  px-4 sm:px-6 md:px-7 py-3 sm:py-4 rounded-full hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base">
                Get Started Today - No Signup Charges <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="w-full md:w-1/2 bg-white rounded-[40px] p-4 sm:p-6 md:p-10 relative flex items-center justify-center md:justify-end">

            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src="/illustrations-.png"
                alt="Growth Report"
                width={550}
                height={400}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        </div>

      </section>


    </>
  );
}
export default AboutPage;

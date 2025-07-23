import React from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

function SolutionsAndServices() {
  return (
    <div className="min-h-screen bg-white">
      <section>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-6">
            Centric Solutions & Services
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Unlock explosive revenue growth and empower your practice with
            accurate claim processing. Connect with our team to learn how honest
            and reliable medical claims solutions can help your business
            succeed.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Medical Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto mb-4  transition-colors">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/bill.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Offering End-To-End medical billing from demo entry to payment
                  posting, with advanced monthly or weekly reporting so you can
                  notice what's going on.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Medical Coding Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer group border-none">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/coding.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  MEDICAL CODING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Outsourcing your medical coding services to expert coders at
                  RCM Centric enables you to optimize your revenue while
                  reducing compliance risks.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 border-none group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* DME / Ambulatory Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all duration-300 border-none cursor-pointer group">
              <CardContent className="p-6 text-center">
                 <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/wheelchair.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3  transition-colors">
                  DME / AMBULATORY BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Forget your worries at leading DME billing, and you can boost
                  your revenue by using our 24/7 durable medical equipment (DME)
                  Billing and Coding experts.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Hospital Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/hospital.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  HOSPITAL BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Working with RCM Centric, you enjoy the long-term benefits of
                  our revenue cycle specialists providing efficient billing
                  services to hospitals.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Practice Audit Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
               <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/practiceaudit.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PRACTICE AUDIT SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Want smooth practice? Our billing and coding experts will
                  initiate an audit for you to find billing issues and update
                  your practice with the latest tech.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Credentialing & Enrollment */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/diploma.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  CREDENTIALING & ENROLLMENT
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Our experienced team manages the credentialing process, which
                  helps you navigate the process of provider enrollment and
                  credentialing with insurance.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Telehealth Billing Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/registration.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  TELEHEALTH BILLING SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  Connect with your patient easily and get an automated billing
                  solution. We help providers to connect with patients virtually
                  with integrated technology.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Patient Help Desk Services */}
            <Card className="bg-white hover:bg-blue-600 hover:shadow-lg transition-all border-none duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mx-auto   transition-colors">
                    <img
                      src="/information-desk.png"
                      alt="Telehealth Billing Icon"
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-3 transition-colors">
                  PATIENT HELP DESK SERVICES
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm mb-4 leading-relaxed transition-colors">
                  RCM Centric provides dedicated help desk services for
                  hospitals, medical centers, health clinics, and private
                  doctor's practices throughout the United States.
                </p>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-600 group-hover:bg-white group-hover:text-blue-600 group-hover:border-white bg-transparent transition-colors"
                >
                  Explore <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsAndServices;

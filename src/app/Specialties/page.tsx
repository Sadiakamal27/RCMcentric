"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Stethoscope,
  Users,
  Brain,
} from "lucide-react";

export default function SpecialtiesPage() {
  const primaryCareSpecialties = [
    "Family Medicine",
    "Internal Medicine",
    "Pediatrics",
    "Geriatrics",
    "General Practice",
    "Primary Care",
  ];

  const dentistrySpecialties = [
    "Orthodontics",
    "Periodontics",
    "Endodontics",
    "Prosthodontics",
    "Pediatric Dentistry",
    "Oral and Maxillofacial Surgery",
    "Cosmetic Dentistry",
  ];

  const therapySpecialties = [
    "Physical Therapy",
    "Occupational Therapy",
    "Speech-Language Pathology",
    "Respiratory Therapy",
    "Recreational Therapy",
    "Radiation Therapy",
    "Psychotherapy",
    "Music Therapy",
    "Massage Therapy",
    "Aroma Therapy",
    "Cognitive Behavioral Therapy",
    "Dance/Movement Therapy",
  ];

  const mentalHealthSpecialties = [
    "Clinical Psychology",
    "Psychiatry",
    "Child and Adolescent Psychiatry",
    "Geriatric Psychiatry",
    "Addiction Psychiatry",
    "Forensic Psychiatry",
    "Psychosomatic Medicine",
    "Neuropsychology",
    "Health Psychology",
    "School Psychology",
    "Counseling Psychology",
    "Marriage and Family Therapy",
    "Social Work",
  ];

  const allSpecialties = [
    "Acupuncture",
    "Administrative Psychiatry",
    "Adolescent Medicine",
    "Aerospace Medicine",
    "Allergy / Immunology",
    "Anatomical Pathology",
    "Anesthesia",
    "Biochemical Genetics",
    "Brain Injury Medicine",
    "Breast Imaging",
    "Cardiology & EP",
    "Cardiothoracic Radiology",
    "Cardiovascular Disease",
    "Cardiovascular Radiology",
    "Certified Clinical Nurse Specialist",
    "Chemical Pathology",
    "Chest Radiology",
    "Child & Adolescent Psychiatry",
    "Child Abuse Pediatrics",
    "Chiropractor",
    "Clinical Cardiac Electrophysiology",
    "Clinical Cytogenetics",
    "Clinical Genetics",
    "Clinical Neuropsychologist",
    "Colon & Rectal Surgery",
    "Community Psychiatry",
    "Congenital Cardiac Surgery",
    "Consultation/Liaison Psychiatry",
    "Counseling",
    "Craniofacial Surgery",
    "Critical Care Medicine",
    "CRNA",
    "Dentist / Dentistry",
    "Dermatology",
    "Dermatopathology",
    "Diagnostic Radiology",
    "Dietitian",
    "Durable Medical Equipment (DME)",
    "Ear, Nose & Throat (ENT)",
    "Electrophysiology",
    "Emergency Medicine",
    "Emergency Psychiatry",
    "Emergency Radiology",
    "Family Practice",
    "Female Urology",
    "Foot & Ankle Orthopedics",
    "Forensic Pathology",
    "Gastroenterology",
    "General Physician",
    "General Surgery",
    "Genetic Pathology",
    "Genitourinary Radiology",
    "Geriatric Medicine",
    "Geriatric Psychiatry",
    "Glaucoma Ophthalmology",
    "Gynecologic Oncology",
    "Head & Neck Radiology",
    "Hematology & Oncology",
    "Hospice & Palliative Care",
    "Hospitals General Acute",
    "Infectious Disease",
    "Interventional Cardiology",
    "Maternal-Fetal Medicine",
    "Medical Genetics",
    "Medical Microbiology",
    "Neuropsychiatry",
    "Nurse Practitioner",
    "Obstetrics & Gynecology",
    "Occupational Medicine",
    "Oral & Maxillofacial Surgery",
    "Orthopedic Surgery",
    "Pain Management",
    "Pediatric Anesthesiology",
    "Physician Assistant",
    "Plastic Surgery",
  ];

  const renderSpecialtyList = (specialties: string[]) => (
    <div className="space-y-2">
      {specialties.map((specialty, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <span className="text-gray-700 text-base sm:text-lg">{specialty}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute bg-blue-50 inset-0">
          {/* Background Image */}
          <img
            src="/main-shield-with-rcm-logo-1024x585.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          {/* Circles */}
          <div className="absolute top-20 left-20 w-40 h-40 border border-gray-300 rounded-full opacity-10 hidden sm:block"></div>
          <div className="absolute top-40 right-40 w-32 h-32 border border-gray-300 rounded-full opacity-10 hidden sm:block"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-gray-300 rounded-full opacity-10 hidden sm:block"></div>
          <div className="absolute bottom-32 right-20 w-28 h-28 border border-gray-300 rounded-full opacity-10 hidden sm:block"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            An all-encompassing practice
            <br className="hidden sm:block" />
            solution tailored for each specialty.
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            WeCare RCM provides streamlined decision-making across every
            medical specialty, delivering all the necessary information from
            charge entry to payments right when you need it, without the hassle
            of juggling reports.
          </p>
        </div>
      </section>

      {/* Primary Care & Dentistry Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Primary Care Specialties */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Primary Care Specialties
                </h2>
              </div>
              {renderSpecialtyList(primaryCareSpecialties)}
            </div>

            {/* Dentistry Specialties */}
            <div className="space-y-6 mt-10 md:mt-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Dentistry Specialties
                </h2>
              </div>
              {renderSpecialtyList(dentistrySpecialties)}
            </div>
          </div>
        </div>
      </section>

      {/* Therapy & Mental Health Section */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Therapy Specialties */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Therapy Specialties
                </h2>
              </div>
              {renderSpecialtyList(therapySpecialties)}
            </div>

            {/* Mental Health Specialties */}
            <div className="space-y-6 mt-10 md:mt-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Mental Health Specialties
                </h2>
              </div>
              {renderSpecialtyList(mentalHealthSpecialties)}
            </div>
          </div>
        </div>
      </section>

      {/* All Medical Specialties Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-start mb-8 sm:mb-12">
            {/* Icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src="/coding.png"
                alt="Medical Icon"
                width={500}      // ✅ set an appropriate width
                height={500}     // ✅ set an appropriate height
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-left text-gray-800 mb-2 sm:mb-4">
                All Medical Specialties
              </h2>
            </div>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {allSpecialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 p-0 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-700 text-base sm:text-lg">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-20 bg-blue-100 ">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 mb-10 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Looking For Your Specialty?
              </h2>
              <div className="w-24 h-1 bg-red-500"></div>
              <p className="text-base sm:text-lg text-gray-600">
                WeCare RCM is designed to enhance care delivery for independent
                practices of all specialties. If you don't find your specialty
                mentioned, please reach out to us to discover how we can assist
                you.
              </p>
              <Link href="/ContactUs" target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-600 hover:bg-blue-500 rounded-full text-white px-8 py-3 w-full sm:w-auto">
                  Contact us
                </Button>
              </Link>
            </div>

            {/* Right Content - Illustration */}
            <div className="w-full flex justify-center">
              <div className="w-48 h-48 sm:w-80 sm:h-80">
                <img
                  src="/female-doctor-on-using-laptop-25 (1).svg"
                  alt="Doctor"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Engage WeCare RCM For Your Specialty Billing Needs
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Our expanded business and team of experts are now working with 40+
            states and providing professional medical billing, coding,
            credentialing, RCM solution, patient help desk, insurance coverage
            and customized solution to our valuable clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/TalktoSales" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto"
              >
                Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/Pricing" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-white border-2 rounded-full border-blue-600 text-blue-600 hover:bg-red-500 hover:border-red-500 hover:text-white px-8 py-3 w-full sm:w-auto"
              >
                See Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

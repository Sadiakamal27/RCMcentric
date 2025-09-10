// components/SolutionsSection.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import ReCaptcha from "react-google-recaptcha";
import { Loader2 } from "lucide-react";

type RecaptchaValue = string | null;

interface SolutionsSectionProps {
  buttonText?: string;
  buttonClassName?: string;
  showDropdown?: boolean;
  selectClassName?: string;
}

export default function SolutionsSection({


  buttonText = "Get Solution →",
  buttonClassName = "text-white bg-blue-500 hover:bg-white hover:text-blue-700 ",
  showDropdown = true,
  selectClassName = "border text-gray-500",
}: SolutionsSectionProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<RecaptchaValue>(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRecaptchaChange = (value: RecaptchaValue) => {
    setRecaptchaValue(value);
  };

  // add inside your component (before return)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true); // ✅ show loader immediately

    const form = e.currentTarget;
    const formData = new FormData(form);

    const email =
      (formData.get("email") as string) ||
      (formData.get("workEmail") as string) ||
      null;

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          formName: "Solutions Form", // ✅ static name
        }),
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ Form submitted successfully!");
        form.reset();
        setRecaptchaValue(null);
        setIsOpen(false);
      } else {
        alert("❌ Submission failed: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    }
    
    finally {
      // ✅ stop loading AFTER popup has been shown
      setIsSubmitting(false)
    }
  }



  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {showDropdown && (
          <Select
            onValueChange={(value) => setSelectedSpecialty(value)}
            value={selectedSpecialty}
            required
          >
            <SelectTrigger
              className={`bg-white w-full rounded-none  
                outline-none focus:outline-none focus:ring-0 focus:ring-offset-0
                ${selectClassName}`}
            >
              <SelectValue placeholder="Select Your Specialty" />
            </SelectTrigger>
            <SelectContent className="bg-white max-h-60 overflow-y-auto custom-scrollbar !p-0 !m-0">
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                <SelectItem value="abdominal-radiology">Abdominal Radiology</SelectItem>
                <SelectItem value="acupuncture">Acupuncture</SelectItem>
                <SelectItem value="addiction-psychiatry">Addiction Psychiatry</SelectItem>
                <SelectItem value="administrative-psychiatry">Administrative Psychiatry</SelectItem>
                <SelectItem value="adolescent-medicine">Adolescent Medicine</SelectItem>
                <SelectItem value="adult-reconstructive-orthopaedics">Adult Reconstructive Orthopaedics</SelectItem>
                <SelectItem value="advanced-heart-failure-cardiology">Advanced Heart Failure & Transplant Cardiology</SelectItem>
                <SelectItem value="aerospace-medicine">Aerospace Medicine</SelectItem>
                <SelectItem value="allergy-immunology">Allergy / Immunology</SelectItem>
                <SelectItem value="anatomical-pathology">Anatomical Pathology</SelectItem>
                <SelectItem value="anesthesia">Anesthesia</SelectItem>
                <SelectItem value="anesthesiology-critical-care">Anesthesiology Critical Care Medicine</SelectItem>
                <SelectItem value="anterior-segment-ophthalmology">Anterior Segment/Cornea Ophthalmology</SelectItem>
                <SelectItem value="audiologist">Audiologist</SelectItem>
                <SelectItem value="biochemical-genetics">Biochemical Genetics</SelectItem>
                <SelectItem value="blood-banking-transfusion">Blood Banking & Transfusion Medicine</SelectItem>
                <SelectItem value="brain-injury-medicine">Brain Injury Medicine</SelectItem>
                <SelectItem value="breast-imaging">Breast Imaging</SelectItem>
                <SelectItem value="calculi">Calculi</SelectItem>
                <SelectItem value="cardiology-ep">Cardiology & EP</SelectItem>
                <SelectItem value="cardiothoracic-radiology">Cardiothoracic Radiology</SelectItem>
                <SelectItem value="cardiovascular-disease">Cardiovascular Disease</SelectItem>
                <SelectItem value="cardiovascular-radiology">Cardiovascular Radiology</SelectItem>
                <SelectItem value="certified-clinical-nurse">Certified Clinical Nurse Specialist</SelectItem>
                <SelectItem value="chemical-pathology">Chemical Pathology</SelectItem>
                <SelectItem value="chest-radiology">Chest Radiology</SelectItem>
                <SelectItem value="child-abuse-pediatrics">Child Abuse Pediatrics</SelectItem>
                <SelectItem value="child-adolescent-psychiatry">Child & Adolescent Psychiatry</SelectItem>
                <SelectItem value="child-neurology">Child Neurology</SelectItem>
                <SelectItem value="chiropractor">Chiropractor</SelectItem>
                <SelectItem value="clinical-cardiac-electrophysiology">Clinical Cardiac Electrophysiology</SelectItem>
                <SelectItem value="clinical-cytogenetics">Clinical Cytogenetics</SelectItem>
                <SelectItem value="clinical-genetics">Clinical Genetics</SelectItem>
                <SelectItem value="clinical-neuropsychologist">Clinical Neuropsychologist</SelectItem>
                <SelectItem value="clinical-psychologist">Clinical Psychologist</SelectItem>
                <SelectItem value="colon-rectal-surgery">Colon & Rectal Surgery</SelectItem>
                <SelectItem value="community-psychiatry">Community Psychiatry</SelectItem>
                <SelectItem value="congenital-cardiac-surgery">Congenital Cardiac Surgery</SelectItem>
                <SelectItem value="consultation-liaison-psychiatry">Consultation/Liaison Psychiatry</SelectItem>
                <SelectItem value="counseling">Counseling</SelectItem>
                <SelectItem value="craniofacial-surgery">Craniofacial Surgery</SelectItem>
                <SelectItem value="critical-care-medicine">Critical Care Medicine</SelectItem>
                <SelectItem value="crna">CRNA</SelectItem>
                <SelectItem value="cytopathology">Cytopathology</SelectItem>
                <SelectItem value="dentistry">Dentist / Dentistry</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="dermatopathology">Dermatopathology</SelectItem>
                <SelectItem value="developmental-behavioral-pediatrics">Developmental-Behavioral Pediatrics</SelectItem>
                <SelectItem value="diagnostic-radiology">Diagnostic Radiology</SelectItem>
                <SelectItem value="dietitian">Dietitian</SelectItem>
                <SelectItem value="dme">Durable Medical Equipment (DME)</SelectItem>
                <SelectItem value="ent">Ear, Nose & Throat (ENT)</SelectItem>
                <SelectItem value="electrophysiology">Electrophysiology</SelectItem>
                <SelectItem value="emergency-medicine">Emergency Medicine</SelectItem>
                <SelectItem value="emergency-psychiatry">Emergency Psychiatry</SelectItem>
                <SelectItem value="emergency-radiology">Emergency Radiology</SelectItem>
                <SelectItem value="endocrinology">Endocrinology, Diabetes, & Metabolism</SelectItem>
                <SelectItem value="endovascular-surgical-neuroradiology">Endovascular Surgical Neuroradiology</SelectItem>
                <SelectItem value="family-medicine">Family Medicine</SelectItem>
                <SelectItem value="family-practice">Family Practice</SelectItem>
                <SelectItem value="female-pelvic-medicine">Female Pelvic Medicine & Reconstructive Surgery</SelectItem>
                <SelectItem value="female-urology">Female Urology</SelectItem>
                <SelectItem value="foot-ankle-orthopaedics">Foot & Ankle Orthopaedics</SelectItem>
                <SelectItem value="forensic-pathology">Forensic Pathology</SelectItem>
                <SelectItem value="forensic-psychiatry">Forensic Psychiatry</SelectItem>
                <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                <SelectItem value="gastrointestinal-radiology">Gastrointestinal Radiology</SelectItem>
                <SelectItem value="general-practice">General Practice</SelectItem>
                <SelectItem value="general-surgery">General Surgery</SelectItem>
                <SelectItem value="genetic-pathology">Genetic Pathology</SelectItem>
                <SelectItem value="genitourinary-radiology">Genitourinary Radiology</SelectItem>
                <SelectItem value="geriatric-medicine">Geriatric Medicine</SelectItem>
                <SelectItem value="geriatric-psychiatry">Geriatric Psychiatry</SelectItem>
                <SelectItem value="glaucoma-ophthalmology">Glaucoma Ophthalmology</SelectItem>
                <SelectItem value="gynecologic-oncology">Gynecologic Oncology</SelectItem>
                <SelectItem value="hs-surgery">H&S Surgery</SelectItem>
                <SelectItem value="head-neck-radiology">Head & Neck Radiology</SelectItem>
                <SelectItem value="hematology-oncology">Hematology & Oncology</SelectItem>
                <SelectItem value="hospice-palliative-care">Hospice & Palliative Care</SelectItem>
                <SelectItem value="hospitals-general-acute">Hospitals General Acute</SelectItem>
                <SelectItem value="immunopathology">Immunopathology</SelectItem>
                <SelectItem value="infectious-disease">Infectious Disease</SelectItem>
                <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                <SelectItem value="interventional-cardiology">Interventional Cardiology</SelectItem>
                <SelectItem value="interventional-radiology">Interventional Radiology</SelectItem>
                <SelectItem value="male-infertility">Male Infertility</SelectItem>
                <SelectItem value="maternal-fetal-medicine">Maternal-Fetal Medicine</SelectItem>
                <SelectItem value="medical-genetics">Medical Genetics</SelectItem>
                <SelectItem value="medical-microbiology">Medical Microbiology</SelectItem>
                <SelectItem value="medical-toxicology">Medical Toxicology</SelectItem>
                <SelectItem value="mental-health">Mental Health</SelectItem>
                <SelectItem value="mental-retardation-psychiatry">Mental Retardation Psychiatry</SelectItem>
                <SelectItem value="military-psychiatry">Military Psychiatry</SelectItem>
                <SelectItem value="molecular-genetic-pathology">Molecular Genetic Pathology</SelectItem>
                <SelectItem value="molecular-pathology">Molecular Pathology</SelectItem>
                <SelectItem value="multiple-specialty">Multiple Specialty</SelectItem>
                <SelectItem value="musculoskeletal-oncology">Musculoskeletal Oncology</SelectItem>
                <SelectItem value="musculoskeletal-radiology">Musculoskeletal Radiology</SelectItem>
                <SelectItem value="naturopath">Naturopath</SelectItem>
                <SelectItem value="neonatal-perinatal-medicine">Neonatal-Perinatal Medicine</SelectItem>
                <SelectItem value="nephrology">Nephrology</SelectItem>
                <SelectItem value="neurodevelopmental-disabilities">Neurodevelopmental Disabilities</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="neuromuscular-medicine">Neuromuscular Medicine</SelectItem>
                <SelectItem value="neuro-ophthalmology">Neuro-Ophthalmology</SelectItem>
                <SelectItem value="neuropathology">Neuropathology</SelectItem>
                <SelectItem value="neuropsychiatry">Neuropsychiatry</SelectItem>
                <SelectItem value="neuroradiology">Neuroradiology</SelectItem>
                <SelectItem value="neurosurgery">Neurosurgery</SelectItem>
                <SelectItem value="neurourology">Neurourology</SelectItem>
                <SelectItem value="nuclear-medicine">Nuclear Medicine</SelectItem>
                <SelectItem value="nuclear-radiology">Nuclear Radiology</SelectItem>
                <SelectItem value="nurse-practitioner">Nurse Practitioner</SelectItem>
                <SelectItem value="obgyn">OB-GYN</SelectItem>
                <SelectItem value="obstetrics-gynecology">Obstetrics & Gynecology</SelectItem>
                <SelectItem value="occupational-medicine">Occupational Medicine</SelectItem>
                <SelectItem value="occupational-therapy">Occupational Therapy</SelectItem>
                <SelectItem value="ocular-oncology">Ocular Oncology</SelectItem>
                <SelectItem value="oculoplastics-orbit">Oculoplastics/Orbit</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="ophthalmic-plastic-surgery">Ophthalmic Plastic & Reconstructive Surgery</SelectItem>
                <SelectItem value="ophthalmic-surgery">Ophthalmic Surgery</SelectItem>
                <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                <SelectItem value="optometrist">Optometrist</SelectItem>
                <SelectItem value="oral-maxillofacial-surgery">Oral & Maxillofacial Surgery</SelectItem>
                <SelectItem value="orthopaedic-sports-medicine">Orthopaedic Sports Medicine</SelectItem>
                <SelectItem value="orthopaedic-surgery">Orthopaedic Surgery</SelectItem>
                <SelectItem value="orthopaedic-trauma">Orthopaedic Trauma</SelectItem>
                <SelectItem value="orthopedic-surgery">Orthopedic Surgery</SelectItem>
              </div>
            </SelectContent>
          </Select>
        )}

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className={`w-full sm:w-56 rounded-none px-4 ${buttonClassName}`}
            >
              {buttonText}
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="max-w-md w-full p-0">
            {/* Accessible description for screen readers */}
            <p id="sheet-description" className="sr-only">
              Please fill this form to connect with an expert within 24 hours.
            </p>
            <div className="flex flex-col h-full bg-white rounded-xl m-1 shadow-lg"
              aria-describedby="sheet-description">

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-9 space-y-4">
                <div className="flex justify-center">
                  <img
                    src="/wcformlogo.png"
                    alt="Logo"
                    className="h-10 w-28 sm:h-12 sm:w-36 md:h-15 md:w-40 mb-2 object-contain"
                  />
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-center">
                    Get Solution in 24 Hours
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-500 text-center">
                    Please tell us more about your business and get connected with an expert.
                  </p>

                  {/* Form */}
                  <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Full Name *"
    className="w-full border border-gray-200 px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base"
  />
  <input
    type="tel"
    placeholder="Phone Number *"
    className="w-full border border-gray-200 px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base"
  />
  <input
    type="email"
    name="email"   // ✅ add this so we can extract
    placeholder="Work Email *"
    required
    className="w-full border border-gray-200 px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base"
  />
  <input
    type="text"
    placeholder="Practice Name *"
    className="w-full border border-gray-200 px-3 py-2 sm:py-2.5 rounded text-sm sm:text-base"
  />
  <textarea
    placeholder="Enter your message here (Optional)"
    className="w-full border border-gray-200 px-3 py-2 sm:py-3 rounded text-sm sm:text-base"
  ></textarea>

  {/* reCAPTCHA widget */}
  <div className="flex justify-center my-2">
    <ReCaptcha
      sitekey="6LdktL8rAAAAAL9lgn24ViVPUHOaUPfD_qufGxiG"
      onChange={handleRecaptchaChange}
    />
  </div>

  {/* Sticky Button inside form */}
  <div className="p-4 sm:p-6 border-t bg-white">
    <Button
      type="submit"
      className="w-full text-white bg-blue-600 hover:bg-blue-700 text-sm sm:text-base py-2 sm:py-3"
      disabled={!recaptchaValue || isSubmitting} // ✅ enable only when captcha ok
      
    >
      {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Connecting...
                </>
              ) : (
                " Connect Now"
              )}
    </Button>
  </div>
</form>

                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

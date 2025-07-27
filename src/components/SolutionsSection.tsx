// components/SolutionsSection.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import ReCaptcha from "react-google-recaptcha";

type RecaptchaValue = string | null;

interface SolutionsSectionProps {
  buttonText?: string; // optional prop with default fallback
}

export default function SolutionsSection({ buttonText = "Get Solution →" }: SolutionsSectionProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<RecaptchaValue>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!selectedSpecialty) {
      e.preventDefault();
      alert("Please select a specialty first.");
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };

  const handleRecaptchaChange = (value: RecaptchaValue) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        {/* Specialty Select */}
        <Select onValueChange={(value) => setSelectedSpecialty(value)}>
          <SelectTrigger className="bg-white text-gray-500 w-full rounded-none border-0">
            <SelectValue placeholder="Select Your Specialty" />
          </SelectTrigger>
          <SelectContent className="bg-white max-h-58 overflow-y-auto">
            <SelectItem value="cardiology">Cardiology</SelectItem>
            <SelectItem value="dermatology">Dermatology</SelectItem>
            <SelectItem value="orthopedics">Orthopedics</SelectItem>
            <SelectItem value="psychiatry">Psychiatry</SelectItem>
            <SelectItem value="primary-care">Primary Care</SelectItem>
          </SelectContent>
        </Select>

        {/* Get Solution Button */}
        <Button
          className="bg-red-500 hover:bg-red-600 w-full sm:w-56 rounded-none text-white px-4"
          onClick={handleClick}
        >
          {buttonText}
        </Button>

        {/* Sheet Form */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="max-w-md p-0 w-full">
            <div className="p-5 sm:p-9 space-y-4 bg-white rounded-xl m-1 shadow-lg">
              <div className="flex justify-center">
                <img
                  src="/formlogo.jpg"
                  alt="Logo"
                  className="h-12 w-32 sm:h-15 sm:w-40 mb-2 object-contain"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-bold text-center">
                  Get Solution in 24 Hours
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  Please tell us more about your business and get connected with an expert.
                </p>
                <form className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="w-full border border-gray-200 p-2 rounded text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    className="w-full border border-gray-200 p-2 rounded text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Work Email *"
                    className="w-full border border-gray-200 p-2 rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Practice Name *"
                    className="w-full border border-gray-200 p-2 rounded text-sm"
                  />
                  <textarea
                    placeholder="Enter your message here (Optional)"
                    className="w-full border border-gray-200 p-3 sm:p-4 rounded text-sm"
                  ></textarea>

                  {/* reCAPTCHA widget */}
                  <div className="flex justify-center my-2">
                    <ReCaptcha
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      onChange={handleRecaptchaChange}
                    />
                  </div>
                  <Button type="submit" className="w-full text-white bg-blue-600" disabled={!recaptchaValue}>
                    Connect Now
                  </Button>
                </form>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

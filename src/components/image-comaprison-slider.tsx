"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageComparisonSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageComparisonSlider({
  beforeImage = "/w_rcm.jpg",
  afterImage = "/with_rcm.jpg",
  beforeLabel = "Before",
  afterLabel = "After",
}: ImageComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const getValidImageSrc = (src: string) => {
    if (!src) return "/default-placeholder.jpg";
    if (src.startsWith("http") || src.startsWith("https")) {
      return src;
    }
    return src.startsWith("/") ? src : `/${src}`; // Ensure single leading slash
  };

  const validBeforeImage = getValidImageSrc(beforeImage);
  const validAfterImage = getValidImageSrc(afterImage);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[95vw] sm:max-w-[600px] h-40 sm:h-[100px] md:h-[180px] lg:h-[220px] xl:h-[320px] items-center overflow-hidden rounded-lg cursor-col-resize select-none mx-auto"
      style={{ maxWidth: "600px" }}
    >
      {/* After Image (Right side - With RCM) */}
      <div className="absolute inset-1 flex items-center justify-center">
        <Image
          src={validAfterImage}
          alt={afterLabel}
          width={600}
          height={320}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Before Image (Left side - Without RCM) */}
      <div
        className="absolute inset-0 overflow-hidden flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={validBeforeImage}
          alt={beforeLabel}
          width={600}
          height={320}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Slider Handle - Custom Design */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-blue-600 cursor-col-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute w-4 h-12 bg-blue-600 rounded-sm transform -translate-x-1/3 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-1 h-4 bg-white absolute left-1/2 transform -translate-x-1/3"></div>
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-b-[8px] border-b-blue-600 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-l-transparent border-r-transparent border-t-[8px] border-t-blue-600 absolute bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}
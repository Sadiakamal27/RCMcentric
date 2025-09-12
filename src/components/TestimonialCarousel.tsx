'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "WeCare RCM's level of professionalism has left an excellent impression. Our group was lucky to have found them, and they rescued us from the outdated service of our former biller.",
    name: "Charla Evans, D.O.",
    title: "Family Medicine Physician",
    image: "/provider.jpg"
  },
  {
    id: 2,
    quote: "The credentialing process was seamless and efficient. WeCare RCM handled everything professionally and got us enrolled much faster than we expected.",
    name: "Dr. Michael Rodriguez",
    title: "Cardiologist",
    image: "/provider.jpg"
  },
  {
    id: 3,
    quote: "Outstanding service and attention to detail. Their team made the complex credentialing process simple and stress-free for our practice.",
    name: "Dr. Sarah Johnson",
    title: "Internal Medicine",
    image: "/provider.jpg"
  },
  {
    id: 4,
    quote: "WeCare RCM's expertise in medical credentialing saved us countless hours and headaches. Highly recommend their services to any healthcare provider.",
    name: "Dr. Robert Chen",
    title: "Pediatrician",
    image: "/provider.jpg"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-26">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-4">
            What Our Clients Saying
          </h2>
          <hr className="w-16 h-0.5 bg-red-500 mx-auto" />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
                style={{ minWidth: '100%' }}
              >
                <div className="text-center">
                  {/* Quote */}
                  <div className="mb-8">
                    <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="flex flex-col items-center">
                    <h4 className="text-blue-600 font-bold text-lg mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {testimonial.title}
                    </p>
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialCarousel; 
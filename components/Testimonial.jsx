// app/components/Testimonial.tsx (Next.js 13+ App Router)
// or in pages/components/Testimonial.tsx for Pages Router

"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Saif",
    role: "CEO/Company",
    image: "/actor.png", // replace with actual image path in /public folder
    text: `With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.`,
  },
  // You can add more testimonials here
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#4C2A1B] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">What our clients are saying</h2>
        <p className="text-sm text-gray-300 max-w-2xl mb-10">
          Our clients range from individual investors, to local, international
          as well as fortune 500 companies.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src={testimonials[index].image}
              alt={testimonials[index].name}
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-lg italic mb-6">"{testimonials[index].text}"</p>
            <h3 className="font-bold">{testimonials[index].name}</h3>
            <p className="text-sm text-gray-300">{testimonials[index].role}</p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-[#5C3B2C] hover:bg-[#6D4B3B] transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white text-[#4C2A1B] hover:bg-gray-200 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

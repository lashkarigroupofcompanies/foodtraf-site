"use client";

import React from "react";
import Image from "next/image";

export default function Results() {
  const targets = [
    {
      value: "2×",
      label: "Goal: repeat visits per guest",
    },
    {
      value: "30+",
      label: "Goal: returning guests in the first 21 days",
    },
    {
      value: "0",
      label: "Extra staff needed",
    },
    {
      value: "1 day",
      label: "Typical setup time",
    },
  ];

  return (
    <section id="results" className="relative bg-[#6B0F1A] text-[#F5F0E8] py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 right-8 sm:right-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        006
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-3">
              006 / THE RESULT
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] text-[#F5F0E8] tracking-tight">
              What success looks like.
            </h2>
          </div>

          {/* Mandatory Explicit Disclaimer */}
          <div className="inline-block border border-gold/40 px-3 py-1.5 self-start md:self-end">
            <span className="font-sans text-[10px] tracking-mega text-gold uppercase font-bold">
              PILOT TARGETS: NOT GUARANTEES
            </span>
          </div>
        </div>

        {/* Count-Up / Big Numbers in Gold Serif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 border-t border-b border-gold/30 py-12">
          {targets.map((target, idx) => (
            <div key={idx} className="space-y-2">
              <div className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-gold tracking-tight">
                {target.value}
              </div>
              <p className="font-sans text-sm sm:text-base text-[#F5F0E8]/85 font-light leading-snug">
                {target.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Placeholder Block Ready to Swap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-maroon-deep/70 border border-gold/25 p-8 sm:p-12">
          {/* Photo Slot */}
          <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden bg-black/40">
            <Image
              src="/images/foodtraf/happy-guests.jpg"
              alt="Pilot hospitality guests"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-90 editorial-img"
            />
            <div className="absolute inset-0 bg-maroon/20 pointer-events-none" />
            <div className="absolute bottom-3 left-3 font-sans text-[9px] tracking-widest text-gold uppercase bg-black/60 px-2 py-0.5">
              Pilot Cohort
            </div>
          </div>

          {/* Text / Quote Placeholder */}
          <div className="lg:col-span-7 space-y-4">
            <div className="font-sans text-xs tracking-mega uppercase text-gold font-semibold">
              Live Field Testing
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F0E8] font-normal italic">
              &ldquo;Pilot stories coming soon.&rdquo;
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#F5F0E8]/75 leading-relaxed">
              We are currently running active 21-day pilots with selected restaurants, cafes, and hospitality venues. Verified case studies and partner interviews will be published upon cohort completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

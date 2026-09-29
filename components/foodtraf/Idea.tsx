"use client";

import React from "react";
import Image from "next/image";

export default function Idea() {
  const pillars = [
    {
      title: "PLAYFUL",
      description: "Guests enjoy it. It never feels like a coupon.",
    },
    {
      title: "EFFORTLESS",
      description: "No app to download. No staff training burden.",
    },
    {
      title: "MEASURABLE",
      description: "Owners see the return, not just the promise.",
    },
  ];

  return (
    <section id="idea" className="relative bg-[#6B0F1A] text-[#F5F0E8] py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 left-8 sm:left-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        003
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Narrative, Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {/* Label */}
            <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold">
              003 / THE IDEA
            </div>

            {/* Huge Heading */}
            <h2 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.02] text-[#F5F0E8] tracking-tight">
              Make coming back <br />
              <span className="italic font-bold text-gold">the best part of the meal.</span>
            </h2>

            {/* Body */}
            <p className="font-sans text-lg sm:text-xl text-[#F5F0E8]/85 leading-relaxed max-w-xl">
              The Footfall Engine gives every guest a small, delightful reason to return, and gives every owner a steady flow of repeat customers. We set it up. We run it. The restaurant simply says yes.
            </p>

            {/* Three Pillars (No boxes, thin gold dividers) */}
            <div className="pt-8 space-y-8">
              {pillars.map((pillar, idx) => (
                <div key={pillar.title} className="space-y-2">
                  <div className="gold-divider mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                    <div className="sm:col-span-4 font-sans text-xs sm:text-sm tracking-mega uppercase font-bold text-gold">
                      {pillar.title}
                    </div>
                    <div className="sm:col-span-8 font-sans text-base sm:text-lg text-[#F5F0E8]/90 font-light">
                      {pillar.description}
                    </div>
                  </div>
                </div>
              ))}
              <div className="gold-divider" />
            </div>
          </div>

          {/* Right Column: Offset Editorial Photo Pair */}
          <div className="lg:col-span-5 relative pt-4 lg:pt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-start">
              {/* Photo 1: Latte Art (Offset Top) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-maroon-deep shadow-2xl">
                <Image
                  src="/images/foodtraf/latte-art.jpg"
                  alt="Warm artisanal latte art"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover editorial-img"
                />
                <div className="absolute bottom-3 left-3 font-sans text-[9px] tracking-widest text-[#F5F0E8] uppercase bg-ink/60 px-2 py-0.5 backdrop-blur-sm">
                  The First Visit
                </div>
              </div>

              {/* Photo 2: Dessert (Offset Downwards) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-maroon-deep shadow-2xl mt-12 sm:mt-16">
                <Image
                  src="/images/foodtraf/dessert.jpg"
                  alt="Plated artisanal dessert"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover editorial-img"
                />
                <div className="absolute bottom-3 left-3 font-sans text-[9px] tracking-widest text-gold uppercase bg-maroon-deep/80 px-2 py-0.5 backdrop-blur-sm font-semibold">
                  The Reason To Return
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

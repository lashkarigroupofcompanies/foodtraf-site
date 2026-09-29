"use client";

import React from "react";
import Image from "next/image";

export default function Owners() {
  const points = [
    "Done-for-you setup: we handle everything, on-site.",
    "Your brand, your colours, your offers.",
    "Fresh experiences that change regularly.",
    "A simple owner view of how your guests are returning.",
    "Direct, private guest feedback, only for you.",
    "Reach your regulars the moment you launch something new.",
    "A partner who keeps improving it.",
  ];

  return (
    <section className="relative bg-[#FAF6EE] text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 left-8 sm:left-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        005
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo (chef-hands.jpg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-white shadow-xl">
              <Image
                src="/images/foodtraf/chef-hands.jpg"
                alt="Culinary chef plating with care"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover editorial-img"
              />
              <div className="absolute bottom-4 left-4 font-sans text-xs tracking-widest uppercase text-white bg-maroon px-3 py-1 font-semibold">
                Done-For-You Hospitality
              </div>
            </div>
          </div>

          {/* Right Column: Heading, List, One-liner */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* Label */}
              <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-3">
                005 / FOR THE OWNER
              </div>

              {/* Heading */}
              <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.04] text-ink tracking-tight">
                A full engine. <br />
                <span className="italic font-medium text-maroon">Zero extra work.</span>
              </h2>
            </div>

            {/* List with thin gold dividers */}
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-gold text-lg font-bold">―</span>
                    <p className="font-sans text-base sm:text-lg text-ink/85 font-normal leading-relaxed">
                      {point}
                    </p>
                  </div>
                  {idx < points.length - 1 && <div className="gold-divider" />}
                </div>
              ))}
            </div>

            {/* One-liner in italic serif */}
            <div className="pt-6 border-t-2 border-gold/40">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-maroon italic font-normal">
                &ldquo;You run the kitchen. We run the comeback.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

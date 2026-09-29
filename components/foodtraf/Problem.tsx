"use client";

import React from "react";
import Image from "next/image";

export default function Problem() {
  const truths = [
    {
      num: "01",
      text: "Most guests never return after their first visit.",
    },
    {
      num: "02",
      text: "Discounts and flyers don't build habits.",
    },
    {
      num: "03",
      text: "Owners have no time to run loyalty programs.",
    },
  ];

  return (
    <section className="relative bg-[#FAF6EE] text-ink pt-24 sm:pt-32 pb-0 overflow-hidden">
      {/* Seamless Transition Bridging Watermark */}
      <div className="absolute top-0 right-8 sm:right-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        002
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Label */}
        <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-4">
          002 / THE GAP
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] max-w-4xl text-ink tracking-tight mb-8">
          Getting a guest in is hard. <br />
          <span className="italic font-medium text-maroon">Getting them back is harder.</span>
        </h2>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <p className="font-sans text-lg sm:text-2xl text-ink/80 leading-relaxed font-normal">
              Restaurants spend heavily to win a new guest, then lose them after one meal. No reminder, no reason, no relationship. The first visit is marketing.{" "}
              <strong className="text-maroon font-semibold underline decoration-gold/50 underline-offset-8">
                The second visit is a business.
              </strong>
            </p>
          </div>
        </div>

        {/* Three short truths with big numerals (01)(02)(03) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-16 sm:pb-24 border-t border-gold/30 pt-12">
          {truths.map((truth) => (
            <div key={truth.num} className="space-y-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-gold flex items-center gap-1">
                <span>(</span>
                <span>{truth.num}</span>
                <span>)</span>
              </div>
              <p className="font-sans text-base sm:text-lg text-ink font-medium leading-snug">
                {truth.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed Photo below: busy-evening.jpg */}
      <div className="relative w-full h-[50vh] sm:h-[65vh] overflow-hidden bg-white">
        <Image
          src="/images/foodtraf/busy-evening.jpg"
          alt="Atmospheric evening restaurant dining"
          fill
          sizes="100vw"
          className="object-cover editorial-img"
        />
        {/* Soft edge fade into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#FAF6EE]/30 pointer-events-none" />
        <div className="absolute bottom-6 left-6 sm:left-12 font-sans text-xs tracking-widest uppercase text-white/90 bg-ink/60 px-3 py-1 backdrop-blur-sm">
          The Second Visit Is Everything
        </div>
      </div>
    </section>
  );
}

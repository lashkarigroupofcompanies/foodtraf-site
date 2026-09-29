"use client";

import React from "react";

interface ClosingProps {
  onOpenPilot: () => void;
}

export default function Closing({ onOpenPilot }: ClosingProps) {
  return (
    <section className="relative bg-[#6B0F1A] text-[#F5F0E8] min-h-[85vh] sm:min-h-screen flex items-center justify-center text-center px-6 sm:px-8 py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-8xl sm:text-9xl text-gold/10 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        011
      </div>

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold">
          011 / THE COMEBACK
        </div>

        {/* Huge Italic Serif Centered */}
        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl xl:text-9xl italic font-normal text-[#F5F0E8] leading-[0.95] tracking-tight">
          Fill the tables. <br />
          <span className="text-gold">Then fill them again.</span>
        </h2>

        <p className="font-sans text-base sm:text-xl text-[#F5F0E8]/80 max-w-xl mx-auto leading-relaxed pt-2">
          Turn one-time diners into habitual regulars. No extra burden on your kitchen, your floor, or your team.
        </p>

        {/* Action Button: TALK TO US -> with gold border */}
        <div className="pt-6">
          <button
            onClick={onOpenPilot}
            className="py-4 px-10 border-2 border-gold text-gold hover:bg-gold hover:text-maroon font-sans text-xs sm:text-sm tracking-widest uppercase font-semibold transition-all duration-300 inline-flex items-center gap-3 group"
          >
            <span>TALK TO US</span>
            <span className="group-hover:translate-x-1.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

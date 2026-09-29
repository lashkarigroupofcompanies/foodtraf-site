"use client";

import React from "react";

interface PilotProps {
  onOpenPilot: () => void;
}

export default function Pilot({ onOpenPilot }: PilotProps) {
  const steps = [
    {
      step: "01",
      title: "We set up",
      subtitle: "Done-for-you, on-site, in one day at zero cost.",
    },
    {
      step: "02",
      title: "21 days live",
      subtitle: "Your guests experience the engine with zero staff friction.",
    },
    {
      step: "03",
      title: "You decide",
      subtitle: "Keep it only if the repeat visits speak for themselves.",
    },
  ];

  return (
    <section id="pilot" className="relative bg-[#FAF6EE] text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 right-8 sm:right-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        008
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold">
            008 / RISK-FREE PILOT
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] text-ink tracking-tight">
            Try it for 21 days. <br />
            <span className="italic font-medium text-maroon">Keep it only if it works.</span>
          </h2>

          <p className="font-sans text-lg sm:text-xl text-ink/80 leading-relaxed pt-2">
            We set everything up at no cost. If the return visits don&apos;t come, we pack up and leave. No charge, no questions. If they do, we continue together.
          </p>
        </div>

        {/* 3-Step Timeline (Minimal) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-gold/30 py-12">
          {steps.map((item, idx) => (
            <div key={item.step} className="space-y-3 relative">
              <div className="font-serif text-3xl font-bold text-gold">
                {item.step}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-maroon font-normal">
                {item.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-ink/75 leading-relaxed">
                {item.subtitle}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-gold/60 text-xl font-serif">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <button
            onClick={onOpenPilot}
            className="py-4 px-10 bg-maroon hover:bg-maroon-light active:scale-[0.99] text-[#F5F0E8] font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md"
          >
            START YOUR PILOT
          </button>
          <span className="font-sans text-xs tracking-wider text-ink/60 uppercase">
            No risk · Zero upfront expense · On-site setup
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Step {
  step: string;
  name: string;
  line: string;
  image: string;
}

const steps: Step[] = [
  {
    step: "01",
    name: "Notice",
    line: "A simple, beautiful touchpoint on the table.",
    image: "/images/foodtraf/table-scan.jpg",
  },
  {
    step: "02",
    name: "Play",
    line: "A quick moment of delight.",
    image: "/images/foodtraf/happy-guests.jpg",
  },
  {
    step: "03",
    name: "Win",
    line: "A reward worth coming back for.",
    image: "/images/foodtraf/dessert.jpg",
  },
  {
    step: "04",
    name: "Return",
    line: "The guest is back, and the cycle begins again.",
    image: "/images/foodtraf/busy-evening.jpg",
  },
];

export default function Experience() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="experience" className="relative bg-white text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 right-8 sm:right-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        004
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 mb-12 sm:mb-16">
        {/* Label */}
        <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-3">
          004 / THE GUEST EXPERIENCE
        </div>

        {/* Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] text-ink tracking-tight">
          Four moments. <br className="hidden sm:inline" />
          <span className="italic font-medium text-maroon">One reason to return.</span>
        </h2>
      </div>

      {/* ── DESKTOP INTERACTIVE SEQUENCE ── */}
      <div className="hidden lg:block max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Step Tabs Indicator */}
        <div className="flex items-center gap-6 border-b border-gold/30 pb-4 mb-8 font-sans text-xs tracking-mega uppercase font-semibold">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-3 transition-colors pb-2 -mb-4 border-b-2 ${
                activeStep === idx
                  ? "border-maroon text-maroon"
                  : "border-transparent text-ink/40 hover:text-ink/80"
              }`}
            >
              <span className="font-serif text-lg font-bold text-gold">{s.step}</span>
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        {/* Display Current Active Step with Large Photo + One Line */}
        <div className="grid grid-cols-12 gap-12 items-center bg-[#FAF6EE] p-8 sm:p-12">
          {/* Photo Side */}
          <div className="col-span-7 relative aspect-[16/10] overflow-hidden bg-white shadow-lg">
            <Image
              src={steps[activeStep].image}
              alt={steps[activeStep].name}
              fill
              sizes="(max-width: 1200px) 60vw, 50vw"
              className="object-cover editorial-img"
            />
            <div className="absolute top-4 left-4 font-serif text-4xl font-bold text-white bg-maroon/90 px-3 py-1">
              {steps[activeStep].step}
            </div>
          </div>

          {/* Text Side: Strictly Surface Level, One Line */}
          <div className="col-span-5 space-y-6">
            <div className="font-sans text-xs tracking-mega uppercase text-gold font-bold">
              Moment {steps[activeStep].step}
            </div>

            <h3 className="font-serif text-4xl xl:text-5xl font-normal text-maroon italic">
              {steps[activeStep].name}
            </h3>

            <p className="font-sans text-xl sm:text-2xl text-ink font-normal leading-relaxed">
              {steps[activeStep].line}
            </p>

            {/* Navigation buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="w-10 h-10 border border-gold/40 flex items-center justify-center font-sans text-sm hover:border-maroon hover:text-maroon transition-colors"
                aria-label="Previous moment"
              >
                ←
              </button>
              <span className="font-sans text-xs tracking-widest text-ink/50 font-mono">
                {activeStep + 1} / {steps.length}
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 border border-gold/40 flex items-center justify-center font-sans text-sm hover:border-maroon hover:text-maroon transition-colors"
                aria-label="Next moment"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET VERTICAL STACK ── */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 space-y-12">
        {steps.map((s) => (
          <div key={s.step} className="space-y-4 bg-[#FAF6EE] p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 font-serif text-2xl font-bold text-white bg-maroon px-2 py-0.5">
                {s.step}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="font-serif text-3xl font-normal text-maroon italic">
                {s.name}
              </div>
              <p className="font-sans text-lg text-ink font-normal leading-relaxed">
                {s.line}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

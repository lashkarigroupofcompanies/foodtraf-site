"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface HeroProps {
  onOpenPilot: () => void;
}

export default function Hero({ onOpenPilot }: HeroProps) {
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.16, delay: 0.2 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, []);

  const marqueeWords = [
    "FOOTFALL",
    "RETURN VISITS",
    "REWARDS",
    "DELIGHT",
    "LOYALTY",
    "GROWTH",
  ];

  return (
    <section className="relative min-h-screen bg-white text-ink flex flex-col justify-between pt-28 sm:pt-36 overflow-hidden">
      {/* ── TOP SECTION CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center flex-grow">
        {/* Left Column: Heading & Proposition */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
          {/* Label */}
          <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold">
            001 / THE FOOTFALL ENGINE
          </div>

          {/* Huge 3-line heading with line reveals */}
          <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl leading-[0.92] tracking-tight select-none">
            <span className="line-reveal-wrap">
              <span ref={line1Ref} className="block font-bold">
                EVERY GUEST
              </span>
            </span>
            <span className="line-reveal-wrap mt-1">
              <span ref={line2Ref} className="block font-bold text-maroon">
                COMES BACK
              </span>
            </span>
            <span className="line-reveal-wrap mt-1">
              <span ref={line3Ref} className="block italic font-bold text-gold">
                FOR MORE.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subRef}
            className="font-sans text-base sm:text-xl text-ink/80 max-w-xl leading-relaxed pt-2"
          >
            Foodtraf helps restaurants, cafes and hotels turn a first visit into a habit. Quietly, automatically, and without extra staff.
          </p>

          {/* Action Buttons */}
          <div
            ref={actionsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-4"
          >
            <a
              href="#idea"
              className="py-4 px-8 bg-maroon hover:bg-maroon-light active:scale-[0.99] text-cream-text font-sans text-xs tracking-widest uppercase font-semibold text-center transition-all duration-300"
            >
              SEE THE IDEA
            </a>

            <button
              onClick={onOpenPilot}
              className="py-4 px-2 font-sans text-xs tracking-widest uppercase font-semibold text-gold hover:text-maroon transition-colors text-center inline-flex items-center justify-center gap-2 group"
            >
              <span>START A PILOT</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Tall Editorial Photo with Overlapping Cut-Out Plate */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end pb-12 lg:pb-0">
          {/* Main Tall Editorial Photo */}
          <div className="relative w-full max-w-md sm:max-w-lg aspect-[3/4] overflow-hidden bg-[#FAF6EE]">
            <Image
              src="/images/foodtraf/hero-cafe.jpg"
              alt="Warm hospitality cafe interior"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover editorial-img"
              priority
            />
            {/* Subtle editorial line over photo */}
            <div className="absolute top-4 left-4 font-sans text-[10px] tracking-widest text-white/90 bg-ink/40 px-2 py-0.5 backdrop-blur-sm uppercase">
              Hospitality Retention
            </div>
          </div>

          {/* Overlapping Cut-Out Plated Food Shot with Gentle Float Accent */}
          <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-10 w-44 sm:w-56 aspect-square overflow-hidden border-2 border-gold/40 bg-white shadow-xl animate-float-gentle z-20">
            <Image
              src="/images/foodtraf/hero-plate.jpg"
              alt="Artisanal culinary plate"
              fill
              sizes="220px"
              className="object-cover"
              priority
            />
            <div className="absolute bottom-2 right-2 font-sans text-[8px] tracking-widest uppercase text-gold font-bold bg-maroon/90 px-1.5 py-0.5">
              The Habit
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM MARQUEE BAR ── */}
      <div className="w-full border-t border-gold/30 bg-white py-4 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap text-xs tracking-mega font-sans text-ink/60 font-semibold uppercase">
          {/* Loop twice for seamless marquee */}
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, idx) => (
            <span key={idx} className="flex items-center gap-6 mr-6">
              <span>{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70 inline-block" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

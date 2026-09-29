"use client";

import React, { useState } from "react";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do my guests need an app?",
      a: "No.",
    },
    {
      q: "How long does setup take?",
      a: "Usually a day.",
    },
    {
      q: "Do I need extra staff?",
      a: "No. We handle it.",
    },
    {
      q: "Can it match my brand?",
      a: "Yes, fully.",
    },
    {
      q: "Is my guest data safe?",
      a: "Yes. Guest privacy is core to how we build.",
    },
  ];

  return (
    <section className="relative bg-[#FAF6EE] text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 right-8 sm:right-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        010
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div>
          <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-3">
            010 / QUESTIONS & CLARITY
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-[1.04] text-ink tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion list */}
        <div className="border-t border-gold/30">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-gold/30">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-ink group-hover:text-maroon transition-colors pr-4">
                    {faq.q}
                  </span>
                  <span className="font-serif text-2xl text-gold font-bold flex-shrink-0 transition-transform duration-300">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 font-sans text-base sm:text-lg text-ink/80 font-normal leading-relaxed">
                    <p className="font-serif italic text-xl text-maroon font-medium">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

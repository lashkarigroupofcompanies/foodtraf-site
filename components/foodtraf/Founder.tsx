"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Founder() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative bg-white text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 left-8 sm:left-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        009
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Label */}
        <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold">
          009 / A NOTE
        </div>

        {/* Founder Note & Quote */}
        <div className="space-y-8">
          <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl text-ink font-normal leading-[1.1] tracking-tight">
            &ldquo;I kept noticing the same thing: great places, full on opening week, quiet by month three. It wasn&apos;t the food. Nobody gave guests a reason to come back. <span className="text-maroon italic">So we built one.</span>&rdquo;
          </blockquote>

          {/* Signature and Portrait Slot */}
          <div className="flex items-center gap-5 pt-6 border-t border-gold/30">
            {/* Small Portrait slot with initials fallback */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-gold bg-[#FAF6EE] flex items-center justify-center flex-shrink-0">
              {!imgError ? (
                <Image
                  src="/images/founders/paras.jpg"
                  alt="Paras, Founder, LGC"
                  fill
                  sizes="80px"
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full rounded-full border border-gold flex items-center justify-center bg-white font-serif font-bold text-maroon text-xl">
                  P
                </div>
              )}
            </div>

            <div>
              <div className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-tight">
                Paras
              </div>
              <div className="font-sans text-xs tracking-mega uppercase text-gold font-semibold mt-1">
                Founder, Lashkari Group of Companies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

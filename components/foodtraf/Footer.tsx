"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="relative bg-white text-ink pt-20 pb-12 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          {/* Brand Left */}
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 relative flex items-center justify-center border border-gold/40 bg-white">
                {!logoError ? (
                  <Image
                    src="/lgc-logo.png"
                    alt="LGC Hallmark"
                    width={26}
                    height={26}
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <span className="font-serif text-xs font-bold text-maroon">LGC</span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-widest text-maroon">
                  FOODTRAF
                </span>
                <span className="font-sans text-[8px] tracking-widest text-gold uppercase font-semibold">
                  A Lashkari Group Company
                </span>
              </div>
            </div>

            <p className="font-serif italic text-xl text-ink/80 leading-snug">
              &ldquo;Guests come back. Businesses grow.&rdquo;
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-8 sm:gap-12 font-sans text-xs tracking-mega uppercase font-medium text-ink/80">
            <a href="#idea" className="hover:text-maroon transition-colors">
              Idea
            </a>
            <a href="#experience" className="hover:text-maroon transition-colors">
              Experience
            </a>
            <a href="#results" className="hover:text-maroon transition-colors">
              Results
            </a>
            <a href="#who-its-for" className="hover:text-maroon transition-colors">
              Who It&apos;s For
            </a>
            <a href="#pilot" className="hover:text-maroon transition-colors">
              Pilot
            </a>
            <a
              href="https://lashkarigroup.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-maroon transition-colors font-bold"
            >
              LGC ↗
            </a>
          </div>

          {/* Right Contact Details */}
          <div className="space-y-2 font-sans text-xs text-ink/70">
            <div className="text-gold font-semibold tracking-mega uppercase text-[10px]">
              Direct Hospitality Desk
            </div>
            <div>
              <a
                href="mailto:hospitality@lashkarigroup.online"
                className="hover:text-maroon transition-colors block text-ink font-medium"
              >
                hospitality@lashkarigroup.online
              </a>
              <a
                href="mailto:lashkarigroupofcompanies@gmail.com"
                className="hover:text-maroon transition-colors text-[11px] text-ink/60 block mt-0.5"
              >
                lashkarigroupofcompanies@gmail.com
              </a>
            </div>
            <div className="text-ink/60 pt-1">Ahmedabad, India</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-ink/50 gap-4">
          <div>
            © {new Date().getFullYear()} Foodtraf. A Lashkari Group Company. All rights reserved.
          </div>
          <div className="tracking-widest uppercase text-[10px] text-gold font-medium">
            The Footfall Engine
          </div>
        </div>
      </div>
    </footer>
  );
}

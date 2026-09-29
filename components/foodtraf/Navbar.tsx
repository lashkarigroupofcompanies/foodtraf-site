"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenPilot: () => void;
}

export default function Navbar({ onOpenPilot }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "IDEA", href: "#idea" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "RESULTS", href: "#results" },
    { label: "WHO IT'S FOR", href: "#who-its-for" },
    { label: "PILOT", href: "#pilot" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF6EE]/95 backdrop-blur-md border-b border-gold/30 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Left */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative flex items-center justify-center border border-gold/40 bg-white">
            {!logoError ? (
              <Image
                src="/lgc-logo.png"
                alt="LGC"
                width={26}
                height={26}
                className="object-contain"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <span className="font-serif text-xs font-bold text-maroon">LGC</span>
            )}
          </div>

          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-mega text-maroon leading-none">
              FOODTRAF
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] tracking-widest text-gold uppercase mt-1 font-semibold">
              A Lashkari Group Company
            </span>
          </a>
        </div>

        {/* Center Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-3 font-sans text-xs tracking-widest text-ink/80 font-medium">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.href}>
              <a
                href={link.href}
                className="hover:text-maroon transition-colors py-1 px-1.5 uppercase font-medium"
              >
                {link.label}
              </a>
              {idx < navLinks.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-gold/60 inline-block" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://lashkarigroup.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 font-sans text-xs tracking-widest text-ink/60 hover:text-gold transition-colors font-medium"
          >
            <span>← LGC</span>
          </a>

          <button
            onClick={onOpenPilot}
            className="font-sans text-xs tracking-widest uppercase font-semibold text-gold hover:text-maroon transition-colors py-2 px-3 border border-gold/40 hover:border-maroon"
          >
            TALK TO US →
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-maroon hover:text-gold"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] border-b border-gold/30 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-sans text-xs tracking-widest uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ink hover:text-maroon py-1.5 border-b border-gold/20"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://lashkarigroup.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold py-1.5"
            >
              ← Lashkari Group of Companies
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

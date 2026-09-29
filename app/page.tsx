"use client";

import React, { useState } from "react";
import Navbar from "@/components/foodtraf/Navbar";
import Hero from "@/components/foodtraf/Hero";
import Problem from "@/components/foodtraf/Problem";
import Idea from "@/components/foodtraf/Idea";
import Experience from "@/components/foodtraf/Experience";
import Owners from "@/components/foodtraf/Owners";
import Results from "@/components/foodtraf/Results";
import WhoFor from "@/components/foodtraf/WhoFor";
import Pilot from "@/components/foodtraf/Pilot";
import Founder from "@/components/foodtraf/Founder";
import Faq from "@/components/foodtraf/Faq";
import Closing from "@/components/foodtraf/Closing";
import Footer from "@/components/foodtraf/Footer";
import PilotModal from "@/components/foodtraf/PilotModal";

export default function FoodtrafPage() {
  const [isPilotOpen, setIsPilotOpen] = useState(false);

  const openPilot = () => setIsPilotOpen(true);
  const closePilot = () => setIsPilotOpen(false);

  return (
    <div className="relative min-h-screen bg-white text-ink overflow-x-hidden selection:bg-maroon selection:text-[#F5F0E8]">
      {/* ── FIXED NAVBAR ── */}
      <Navbar onOpenPilot={openPilot} />

      {/* ── 001: HERO (WHITE) ── */}
      <Hero onOpenPilot={openPilot} />

      {/* ── 002: THE PROBLEM / THE GAP (CREAM) ── */}
      <Problem />

      {/* ── 003: THE IDEA (SOLID MAROON) ── */}
      <Idea />

      {/* ── 004: THE EXPERIENCE (WHITE) ── */}
      <Experience />

      {/* ── 005: WHAT OWNERS GET (CREAM) ── */}
      <Owners />

      {/* ── 006: RESULTS / PILOT TARGETS (SOLID MAROON) ── */}
      <Results />

      {/* ── 007: WHO IT'S FOR (WHITE) ── */}
      <WhoFor />

      {/* ── 008: THE PILOT OFFER (CREAM) ── */}
      <Pilot onOpenPilot={openPilot} />

      {/* ── 009: FROM THE FOUNDER (WHITE) ── */}
      <Founder />

      {/* ── 010: FAQ (CREAM) ── */}
      <Faq />

      {/* ── 011: CLOSING (SOLID MAROON) ── */}
      <Closing onOpenPilot={openPilot} />

      {/* ── FOOTER (WHITE) ── */}
      <Footer />

      {/* ── INTERACTIVE PILOT MODAL ── */}
      <PilotModal isOpen={isPilotOpen} onClose={closePilot} />
    </div>
  );
}

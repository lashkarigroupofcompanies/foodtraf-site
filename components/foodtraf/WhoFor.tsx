"use client";

import React from "react";
import Image from "next/image";

export default function WhoFor() {
  const categories = [
    {
      title: "Restaurants",
      image: "/images/foodtraf/street-food.jpg",
      isTextOnly: false,
    },
    {
      title: "Cafes",
      image: "/images/foodtraf/latte-art.jpg",
      isTextOnly: false,
    },
    {
      title: "Hotels",
      image: "/images/foodtraf/hotel-lobby.jpg",
      isTextOnly: false,
    },
    {
      title: "Salons",
      image: "/images/foodtraf/salon.jpg",
      isTextOnly: false,
    },
    {
      title: "Gyms",
      image: "/images/foodtraf/gym.jpg",
      isTextOnly: false,
    },
    {
      title: "Clinics",
      image: "",
      isTextOnly: true,
      tagline: "Appointment Recurrence & Care Follow-Ups",
    },
    {
      title: "Retail",
      image: "",
      isTextOnly: true,
      tagline: "Boutique Footfall & VIP Customer Retention",
    },
  ];

  return (
    <section id="who-its-for" className="relative bg-white text-ink py-24 sm:py-36 overflow-hidden">
      {/* Bridging Watermark */}
      <div className="absolute top-0 left-8 sm:left-16 font-serif text-8xl sm:text-9xl text-gold/15 select-none pointer-events-none -translate-y-1/2 leading-none font-bold">
        007
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
        {/* Header */}
        <div>
          <div className="font-sans text-xs sm:text-sm tracking-mega text-gold uppercase font-semibold mb-3">
            007 / WHO IT&apos;S FOR
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.04] text-ink tracking-tight">
            Anywhere guests <br />
            <span className="italic font-medium text-maroon">can come back.</span>
          </h2>
        </div>

        {/* Photo Mosaic (Sharp edges, no frames, no rounded cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 pt-4">
          {/* Restaurants (Large Span 6) */}
          <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden bg-[#FAF6EE] group">
            <Image
              src="/images/foodtraf/street-food.jpg"
              alt="Restaurants dining"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover editorial-img"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
              <span className="font-serif text-3xl font-bold text-white tracking-wide">
                Restaurants
              </span>
            </div>
          </div>

          {/* Cafes (Span 3) */}
          <div className="lg:col-span-3 relative aspect-[4/5] sm:aspect-auto overflow-hidden bg-[#FAF6EE] group">
            <Image
              src="/images/foodtraf/latte-art.jpg"
              alt="Cafes"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover editorial-img"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Cafes
              </span>
            </div>
          </div>

          {/* Hotels (Span 3) */}
          <div className="lg:col-span-3 relative aspect-[4/5] sm:aspect-auto overflow-hidden bg-[#FAF6EE] group">
            <Image
              src="/images/foodtraf/hotel-lobby.jpg"
              alt="Hotels and Hospitality"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover editorial-img"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Hotels
              </span>
            </div>
          </div>

          {/* Salons (Span 4) */}
          <div className="lg:col-span-4 relative aspect-[16/10] overflow-hidden bg-[#FAF6EE] group">
            <Image
              src="/images/foodtraf/salon.jpg"
              alt="Boutique Salons"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover editorial-img"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Salons
              </span>
            </div>
          </div>

          {/* Gyms (Span 4) */}
          <div className="lg:col-span-4 relative aspect-[16/10] overflow-hidden bg-[#FAF6EE] group">
            <Image
              src="/images/foodtraf/gym.jpg"
              alt="Gyms and Wellness Centers"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="object-cover editorial-img"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Gyms
              </span>
            </div>
          </div>

          {/* Text-Only Tiles in Cream: Clinics & Retail (Span 4) */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-[#FAF6EE] p-6 sm:p-8 flex flex-col justify-center border-l-2 border-gold/60">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-maroon">
                Clinics
              </span>
              <p className="font-sans text-xs tracking-wider text-ink/70 uppercase mt-2">
                Recurring appointments & wellness visits
              </p>
            </div>

            <div className="bg-[#FAF6EE] p-6 sm:p-8 flex flex-col justify-center border-l-2 border-maroon">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Retail
              </span>
              <p className="font-sans text-xs tracking-wider text-ink/70 uppercase mt-2">
                Boutique footfall & recurring clientele
              </p>
            </div>
          </div>
        </div>

        {/* Signature Line */}
        <div className="pt-8 text-center max-w-2xl mx-auto border-t border-gold/30">
          <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal">
            &ldquo;If your business lives on repeat customers, this is for you.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

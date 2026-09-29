"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, Building, MapPin, User } from "lucide-react";

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PilotModal({ isOpen, onClose }: PilotModalProps) {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setBusiness("");
    setPhone("");
    setCity("");
    setNotes("");
    onClose();
  };

  const mailtoHref = `mailto:hospitality@lashkarigroup.online?cc=lashkarigroupofcompanies@gmail.com&subject=${encodeURIComponent(
    `FOODTRAF 21-Day Pilot Inquiry: ${business || "Hospitality Partner"}`
  )}&body=${encodeURIComponent(
    `Hello Foodtraf / Lashkari Group Team,\n\nI would like to initiate a 21-day risk-free pilot for the Footfall Engine.\n\nName: ${name}\nBusiness Name: ${business}\nPhone: ${phone}\nCity: ${city}\nNotes: ${notes}\n\nThank you!`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card (Solid White with Gold Line Accent) */}
      <div className="relative w-full max-w-xl bg-white border border-gold/40 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-ink/60 hover:text-maroon transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="font-sans text-[10px] tracking-mega text-gold uppercase font-bold mb-2">
                21-Day Risk-Free Pilot
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-ink">
                Start Your <span className="text-maroon italic">Pilot</span>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ink/75 mt-2 leading-relaxed">
                Done-for-you on-site setup. We set everything up at no cost. If return visits don&apos;t come, we pack up and leave. No charge, no questions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/70 mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6EE] border border-gold/30 text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/70 mb-1">
                  Business / Venue Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink/40">
                    <Building className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. The Atelier Cafe, Grand Imperial, etc."
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6EE] border border-gold/30 text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/70 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 / Phone"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6EE] border border-gold/30 text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/70 mb-1">
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink/40">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ahmedabad, Mumbai, etc."
                      className="w-full pl-9 pr-3 py-2.5 bg-[#FAF6EE] border border-gold/30 text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink/70 mb-1">
                  Venue Details / Table Count (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Number of tables, daily guest volume, or special requirements..."
                  className="w-full p-2.5 bg-[#FAF6EE] border border-gold/30 text-ink placeholder:text-ink/40 focus:outline-none focus:border-maroon transition-colors resize-none"
                />
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-6 bg-maroon hover:bg-maroon-light active:scale-[0.99] text-[#F5F0E8] font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-70 shadow-md"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>SUBMIT PILOT REQUEST</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <a
                  href={mailtoHref}
                  className="py-3 px-4 border border-gold/50 text-gold hover:text-maroon hover:border-maroon font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Direct Email</span>
                </a>
              </div>
            </form>

            <div className="mt-4 text-center">
              <span className="text-[10px] text-ink/50 tracking-wider uppercase font-sans">
                A Lashkari Group Company • No Risk · No Upfront Cost
              </span>
            </div>
          </div>
        ) : (
          /* Submission Confirmation */
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-maroon text-[#F5F0E8] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-gold" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-3xl font-medium text-ink">
                Pilot Request Received
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ink/75 max-w-md mx-auto leading-relaxed">
                Thank you{name ? `, ${name}` : ""}. Our hospitality team at Lashkari Group of Companies will reach out to you within 24 hours to schedule your on-site pilot.
              </p>
            </div>

            <div className="p-4 bg-[#FAF6EE] border border-gold/30 text-left text-xs space-y-1 text-ink/80 max-w-sm mx-auto font-sans">
              <div><strong>Business:</strong> {business}</div>
              <div><strong>Phone:</strong> {phone}</div>
              <div><strong>City:</strong> {city}</div>
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="py-2.5 px-6 bg-maroon text-[#F5F0E8] text-xs font-semibold tracking-widest uppercase hover:bg-maroon-light transition-all shadow-sm"
              >
                Close
              </button>
              <a
                href={mailtoHref}
                className="py-2.5 px-4 border border-gold/50 text-gold hover:text-maroon text-xs font-semibold tracking-widest uppercase transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Follow Up via Email</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

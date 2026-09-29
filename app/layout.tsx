import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOODTRAF — The Footfall Engine | A Lashkari Group Company",
  description:
    "Foodtraf helps restaurants, cafes and hotels turn a first visit into a habit. Quietly, automatically, and without extra staff. An LGC Company.",
  keywords: [
    "Foodtraf",
    "Footfall Engine",
    "Lashkari Group of Companies",
    "LGC",
    "Hospitality Retention",
    "Restaurant Footfall",
    "Repeat Guests",
    "Cafe Growth",
  ],
  authors: [{ name: "Lashkari Group of Companies" }],
  openGraph: {
    title: "FOODTRAF — The Footfall Engine",
    description: "Every guest comes back for more. The hospitality arm of Lashkari Group of Companies.",
    siteName: "FOODTRAF",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-white text-ink font-sans min-h-[100dvh] relative antialiased selection:bg-maroon selection:text-cream-text">
        {children}
      </body>
    </html>
  );
}

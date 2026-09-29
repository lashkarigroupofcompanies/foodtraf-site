import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        cream: {
          DEFAULT: "#FAF6EE",
          text: "#F5F0E8",
        },
        gold: {
          DEFAULT: "#C9A84C",
          line: "rgba(201, 168, 76, 0.3)",
        },
        maroon: {
          DEFAULT: "#6B0F1A",
          deep: "#4D0A13",
          light: "#851222",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#555555",
          light: "#777777",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-space)", "Inter", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        mega: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;

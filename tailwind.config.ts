import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ratbha: {
          bg: "#08111F",
          card: "#13233D",
          cardHover: "#1A2D4D",
          border: "#243A5E",
          purple: "#6C5CE7",
          blue: "#4A90E2",
          green: "#2BB463",
          yellow: "#FFC145",
          cyan: "#00D1FF",
          muted: "#AFC0D8"
        }
      },
      boxShadow: {
        soft: "0 18px 70px rgba(0, 0, 0, 0.35)",
        glow: "0 0 38px rgba(74, 144, 226, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;

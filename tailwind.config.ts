import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kaizen-red": "#B11226",
        "kaizen-red-dark": "#8a0d1e",
        "kaizen-gold": "#C9A84C",
        "kaizen-gold-light": "#e2c97e",
        "kaizen-black": "#0a0a0a",
        "kaizen-dark": "#111111",
        "kaizen-gray": "#1a1a1a",
        "kaizen-muted": "#2a2a2a",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C 0%, #e2c97e 50%, #C9A84C 100%)",
        "red-gradient": "linear-gradient(135deg, #B11226 0%, #d41430 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

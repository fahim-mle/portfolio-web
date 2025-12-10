import type { Config } from "tailwindcss";

const config = {
  darkMode: "class",
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0A0C", // soft charcoal
        foreground: "#F1F1F1", // text primary
        secondary: {
          DEFAULT: "#111114", // surface
          foreground: "#A7A7AA", // text secondary
        },
        accent: {
          DEFAULT: "#00E5FF", // neon cyan
          foreground: "#000000",
          secondary: "#7FFFD4", // teal
          tertiary: "#FFC76F", // amber
        },
        muted: {
          DEFAULT: "#1A1A1D",
          foreground: "#71717A",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-ibm-plex-serif)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'fade-in-up': {
          '0%': { opacity: "0", transform: 'translateY(10px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        'neon-circuit': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;

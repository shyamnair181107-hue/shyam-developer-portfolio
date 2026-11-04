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
        background: {
          DEFAULT: "#070812",
          secondary: "#0D1020",
          card: "#111528",
          cardHover: "#161B35",
        },
        accent: {
          violet: {
            DEFAULT: "#8B5CF6",
            light: "#A78BFA",
            dark: "#7C3AED",
            glow: "rgba(139, 92, 246, 0.4)",
          },
          cyan: {
            DEFAULT: "#00F0FF",
            light: "#22D3EE",
            dark: "#06B6D4",
            glow: "rgba(0, 240, 255, 0.4)",
          },
          blue: {
            DEFAULT: "#3B82F6",
            light: "#60A5FA",
            dark: "#2563EB",
          },
        },
        text: {
          primary: "#F5F7FF",
          secondary: "#A3A9BD",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "glow-violet": "0 0 25px -5px rgba(139, 92, 246, 0.3)",
        "glow-cyan": "0 0 25px -5px rgba(0, 240, 255, 0.3)",
        "glow-dual": "0 0 35px -5px rgba(139, 92, 246, 0.25), 0 0 20px -5px rgba(0, 240, 255, 0.25)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;


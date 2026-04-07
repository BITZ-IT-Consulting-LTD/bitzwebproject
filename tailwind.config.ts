import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "Calibri", "Helvetica", "Roboto", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "deep-navy": "#051C2C",
        "electric-blue": "#2251FF",
        cyan: "#00A9F4",
        "off-white": "#F8FAFC",
        "text-primary": "#1E293B",
        "text-secondary": "#64748B",
        "neutral-gray": {
          "03": "#F7F7F7",
          "06": "#F0F0F0",
          "30": "#B3B3B3",
          "60": "#666666",
          "70": "#4D4D4D",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      maxWidth: {
        "content": "1216px",
        "narrow": "768px",
        "medium": "928px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "display-xl": ["76px", { lineHeight: "76px", fontWeight: "300" }],
        "display-lg": ["52px", { lineHeight: "60px", fontWeight: "300" }],
        "display": ["44px", { lineHeight: "52px", fontWeight: "300" }],
        "heading-lg": ["36px", { lineHeight: "44px", fontWeight: "300" }],
        "heading": ["28px", { lineHeight: "32px", fontWeight: "500" }],
        "heading-sm": ["24px", { lineHeight: "28px", fontWeight: "500" }],
        "body-lg": ["20px", { lineHeight: "32px", fontWeight: "300" }],
        "body": ["16px", { lineHeight: "24px", fontWeight: "300" }],
        "caption": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "eyebrow": ["16px", { lineHeight: "24px", fontWeight: "500" }],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "elevation-2": "0px 2px 4px -1px rgba(5,28,44,0.2), 0px 0px 1px 0px rgba(5,28,44,0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

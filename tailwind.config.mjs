/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
	  colors: {
		'neutral-100': '#0f172a',
		'neutral-90': '#1E293B',
		'neutral-80': '#334155',
		'neutral-70': '#475569',
		'neutral-60': '#64748B',
		'neutral-50': '#94A3B8',
		'neutral-40': '#CBD5E1',
		'neutral-30': '#E2E8F0',
		'neutral-20': '#F1F5F9',
		'neutral-10': '#F8FAFC'
	  }
    },
    fontSize: {
      "heading-1": [
        "3rem",
        {
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "heading-2": [
        "2.5rem",
        {
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "heading-3": [
        "2rem",
        {
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "heading-4": [
        "1.5rem",
        {
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "heading-5": [
        "1.125rem",
        {
          lineHeight: "120%",
          fontWeight: "600",
        },
      ],
      "body-1": [
        "1.125rem",
        {
          lineHeight: "180%",
          letterSpacing: "0.5%",
          fontWeight: "400",
        },
      ],
      "body-2": [
        "1rem",
        {
          lineHeight: "180%",
          letterSpacing: "0.5%",
          fontWeight: "400",
        },
      ],
      "body-3": [
        "0.875rem",
        {
          lineHeight: "160%",
          letterSpacing: "0.5%",
          fontWeight: "400",
        },
      ],
      button: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.2px",
          fontWeight: "500",
        },
      ],
    },
  },
  plugins: [],
};

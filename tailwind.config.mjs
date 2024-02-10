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
        // Primitive colors
        neutral: {
          100: "rgba(var(--neutral-100), <alpha-value>)",
          90: "rgba(var(--neutral-90), <alpha-value>)",
          80: "rgba(var(--neutral-80), <alpha-value>)",
          70: "rgba(var(--neutral-70), <alpha-value>)",
          60: "rgba(var(--neutral-60), <alpha-value>)",
          50: "rgba(var(--neutral-50), <alpha-value>)",
          40: "rgba(var(--neutral-40), <alpha-value>)",
          30: "rgba(var(--neutral-30), <alpha-value>)",
          20: "rgba(var(--neutral-20), <alpha-value>)",
          10: "rgba(var(--neutral-10), <alpha-value>)",
          5: "rgba(var(--neutral-5), <alpha-value>)",
        },

        // Alias colors
        accent: "rgba(var(--accent), <alpha-value>)",
        'background-primary': "rgba(var(--background-primary), <alpha-value>)",
        surface: "rgba(var(--surface), <alpha-value>)",

        content: {
          primary: "rgba(var(--content-primary), <alpha-value>)",
          weak: "rgba(var(--content-weak), <alpha-value>)",
          weaker: "rgba(var(--content-weaker), <alpha-value>)",
          weakest: "rgba(var(--content-weakest), <alpha-value>)"
        },

        border: {
          primary: "rgba(var(--neutral-20), <alpha-value>)",
          hover: "rgba(var(--neutral-30), <alpha-value>)",
        }
      },
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

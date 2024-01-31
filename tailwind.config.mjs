/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
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
	  "button": [
        "1rem",
        {
          lineHeight: "1.5rem",
		  letterSpacing: "0.5px",
          fontWeight: "600",
        },
      ],
    },
  },
  plugins: [],
};

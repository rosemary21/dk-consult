import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
        },
        gray: "var(--gray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        white: "var(--white)",
        "text-gray": "var(--text-gray)",
      },
    },
  },
  plugins: [],
};

export default config;

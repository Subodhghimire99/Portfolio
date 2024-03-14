import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xl: "1920px",
      },
    },
    extend: {
      colors:{
        background: "hsl(var(--background))",
        primary: "hsl(var(--foreground))",
        card:"hsl(var(--card-background))",
        cardPrimary:"hsl(var(--card-primary))",
      }
    },
  },
  plugins: [],
};
export default config;

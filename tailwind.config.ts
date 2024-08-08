import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        menGrid: "url('/men.png')",
        phrase: "url('/phrase.png')",
        teens: "url('/teens.png')",
        color: "url('/color.png')",
        men: "url('/men.png')",
        women: "url('/women.png')",
        images: "url('/images.png')",
      },
    },
  },
  plugins: [],
};
export default config;

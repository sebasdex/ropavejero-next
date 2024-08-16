import { log } from "console";
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
        phrase: "url('/collection/phrase.webp')",
        teens: "url('/teens.png')",
        color: "url('/collection/color.webp')",
        men: "url('/collection/men.webp')",
        images: "url('/collection/images.webp')",
        funny: "url('/collection/funny.webp')",
        logo: "url('/collection/logo.webp')",
        unique: "url('/collection/unique.png')",
        women: "url('/collection/women.png')",
      },
    },
  },
  plugins: [],
};
export default config;

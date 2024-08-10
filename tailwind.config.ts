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
        phrase: "url('/collection/phrase.png')",
        teens: "url('/teens.png')",
        color: "url('/collection/color.png')",
        men: "url('/collection/men.png')",
        images: "url('/collection/images.png')",
        funny: "url('/collection/funny.png')",
        logo: "url('/collection/logo.png')",
        unique: "url('/collection/unique.png')",
        women: "url('/collection/women.png')",
      },
    },
  },
  plugins: [],
};
export default config;

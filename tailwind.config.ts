import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {},
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;

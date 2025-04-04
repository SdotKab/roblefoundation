import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'gray-20': '#FFFFFF',
  			'gray-50': '#dfebf0',
  			'gray-100': '#ccdbdf',
  			'gray-500': '#00475e',
  			'primary-100': '#e0f7ff',
  			'primary-300': '#a3e2ff',
  			'primary-500': '#66bfff',
  			'secondary-400': '#9c641f',
  			'secondary-500': '#ffc85b',
		  }
	
  	},
  },
  plugins: [],
} satisfies Config;

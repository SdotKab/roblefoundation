import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Roboto({
  weight: ["400" , "500" , "700" , "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Roble Foundation",
  description: "Water to Sanag",
  icons: {
    icon: [
      {
        url: '/images/water.svg',
        href: '/images/water.svg',
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        Footer
      </body>
    </html>
  );
}

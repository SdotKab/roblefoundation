import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/Footer/Footer";

const font = Roboto({
  weight: ["400" , "500" , "700" , "900"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "The Roble Foundation",
  description: "Water to Sanag",
  icons: {
    icon: [
      {
        url: '/water.svg',
        href: '/water.svg',
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
        className={`app ${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import HUD from "../components/HUD/HUD";

import LenisProvider from "../components/LenisProvider/LenisProvider";
import Footer from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const sugo = localFont({
  src: [
    {
      path: "../../public/fonts/Sugo-Pro-Classic-Bold-trial.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Sugo-Pro-Display-Light-trial.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sugo",
  display: "swap",
});

const coolvetica = localFont({
  src: "../../public/fonts/Coolvetica Rg.otf",
  weight: "900",
  style: "normal",
  variable: "--font-coolvetica",
  display: "swap",
});

const coolCond = localFont({
  src: "../../public/fonts/Coolvetica Rg Cond.otf",
  weight: "900",
  style: "normal",
  variable: "--font-coolcond",
  display: "swap",
});

const samarkan = localFont({
  src: "../../public/fonts/samarkan.ttf",
  weight: "900",
  style: "normal",
  variable: "--font-samarkan",
  display: "swap",
});

const baloo = localFont({
  src: "../../public/fonts/baloo.ttf",
  weight: "900",
  style: "normal",
  variable: "--font-baloo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuldeep",
  description:
    "Hey myself Kuldeep K Pandit, Full stack developer transitioning to data science",
  keywords: [
    "Kuldeep K Pandit",
    "Full stack developer",
    "Data science",
    "Portfolio",
  ],
  authors: [
    {
      name: "Kuldeep K Pandit",
      url: "https://vaultmeet.xyz",
    },
  ],
  icons: {
    icon: "/icons/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className={`${geistSans.variable} ${geistMono.variable} ${sugo.variable} ${coolvetica.variable} ${coolCond.variable} ${samarkan.variable} ${baloo.variable} antialiased`}
        >
          <LenisProvider>
            <Navbar />
            {children}
            <HUD />
            <Footer />
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}

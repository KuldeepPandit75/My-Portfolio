import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import HUD from "../components/HUD/HUD";

import LenisProvider from "../components/LenisProvider/LenisProvider";
import Footer from "../components/Footer/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";

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
  verification:{
    google:"1cGXMGPmfZNnZ6e3aP4TjOWuhl1932FZFMKckdOL7XY"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <GoogleAnalytics />
      <body>
        <div
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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

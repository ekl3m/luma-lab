import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// Konfigurujemy fonty
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald", // To nazwa zmiennej, którą łapiemy w CSS
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luma Lab",
  description: "Laser cutting & engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* Dodajemy zmienne fontów do <body> */}
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

// Font configuration using next/font
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lumalab.pl'),
  title: {
    default: 'LUMA LAB - Inżynieria & Design',
    template: '%s | LUMA LAB', 
  },
  description: 'Profesjonalne usługi inżynierskie w Łodzi. Druk 3D, projektowanie CAD, inżynieria odwrotna i CNC. Realizujemy projekty od pomysłu do gotowego produktu.',
  keywords: ['Druk 3D', 'Inżynieria Odwrotna', 'Projektowanie CAD', 'CNC', 'Łódź', 'Prototypowanie', 'Luma Lab', 'Cięcie Laserem', 'Usługi Inżynierskie', 'LumaLab', 'Luma', 'Luma Lab Łódź', 'Luma Lab Druk 3D', 'Luma Lab CAD', 'Luma Lab CNC'],
  authors: [{ name: 'Luma Lab Team' }],
  openGraph: {
    title: 'Luma Lab - Precision Engineering',
    description: 'Twoja wizja, nasza precyzja. Usługi inżynierskie, Druk 3D i Prototypowanie.',
    url: 'https://lumalab.pl',
    siteName: 'Luma Lab',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* Add font variables to <body> */}
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
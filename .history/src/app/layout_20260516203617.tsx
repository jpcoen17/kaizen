// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAIZEN BBQ Grill & Shabu-Shabu | Japanese AYCE Restaurant",
  description:
    "Nikmati pengalaman All You Can Eat Japanese BBQ Grill & Shabu-Shabu premium di KAIZEN. Tersedia di Malang, Surabaya, Bali, Jogja, dan Makassar.",
  keywords: ["KAIZEN", "BBQ", "Shabu-Shabu", "AYCE", "Japanese Restaurant", "All You Can Eat"],
  openGraph: {
    title: "KAIZEN BBQ Grill & Shabu-Shabu",
    description: "Premium Japanese AYCE Restaurant Experience",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-body bg-kaizen-black text-white`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "🔮 MoonLetters",
  description: "Get your daily horoscope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}  bg-primary`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

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
      <body className={`${outfit.className} min-h-dvh bg-primary`}>
        {children} <Footer />
      </body>
    </html>
  );
}

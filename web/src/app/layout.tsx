import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = localFont({
  src: "../fonts/KumbhSans-Variable.ttf",
  variable: "--font-kumbh",
  weight: "100 900",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "26lights",
  description: "26lights — growth engineering studio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-unit="business" className={`${kumbhSans.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

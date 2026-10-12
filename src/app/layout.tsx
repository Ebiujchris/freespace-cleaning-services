import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreshSpace Laundry & Cleaning Services | Kampala",
  description:
    "FreshSpace Laundry & Cleaning Services provides laundry, ironing, home, office, and deep cleaning in Kampala and Wakiso. Request an estimate.",
  keywords: [
    "laundry services Kampala",
    "laundry cleaners in Kampala",
    "laundry and ironing Kampala",
    "cleaning services Kampala",
    "laundry service Wakiso",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

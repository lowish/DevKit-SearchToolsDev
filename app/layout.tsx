import type { Metadata } from "next";
import { Geist_Mono, Nunito, Outfit } from "next/font/google";
import "./globals.css";

const bodySans = Nunito({
  variable: "--font-body-sans",
  subsets: ["latin"],
});

const headingSans = Outfit({
  variable: "--font-heading-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Search Tools Dashboard",
  description: "Modular App Router landing page for modern developer tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodySans.variable} ${headingSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

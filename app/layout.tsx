"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Head from "./head";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Analytics />
    <html lang="en">
      <Head />
      <script defer src="https://eu.umami.is/script.js" data-website-id="0bd010de-069e-437a-8c2a-e739e0eb5583"></script>
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

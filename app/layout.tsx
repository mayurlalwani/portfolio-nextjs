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
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

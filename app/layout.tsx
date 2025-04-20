"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import LanguageSelector from "../components/LanguageSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Multilingual News Platform",
  description: "AI + Human Editorial Insight for Multilingual News",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50 min-h-screen flex flex-col"}>
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Multilingual News Platform</h1>
          <LanguageSelector />
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-white shadow p-4 text-center text-gray-500 text-sm">
          &copy; 2024 Multilingual News Platform. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

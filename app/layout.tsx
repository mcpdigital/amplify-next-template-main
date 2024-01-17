// app/layout.tsx

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
const inter = Inter({ subsets: ["latin"] });
const usetheme = "light";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeToggle />
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}

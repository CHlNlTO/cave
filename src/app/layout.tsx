import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/Navbar/Navbar";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cave - your business, online.",
  description: "We offer seamless websites, putting businesses online.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning >
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

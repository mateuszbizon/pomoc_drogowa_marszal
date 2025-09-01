import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { HERO_SUBTITLE } from "@/constants";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobilny Serwis TIR Zgorzelec. Pomoc Drogowa",
  description: HERO_SUBTITLE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/assets/css/font.css";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UpArrow from "@/components/layout/UpArrow";
// import AnnouncementBanner from "@/components/landing-page/AnnouncementBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokamak Rollup Hub",
  description: "L2 On-Demand Tailored Ethereum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Header />
          {/* <AnnouncementBanner /> */}
          {children}
          <Footer />
          <UpArrow />
        </Provider>
      </body>
    </html>
  );
}

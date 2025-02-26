import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNavDemo} from "@/components/ui/Heade";
import Footer from "@/components/ui/Footer";
import 'animate.css';
import BinaryAnimation from "@/components/moving";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body suppressHydrationWarning
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNavDemo />
        <BinaryAnimation/>
        <div className="bg-primary z-10">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

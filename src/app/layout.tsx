import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/navbar/Navbar";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoongle | Pet App",
  description: "Digital home for your pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster position="top-center" reverseOrder={true} />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}

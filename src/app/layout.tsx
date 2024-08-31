import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";


const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursor Boilerplate",
  description: "Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        
        <div>{children}</div>
      
      </body>
    </html>
  );
}

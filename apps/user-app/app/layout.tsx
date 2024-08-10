
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import { AppbarClient } from "../AppBarClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextPay",
  description: "Your Next Pay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        
        <body className={inter.className}>
        <AppbarClient></AppbarClient>
          {children}
          
          </body>
      </Providers>
    </html>
  );
}

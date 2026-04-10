import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Children.lk",
  description: "Children.lk is a platform for protecting children and giving them a better future",
};

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar className={inter.className} />
        {children}
      </body>
    </html>
  );
}
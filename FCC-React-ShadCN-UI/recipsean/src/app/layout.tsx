import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean's ShadCN Component Testing Ground (ThunderDome)",
  description: "Trying out many VariaSeans of components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sean's ShadCN Component Testing Ground (ThunderDome)</title> {/* Set the title here */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
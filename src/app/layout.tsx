import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyStore - Online Shopping",
  description: "Shop the latest products at MyStore with fast delivery and great deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <main className="">
          {children}
        </main>

        {/* Footer placeholder */}
        <footer className="bg-white shadow-inner mt-10 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} MyStore. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

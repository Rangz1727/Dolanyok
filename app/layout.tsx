import type { Metadata } from "next";
import localFont from "next/font/local"; // Import localFont
import "./globals.css";

// 1. Daftarkan Font Glacial Indifference
const glacial = localFont({
  src: [
    {
      path: "../public/fonts/GlacialIndifference-Regular.otf", // Hanya mundur satu folder (..)
      weight: "400",
    },
    {
      path: "../public/fonts/GlacialIndifference-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: "Dolan Yok Group",
  description: "Digital Media & City Guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 2. Tambahkan variable font di body dan gunakan class font-sans */}
      <body className={`${glacial.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
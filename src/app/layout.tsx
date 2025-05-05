import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Giga({
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Enslin Inc. Attorneys - Client Fica Documents",
  description: "Your Trusted Partner In Law - Fica Required Forms ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}

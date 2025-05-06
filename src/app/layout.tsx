import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";

const lexend = Lexend_Giga({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Enslin Inc. Attorneys - Client Fica Documents",
  description: "Your Trusted Partner In Law - Fica Required Forms ",
  icons: {
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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

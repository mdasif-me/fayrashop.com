import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles/globals.css";
import { rootMetadata } from "@/config/root-metadata.config";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const metadata: Metadata = { ...rootMetadata };
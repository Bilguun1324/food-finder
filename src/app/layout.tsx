import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProviderContainer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderContainer>
        <body className={inter.className}>{children}</body>
      </ProviderContainer>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',});

export const metadata: Metadata = {
  title: "cised-p",
  description: "cised official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

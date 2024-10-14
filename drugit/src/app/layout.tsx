"use client";
// app/layout.tsx
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";
const NeueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Light.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Medium.otf",
      weight: "1000",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-LightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-MediumItalic.otf",
      weight: "1000",
      style: "italic",
    },
    {
      path: "../../public/fonts/NeueMontreal/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],

  variable: "--font-NeueMontreal",
});

interface RootLayoutProps {
  children: ReactNode;
}
const className =
  typeof NeueMontreal !== "undefined" ? NeueMontreal.variable : "";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={className}>{children}</body>
    </html>
  );
}

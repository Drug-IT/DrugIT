"use client";
// app/layout.tsx
import { Layout } from "@/components/layout";
import { ColorModeScript } from "@chakra-ui/react";
import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css"; // Add any global styles here.

import { extendTheme } from "@chakra-ui/react";
import { theme } from "@saas-ui/react";

import components from "@/theme/components";
import { fontSizes } from "@/theme/foundations/typography";

interface RootLayoutProps {
  children: ReactNode;
  headerProps?: any; // Adjust types as necessary
  footerProps?: any; // Adjust types as necessary
}
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

export default function RootLayout({
  children,
  headerProps,
  footerProps,
}: RootLayoutProps) {
  const customTheme = extendTheme(
    {
      config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
      },
      fontSizes,
      components,
    },
    theme
  );
  return (
    <html lang="en">
      <body className={`${NeueMontreal.variable}`}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <SaasProvider theme={customTheme}>
          <AuthProvider>
            <Layout headerProps={headerProps} footerProps={footerProps}>
              {children}
            </Layout>
          </AuthProvider>
        </SaasProvider>
      </body>
    </html>
  );
}

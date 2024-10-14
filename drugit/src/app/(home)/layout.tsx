"use client";
// app/layout.tsx
import { Layout } from "@/components/layout";
import { ColorModeScript } from "@chakra-ui/react";
import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { ReactNode } from "react";
import "../globals.css"; // Add any global styles here.

import { extendTheme } from "@chakra-ui/react";
import { theme } from "@saas-ui/react";

import components from "@/theme/components";
import { fontSizes } from "@/theme/foundations/typography";

interface HomeLayoutProps {
  children: ReactNode;
  footerProps?: any;
}

export default function HomeLayout({ children, footerProps }: HomeLayoutProps) {
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
    <>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <SaasProvider theme={customTheme}>
        <AuthProvider>
          <Layout footerProps={footerProps}>{children}</Layout>
        </AuthProvider>
      </SaasProvider>
    </>
  );
}

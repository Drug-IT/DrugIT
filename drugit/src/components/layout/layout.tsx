"use client";
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";

import { Footer, FooterProps } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  children: ReactNode;
  footerProps: FooterProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, footerProps } = props;
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Header />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer {...footerProps} />
    </Box>
  );
};

import { HStack } from "@chakra-ui/react";
import * as React from "react";

import { usePathname } from "next/navigation";

import siteConfig from "@/data/config";

import { NavLink } from "@/components/nav-link";

import { useScrollSpy } from "@/hooks/use-scrollspy";

import { useDisclosure, useUpdateEffect } from "@chakra-ui/react";

import { MobileNavButton, MobileNavContent } from "../mobile-nav/mobile-nav";
import ThemeToggle from "./theme-toggle";

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure();
  const pathName = usePathname();
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    }
  );

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>();

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus();
  }, [mobileNav.isOpen]);

  return (
    <HStack spacing="2" flexShrink={0}>
      {siteConfig.header.links.map(({ href, id, ...props }, i) => {
        return (
          <NavLink
            display={["none", null, "block"]}
            href={href || `/#${id}`}
            key={i}
            isActive={
              !!(
                (id && activeId === id) ||
                (href && !!pathName.match(new RegExp(href)))
              )
            }
            {...props}
          >
            {props.label}
          </NavLink>
        );
      })}

      <ThemeToggle />

      <MobileNavButton
        ref={mobileNavBtnRef}
        aria-label="Open Menu"
        onClick={mobileNav.onOpen}
      />

      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </HStack>
  );
};

export default Navigation;

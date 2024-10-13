"use client";

import {
  BeakerIcon,
  CubeTransparentIcon,
  CursorArrowRaysIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/workspace", icon: HomeIcon },
  { name: "Molecular Analysis", href: "/workspace/analysis", icon: BeakerIcon },
  {
    name: "Target Driven",
    href: "/workspace/target",
    icon: CursorArrowRaysIcon,
  },
  { name: "Docking", href: "/workspace/docking", icon: CubeTransparentIcon },
  { name: "Contact", href: "/workspace/contact", icon: UserGroupIcon },
];

export default function NavLinks({ isCollapsed }: { isCollapsed: boolean }) {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] items-center rounded-md p-3 text-sm font-medium hover:bg-[#9256F5] hover:bg-opacity-45 hover:text-white",
              {
                "bg-[#9256F5] bg-opacity-45 text-white": pathname === link.href,
                "text-gray-400": pathname !== link.href,
                "justify-center": isCollapsed,
                "justify-start": !isCollapsed,
              }
            )}
            title={isCollapsed ? link.name : undefined}
          >
            <LinkIcon className={clsx("w-6", { "mr-2": !isCollapsed })} />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        );
      })}
    </>
  );
}

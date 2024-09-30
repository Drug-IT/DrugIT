"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import logolight from "../../public/logo-light.svg";
import ModeToggle from "./mode-toggle";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuList } from "./ui/navigation-menu";

export default function NavBar() {
  const { theme } = useTheme();
  return (
    <div className="flex fixed justify-between min-w-full w-full shadow-md border-primary bg-opacity-10 backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 p-2 z-[50]">
      <div className="flex">
        <Image src={logolight} alt="Logo Light" width={100} height={100} />
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <h1 className="font-bold text-4xl">DrugIT</h1>
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex items-center gap-2 max-[825px]:hidden">
        <Link href="/home">
          <Button variant="default">Features</Button>
        </Link>
        <Link href="/">
          <Button variant="default">Team</Button>
        </Link>
        <Link href="/">
          <Button variant="default">Blog</Button>
        </Link>
        <Link href="/">
          <Button variant="default">Sign in</Button>
        </Link>
        <Link href="/">
          <Button variant="filled">Get started</Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

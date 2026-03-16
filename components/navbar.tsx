"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "X&CIRCLE", href: "/circle" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="absolute top-0 right-0 z-50 flex items-center gap-6 px-8 py-6 text-xs tracking-widest font-medium uppercase">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`pb-1 transition-colors hover:text-foreground/80 ${
            pathname === link.href
              ? "border-b border-[#fcaa2d] text-foreground"
              : "text-foreground/60"
          }`}
        >
          {link.label}
        </Link>
      ))}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-xs tracking-widest font-medium uppercase text-foreground/60 hover:text-foreground/80 h-auto p-0 pb-1 data-[state=open]:bg-transparent">
              FUNDS
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-48 gap-1 p-2 bg-background border border-border rounded-md">
                {["HartBeat Ventures", "Aoki Labs", "Markham Valley Ventures", "BYL Ventures", "X&KSK", "Fifth Quarter Ventures"].map((fund) => (
                  <li key={fund}>
                    <NavigationMenuLink>
                      <span className="block px-3 py-2 text-xs hover:bg-secondary rounded cursor-default">
                        {fund}
                      </span>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link
        href="/sanbo"
        className={`pb-1 transition-colors hover:text-foreground/80 ${
          pathname === "/sanbo"
            ? "border-b border-[#fcaa2d] text-foreground"
            : "text-foreground/60"
        }`}
      >
        SANBO
      </Link>
    </nav>
  );
}

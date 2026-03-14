import { SparklesIcon } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { Button } from "./ui/button";

type NavLinkType = {
  label: string;
  href: Route;
};

const navLinks: Array<NavLinkType> = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/generate",
    label: "Generate",
  },
  {
    href: "/",
    label: "Privacy Policy",
  },
];
/**
 * TODO: show active route
 */
export default function Header() {
  return (
    <header className="p-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SparklesIcon className="size-7" />
          <h1 className="text-xl font-bold md:text-2xl">Claustr</h1>
        </Link>
        {/* Links */}
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              className="text-muted-foreground/95 hover:text-foreground text-sm transition-colors duration-200 ease-out"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button type="button" variant={"link"}>
            Sign in
          </Button>
          <Button type="button">Sign up</Button>
        </div>
      </div>
    </header>
  );
}

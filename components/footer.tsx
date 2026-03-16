import { Route } from "next";
import Link from "next/link";

type FooterType = {
  label: string;
  href: Route;
};

const footerLinks: Array<FooterType> = [
  { href: "#", label: "Dashboard" },
  { href: "#", label: "Templates" },
  { href: "#", label: "Settings" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Contact Support" },
];

export default function Footer() {
  return (
    <footer className="border-border bg-background border-t px-6 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Brand (kept exactly as link text) */}
        <Link href="/" className="text-lg font-semibold tracking-wider">
          CLAUSTR
        </Link>

        {/* Navigation */}
        <nav className="text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-sm">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-foreground tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm tracking-wider">
          © 2026 ByteYogi AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

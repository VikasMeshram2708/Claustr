"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Route } from "next";

import {
  SparklesIcon,
  Loader2Icon,
  ChevronsUpDownIcon,
  MenuIcon,
  CircleUserIcon,
} from "lucide-react";

import { authClient } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type NavLinkType = {
  label: string;
  href: Route;
};

const navLinks: NavLinkType[] = [
  { href: "/", label: "Home" },
  { href: "/generate", label: "Generate" },
  { href: "/pricing", label: "Pricing" },
];

/* ---------------- Nav Links ---------------- */

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-sm transition-colors ${
              active
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

/* ---------------- Mobile Nav ---------------- */

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col gap-6 pt-10">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="text-lg">
            {link.label}
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
}

/* ---------------- User Menu ---------------- */

type UserProps = {
  user: {
    name?: string | null;
    image?: string | null;
  };
};

function UserHandle({ user }: UserProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2">
          <Image
            src={user?.image ?? "/avatar.png"}
            alt={user?.name ?? "User"}
            width={24}
            height={24}
            className="rounded-full"
          />

          <span className="text-sm">{user?.name ?? "Anon"}</span>

          <ChevronsUpDownIcon className="size-4 opacity-60" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-(--radix-popper-anchor-width)"
      >
        <DropdownMenuLabel className="text-muted-foreground">
          Account
        </DropdownMenuLabel>

        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/* ---------------- Header ---------------- */

export default function Header() {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  return (
    <header className="">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <MobileNav />

          <Link href="/" className="flex items-center gap-2">
            <SparklesIcon className="size-7" />
            <h1 className="text-xl font-bold md:text-2xl">Claustr</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <NavLinks />
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <Loader2Icon className="animate-spin" />
          ) : user ? (
            <UserHandle user={user} />
          ) : (
            <Button asChild>
              <Link href="/signin">
                <CircleUserIcon />
                Sign in
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

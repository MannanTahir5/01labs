"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center bg-transparent ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink   href="/">Home</HoveredLink>
        <HoveredLink   href="/services">Services</HoveredLink>
        <HoveredLink   href="/about">About</HoveredLink>
        <HoveredLink   href="/contact">Contact</HoveredLink>
        
         </Menu>
    </div>
  );
}

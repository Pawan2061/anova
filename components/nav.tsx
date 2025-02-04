"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  Home,
  MessageSquare,
  User,
  LogIn,
  UserPen,
  Images,
  Info,
} from "lucide-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Info className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: <Images className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Register",
      link: "/register",
      icon: <UserPen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative   w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

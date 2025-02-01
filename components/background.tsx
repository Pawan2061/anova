"use client";

import Tiles from "@/components/ui/tiles";
import Image from "next/image";
import logo from "../public/logo.png";
import jainlogo from "../public/Jain-logo.png";
import Link from "next/link";

export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <div className="h-full md:px-8 mt-4 lg:px-16 animate-float">
        <Image src={jainlogo} alt="" width={200} height={200} />
        <Tiles rows={30} cols={30} tileSize="md" />
      </div>
    </div>
  );
}

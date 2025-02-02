"use client";

import Tiles from "@/components/ui/tiles";
import Image from "next/image";
import jainlogo from "../public/Jain-logo.png";

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="h-full md:px-8 mt-4 lg:px-16 animate-float">
        <a href="/" className="pointer-events-auto z-10">
          <Image src={jainlogo} alt="Jain Logo" width={200} height={200} />
        </a>
        <Tiles rows={30} cols={30} tileSize="md" />
      </div>
    </div>
  );
}

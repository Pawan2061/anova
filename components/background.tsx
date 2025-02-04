"use client";

import Tiles from "@/components/ui/tiles";
import Image from "next/image";
import jainlogo from "../public/Jain-logo.png";

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex flex-col justify-center items-center">
      <div className="animate-float mt-4 flex justify-center items-center">
        <a href="/" className="pointer-events-auto z-10">
          <Image src={jainlogo} alt="Jain Logo" width={200} height={200} />
        </a>
      </div>
      <Tiles rows={30} cols={30} tileSize="md" />
    </div>
  );
}

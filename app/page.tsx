"use client";

import { AnnounceCard } from "@/components/ui/announce-card";
import HeroPill from "../components/ui/hero-pill";

import { BentoDemo } from "@/components/event";
export default function Home() {
  return (
    <section className="mt-16  flex flex-col mx-auto items-center  max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 ">
      <div className="flex justify-between">
        <HeroPill
          href={"/register"}
          label={"Techathon in Feb-6 Conducted by anova club data science"}
        />
      </div>

      <AnnounceCard />
      <BentoDemo />
    </section>
  );
}

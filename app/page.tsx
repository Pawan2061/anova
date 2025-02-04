"use client";

import { AnnounceCard } from "@/components/ui/announce-card";
import HeroPill from "../components/ui/hero-pill";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { BentoDemo } from "@/components/event";
import TextShimmerBasic from "@/components/ui/first-text";
export default function Home() {
  return (
    <section className="mt-16  flex flex-col mx-auto items-center  max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 ">
      <div className="flex justify-between p-7">
        <TextShimmer className="font-mono text-2xl" duration={1}>
          {"Anova Club {Data-Science club of Jain University}"}
        </TextShimmer>
      </div>

      <AnnounceCard />
      <BentoDemo />
    </section>
  );
}

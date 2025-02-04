"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import sureshsir from "../public/sureshsir.jpg";
import sathwik from "../public/saathwikh photo  - Saathwikh Gargesh.jpg";
import nishant from "../public/Nishant Tiwary.jpeg";
import dharsiny from "../public/Dharshiny S P.jpeg";
import jaideep from "../public/jaideep.jpg";
const people = [
  {
    id: 1,
    name: "Sathwik Gargesh",
    designation: "ANOVA LEAD",
    image: sathwik.src,
  },
  {
    id: 2,
    name: "Dr N .Suresh Kumar ",
    designation: "ANOVA COORDINATOR",
    image: sureshsir.src,
  },
  // {
  //   id: 3,
  //   name: "DR Ramesh",
  //   designation: "HOD-ANOVA CLUB",
  //   image:
  //     "https://drive.google.com/file/d/1kGC7g8F4bLH2tflTOswNql4Ds6QWjrGp/view",
  // },
  {
    id: 4,
    name: "Ms Dharsiny",
    designation: "STUDENT COORDINATOR",
    image: dharsiny.src,
  },
  {
    id: 5,
    name: "Jaideep ",
    designation: "SECRETARY",
    image: jaideep.src,
  },
  {
    id: 6,
    name: "Mr Nishant Tiwary",
    designation: "TECHNICAL LEAD",
    image: nishant.src,
  },
];

function People() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-row items-center justify-center mb-2 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </section>
  );
}

export { People };

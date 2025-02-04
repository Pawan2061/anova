"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import sureshsir from "../public/sureshsir.jpg";
import sathwik from "../public/saathwikh photo  - Saathwikh Gargesh.jpg";
import nishant from "../public/Nishant Tiwary.jpeg";
// import dharsiny from "../public/Dharshiny S P.jpeg";
import jaideep from "../public/jaideep.jpg";
import hod from "../public/hod.png";
import dharsiny from "../public/dharsininew.png";
const people = [
  {
    id: 3,
    name: "Dr. Ramesh Sekaran",
    designation: "PROGRAM HEAD",
    image: hod.src,
  },
  {
    id: 2,
    name: "Dr N .Suresh Kumar ",
    designation: "Faculty COORDINATOR",
    image: sureshsir.src,
  },
  {
    id: 1,
    name: "Kottur Saathwikh Gargesh",
    designation: "SCHOOL LEAD",
    image: sathwik.src,
  },

  {
    id: 4,
    name: " Dharshiny.S.P",
    designation: "DEPARTMENT LEAD",
    image: dharsiny.src,
  },
  {
    id: 5,
    name: " Guthireddy Venkata Jaideep Reddy ",
    designation: "SECRETARY",
    image: jaideep.src,
  },
  {
    id: 6,
    name: "Nishant Tiwary",
    designation: "TECHNICAL TEAM LEAD",
    image: nishant.src,
  },
];

function People() {
  return (
    <section>
      <h1 className="text-3xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-row items-center justify-center mb-2 my-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </section>
  );
}

export { People };

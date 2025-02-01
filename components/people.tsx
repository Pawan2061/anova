"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Sathwik Gargesh",
    designation: "ANOVA LEAD",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 2,
    name: "Dr N .Suresh Kumar ",
    designation: "ANOVA COORDINATOR",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 3,
    name: "DR Ramesh",
    designation: "HOD-ANOVA CLUB",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 4,
    name: "Ms Dharsiny",
    designation: "STUDENT COORDINATOR",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 5,
    name: "Jaideep ",
    designation: "SECRETARY",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    id: 6,
    name: "Mr Nishant Tiwary",
    designation: "TECHNICAL LEAD",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
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

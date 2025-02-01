"use client";

import { useRef } from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const dummyContent = (
  <div>
    <p className="pb-4 font-mono text-sm text-zinc-500">
      <span className="flex font-bold text-xl">About Anova Club</span>
      <br />
      ANOVA Club is a vibrant technical club committed to nurturing innovation
      and technical prowess among students within the CSE - Data Science
      Program. Our mission is to provide a platform for practical learning and
      skill enhancement through workshops, seminars, hackathons, and technical
      competitions. These activities foster collaboration, creativity, and
      problem-solving abilities, preparing students to thrive in the dynamic
      tech landscape.
      <br />
      Participation in the ANOVA Club offers valuable hands-on experience,
      networking opportunities with industry professionals, and the development
      of competencies essential for success in data science and beyond. ANOVA
      Club also aims to motivate students to pursue global certifications,
      participate in college competitions of interest, publish research papers,
      and undertake mini-projects in the field of data science.
      <br />
      <span className="font-bold text-xl my-6">MISSION</span>
      <br />
      Empowering data science students to become industry leaders through
      practical learning and innovation.
      <br />
      <span className="font-bold text-xl">VISION</span>
      <br />
      To be the premier platform for nurturing data science talent and driving
      technological advancements.
      <br />
      <br />
      <span className="font-bold text-xl">Contacts</span>
      <br />
      <span className="font-bold">Student Organizers:</span>
      <br />
      Saathwikh -{" "}
      <a href="tel:+917842532004" className="text-blue-500">
        +91 7842 53 20 04
      </a>
      <br />
      Dharshiny -{" "}
      <a href="tel:+918248404135" className="text-blue-500">
        +91 8248 40 41 35
      </a>
      <br />
      <span className="font-bold">Faculty Coordinator:</span>
      <br />
      Dr. N. Suresh Kumar -{" "}
      <a href="tel:+918056744016" className="text-blue-500">
        +91 8056 74 40 16
      </a>
      <br />
      <span className="font-bold">Email:</span>{" "}
      <a href="mailto:anovaclub@gmail.com" className="text-blue-500">
        anovaclub@gmail.com
      </a>
      <br />
      <span className="font-bold">Instagram:</span>{" "}
      <a
        href="https://www.instagram.com/anova_ds"
        target="_blank"
        className="text-blue-500"
      >
        @anova_ds
      </a>
      <br />
      <span className="font-bold">LinkedIn:</span>{" "}
      <a
        href="https://www.linkedin.com/company/anova-club"
        target="_blank"
        className="text-blue-500"
      >
        Anova Club
      </a>
    </p>
  </div>
);

function ScrollProgressBasic1() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="h-[350px] max-w-3xl overflow-auto px-8 pb-16 pt-16"
      ref={containerRef}
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900" />
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <div className="absolute left-0 top-0 h-1 w-full bg-[#E6F4FE] dark:bg-[#111927]" />
        <ScrollProgress
          // @ts-expect-error
          containerRef={containerRef}
          className="absolute top-0 bg-[#0090FF]"
        />
      </div>
      {dummyContent}
    </div>
  );
}

export { ScrollProgressBasic1 };

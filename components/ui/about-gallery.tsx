import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";
import anova1 from "../../public/anova1.png";
import anova2 from "../../public/anova2.png";
import anova3 from "../../public/anova3.png";
import anova4 from "../../public/anova4.png";
import anova5 from "../../public/anova5.png";

import anova6 from "../../public/anova6.png";
import anova7 from "../../public/anova7.png";
import anova8 from "../../public/anova8.png";

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "ICADIE  CONFERENCE",
    desc: "DATA-SCIENCE, JAIN UNIVERSITY",
    url: anova1.src,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: anova2.src,
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "INDUCTION  2024/25",
    desc: "First years classed led by seniors",
    url: anova3.src,
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "TECHATHON ",
    desc: "Hackathon conducted by anova club ",
    url: anova7.src,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "TECHATHON",
    desc: "Hackathon conducted by anova club",
    url: anova5.src,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "TECHATHON",
    desc: "Sunny tropical beach",
    url: anova6.src,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "TECHATHON ",
    desc: "Hackathon conducted by anova club ",
    url: anova7.src,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 8,
    type: "image",
    title: "ICADIE  CONFERENCE",
    desc: "DATA-SCIENCE, JAIN UNIVERSITY",
    url: anova1.src,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  //   {
  //     id: 9,
  //     type: "image",
  //     title: "ICADIE  CONFERENCE",
  //     desc: "DATA-SCIENCE, JAIN UNIVERSITY",
  //     url: anova1.src,
  //     span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  //   },
];

export function AboutGallery() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Anova Club Gallery"
        description="Explore the gallery of anova club data-science"
      />
    </div>
  );
}

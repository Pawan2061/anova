import {
  FileTextIcon,
  FileInputIcon,
  Globe,
  Calendar1Icon,
  BellIcon,
} from "lucide-react/icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { DefaultDemo } from "./text/animated-text";

const features = [
  {
    Icon: FileTextIcon,
    name: "Workshop",
    description: " Mastering Data Visualization in R & Tableau",
    href: "/register",
    cta: "7th Feb",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileInputIcon,
    name: "Hackathon",
    description: "Codewave Hackathon 3.0",
    href: "/register",
    cta: "8th Feb,, Resigstrations Opens - 05-01-2025 ",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  // {
  //   Icon: Globe,
  //   name: "Event3 ",
  //   description: "Event3 from anova team.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  // },
  // {
  //   Icon: Calendar1Icon,
  //   name: "Event4",
  //   description: "Event4 from anova team.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  // },
  // {
  //   Icon: BellIcon,
  //   name: "Event5",
  //   description: "Event5 from anova team.",
  //   href: "/",
  //   cta: "Learn more",
  //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
  //   className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  // },
];

function BentoDemo() {
  return (
    <div className="flex flex-col space-y-16">
      <DefaultDemo />
      <BentoGrid className="lg:grid-rows-3 max-w-5xl">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export { BentoDemo };

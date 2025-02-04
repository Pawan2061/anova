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
    cta: "Register Now",
    background: (
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUURchc7AS4Hs_a8d7_eS8kXYRlhoWaxecg&s"
        className="absolute w-full opacity-40"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FileInputIcon,
    name: "Hackathon",
    description: "Codewave Hackathon 3.0",
    href: "/register",
    cta: "Register Now  ",
    background: (
      <img
        src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b"
        className="absolute  opacity-40"
      />
    ),
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
  {
    Icon: Calendar1Icon,
    name: "Future events",
    description: "Future events will be loaded",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4",
  },
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
      <BentoGrid className="lg:grid-rows-3 max-w-5xl ">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export { BentoDemo };

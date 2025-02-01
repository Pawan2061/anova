import { ScrollProgressBasic1 } from "@/components/about";
import { AboutAccordion } from "@/components/ui/more-about";

export default function About() {
  return (
    <section className="mt-16  flex flex-col mx-auto items-center max-w-6xl border rounded-2xl shadow-black bg-gray-100/60 ">
      <ScrollProgressBasic1 />
      <AboutAccordion />
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const items = [
  {
    id: "1",
    title: "What is ANOVA Club?",
    content:
      "ANOVA Club is a vibrant technical club committed to nurturing innovation and technical prowess among students within the CSE - Data Science Program. It provides a platform for practical learning through workshops, seminars, hackathons, and technical competitions.",
  },
  {
    id: "2",
    title: "What are the benefits of joining ANOVA Club?",
    content:
      "Participation offers hands-on experience, networking opportunities with industry professionals, and skill development essential for success in data science. It also encourages students to pursue certifications, publish research papers, and undertake mini-projects.",
  },
  {
    id: "3",
    title: "What is the mission of ANOVA Club?",
    content:
      "Empowering data science students to become industry leaders through practical learning and innovation.",
  },
  {
    id: "4",
    title: "What is the vision of ANOVA Club?",
    content:
      "To be the premier platform for nurturing data science talent and driving technological advancements.",
  },
];

function AboutAccordion() {
  return (
    <div className="space-y-4 max-w-3xl rounded-2xl px-8 py-3">
      <h2 className="text-xl font-bold"> More about anova</h2>
      <Accordion
        type="single"
        collapsible
        className="w-fit -space-y-px"
        defaultValue="3"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="border bg-background px-4 py-1  first:rounded-t-lg last:rounded-b-lg"
          >
            <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline text-zinc-600">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="pb-2 text-muted-foreground text-zinc-500">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export { AboutAccordion };

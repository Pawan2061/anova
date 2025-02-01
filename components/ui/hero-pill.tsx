import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroPillProps {
  href: string;
  label: string;
  announcement?: string;
  className?: string;
  isExternal?: boolean;
}

export default function HeroPill({
  href,
  label,
  announcement = "📣 Announcement",
  className,
  isExternal = false,
}: HeroPillProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <motion.a
        href={href}
        target={isExternal ? "_blank" : undefined}
        className={cn(
          "group flex w-full items-center justify-between gap-2 rounded-full",
          "bg-primary/20 ring-1 ring-accent",
          "px-3 py-1.5 sm:px-4 sm:py-2 md:px-5",
          "transition-all duration-300 hover:bg-primary/30",
          "relative overflow-hidden",
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={cn(
              "shrink-0 rounded-full bg-accent px-2 py-1",
              "text-[10px] font-medium text-primary xs:text-xs sm:text-sm",
              "text-center transition-all duration-300"
            )}
          >
            {announcement}
          </div>
          <p className="text-xs font-semibold text-primary sm:text-sm md:text-base">
            {label}
          </p>
        </div>

        <svg
          width="12"
          height="12"
          className="h-3 w-3 shrink-0 transform text-primary transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.78141 5.33312L5.20541 1.75712L6.14808 0.814453L11.3334 5.99979L6.14808 11.1851L5.20541 10.2425L8.78141 6.66645H0.666748V5.33312H8.78141Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </motion.a>
    </div>
  );
}

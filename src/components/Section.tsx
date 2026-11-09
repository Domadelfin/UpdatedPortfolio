import type { ReactNode } from "react";
import type { SectionId } from "@/data/portfolio";

type SectionProps = {
  id: SectionId;
  title?: string;
  children: ReactNode;
};

// Each section fills at least one viewport height and grows if its content is longer.
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="page-section flex items-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        {title && (
          <h2 className="mb-10 inline-block">
            {title}
            <Squiggle />
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

// Hand-drawn wavy underline for section titles.
function Squiggle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      className="mt-1 block h-3 w-full"
    >
      <path
        d="M3 8 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t17 -1"
        fill="none"
        stroke="var(--marker-pink)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M3 8 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t17 -1"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

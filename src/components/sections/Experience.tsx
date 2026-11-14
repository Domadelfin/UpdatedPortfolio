import Section from "@/components/Section";
import { experience } from "@/data/portfolio";

// Work and volunteering in a single hand-drawn timeline, newest first.
// Each entry gets a dot on the line: yellow for work, green for volunteering.
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="relative mx-auto max-w-4xl">
        {/* the timeline's line, drawn down the left side */}
        <div
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-[0.6rem] border-l-[2.5px] border-ink md:left-[0.85rem]"
          style={{ filter: "url(#doodle-wobble)" }}
        />

        <ol className="grid gap-8">
          {experience.map((x) => (
            <li key={x.role + x.organization} className="grid grid-cols-[1.25rem_1fr] gap-4 md:grid-cols-[1.75rem_1fr] md:gap-6">
              <span
                aria-hidden="true"
                className={`relative mt-7 size-5 justify-self-center rounded-full border-[2.5px] border-ink md:size-6 ${
                  x.kind === "work" ? "bg-(--marker-yellow)" : "bg-(--marker-green)"
                }`}
                style={{ filter: "url(#doodle-wobble)" }}
              />

              <article className="doodle-box transition-transform duration-200 hover:-translate-y-[3px]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[1.75rem]">{x.role}</h3>
                  <p className="text-ink-soft">{x.period}</p>
                </div>
                <p>{x.organization}</p>

                <ul className="mt-2 flex flex-wrap gap-2 text-base">
                  <li>
                    <span className="bg-[linear-gradient(transparent_55%,var(--marker-yellow)_55%)] px-1">
                      {x.focus}
                    </span>
                  </li>
                  <li>
                    <span
                      className={`doodle-tag text-sm ${
                        x.kind === "work" ? "bg-(--marker-blue)" : "bg-(--marker-green)"
                      }`}
                    >
                      {x.kind === "work" ? "Work" : "Volunteer"}
                    </span>
                  </li>
                </ul>

                <ul className="mt-3 grid list-['✎_'] gap-1 pl-6 leading-relaxed">
                  {x.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

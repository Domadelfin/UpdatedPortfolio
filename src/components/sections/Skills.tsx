import Image from "next/image";
import ScribbleLink from "@/components/ScribbleLink";
import Section from "@/components/Section";
import TechTag from "@/components/TechTag";
import { certifications, skills } from "@/data/portfolio";

// Skills and certifications share one section: skill groups on the left,
// certification badges stacked on the right (everything stacks on smaller screens).
export default function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <SubHeading>What I work with</SubHeading>
          <div className="doodle-tilt grid gap-5 sm:grid-cols-2">
            {skills.map((group) => (
              // Languages has the most items, so it spans the full width
              <div key={group.category} className="doodle-box first:sm:col-span-2">
                <h3 className="mb-2 text-[1.75rem]">{group.category}</h3>
                <ul className="doodle-tags flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechTag name={item} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SubHeading>Certified in</SubHeading>
          <ul className="doodle-tilt grid gap-5">
            {certifications.map((c) => (
              <li key={c.name} className="doodle-box flex items-center gap-5">
                {c.image && (
                  <Image
                    src={c.image}
                    alt={`${c.name} badge`}
                    className="size-20 shrink-0 object-contain"
                    sizes="80px"
                  />
                )}
                <div>
                  <h3 className="text-[1.75rem]">{c.name}</h3>
                  <p className="text-ink-soft">{c.issuer}</p>
                  {c.date && <p className="text-ink-soft">{c.date}</p>}
                  {c.credentialUrl && (
                    <ScribbleLink
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="doodle-link mt-2"
                    >
                      View credential ↗
                    </ScribbleLink>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function SubHeading({ children }: { children: string }) {
  return (
    <p className="font-hand mb-3 text-3xl font-bold">
      <span className="bg-[linear-gradient(transparent_55%,var(--marker-yellow)_55%)] px-1">{children}</span>
    </p>
  );
}

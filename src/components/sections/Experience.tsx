import Section from "@/components/Section";
import {
  volunteerExperience,
  workExperience,
  type Experience as ExperienceItem,
} from "@/data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-12 md:grid-cols-2">
        <ExperienceColumn heading="Work" items={workExperience} />
        <ExperienceColumn heading="Volunteering" items={volunteerExperience} />
      </div>
    </Section>
  );
}

function ExperienceColumn({
  heading,
  items,
}: {
  heading: string;
  items: ExperienceItem[];
}) {
  return (
    <div>
      <h3 className="mb-6">{heading}</h3>
      <ul className="doodle-tilt grid gap-8">
        {items.map((x) => (
          <li key={x.role + x.organization} className="doodle-box">
            <h4 className="font-hand text-2xl font-bold">{x.role}</h4>
            <p>{x.organization}</p>
            <p className="text-ink-soft">
              {x.period}
              {x.location && ` · ${x.location}`}
            </p>
            <ul className="mt-3 list-['✎_'] pl-6">
              {x.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

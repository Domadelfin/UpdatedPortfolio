import Section from "@/components/Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Qualifications">
      <div className="doodle-tilt grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map((group) => (
          // With 4 columns, the last group (Soft Skills) spans two so the second row is filled
          <div key={group.category} className="doodle-box xl:last:col-span-2">
            <h3 className="mb-4">{group.category}</h3>
            <ul className="doodle-tags flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="doodle-tag">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

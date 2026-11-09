import Section from "@/components/Section";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Qualifications">
      <div className="doodle-tilt grid gap-8 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className="doodle-box">
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

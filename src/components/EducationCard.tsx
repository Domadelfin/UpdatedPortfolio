import { education } from "@/data/portfolio";

// Compact education card shown beside the intro in the Home section.
export default function EducationCard() {
  return (
    <div className="doodle-box">
      <h2 className="mb-4 text-4xl">
        <span className="bg-[linear-gradient(transparent_55%,var(--marker-yellow)_55%)] px-1">
          Education
        </span>
      </h2>
      <ul className="grid gap-6">
        {education.map((e) => (
          <li key={e.school + e.degree}>
            <h3 className="text-2xl">{e.school}</h3>
            <p>{e.degree}</p>
            <p className="text-ink-soft">{e.period}</p>
            <ul className="mt-3 list-['★_'] pl-6">
              {e.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Image from "next/image";
import Section from "@/components/Section";
import ScribbleLink from "@/components/ScribbleLink";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="doodle-tilt grid gap-8 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="doodle-box flex items-center gap-6">
            {c.image && (
              <Image
                src={c.image}
                alt={`${c.name} badge`}
                className="h-24 w-24 shrink-0 object-contain"
                sizes="96px"
              />
            )}
            <div>
              <h3>{c.name}</h3>
              <p className="text-ink-soft">{c.issuer}</p>
              {c.date && <p className="text-ink-soft">{c.date}</p>}
              {c.credentialUrl && (
                <ScribbleLink
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-link mt-3"
                >
                  View credential
                </ScribbleLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

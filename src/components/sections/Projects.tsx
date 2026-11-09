import Image from "next/image";
import Section from "@/components/Section";
import ScribbleLink from "@/components/ScribbleLink";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="doodle-tilt grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title} className="doodle-box doodle-boil flex flex-col px-8 py-7">
            {p.image && (
              <Image
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                className="mb-4 aspect-video w-full rounded-md border-2 border-ink object-cover"
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 480px, 100vw"
              />
            )}
            {p.date && <p className="text-base text-ink-soft">{p.date}</p>}
            {/* With 2+ columns, every title reserves two lines so summaries line up across a row */}
            <h3 className="mt-1 text-[1.75rem] text-balance md:min-h-[2.2em]">{p.title}</h3>
            {p.summary && <p className="mt-3 leading-relaxed">{p.summary}</p>}
            <div className="flex-1" />
            <ul className="doodle-tags mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t}>
                  <span className="doodle-tag">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-5">
              {p.liveUrl && (
                <ScribbleLink
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-link"
                >
                  Live site
                </ScribbleLink>
              )}
              {p.repoUrl && (
                <ScribbleLink
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doodle-link"
                >
                  Source
                </ScribbleLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

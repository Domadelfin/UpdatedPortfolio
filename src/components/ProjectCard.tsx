"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import DoodleScroll from "@/components/DoodleScroll";
import ScribbleLink from "@/components/ScribbleLink";
import TechTag from "@/components/TechTag";
import type { Project } from "@/data/portfolio";

// A project card. Clicking anywhere on it (except its links) opens the case study popup.
export default function ProjectCard({ project: p }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `case-study-${p.title.replace(/\W+/g, "-").toLowerCase()}`;

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  return (
    <li className="doodle-box doodle-straight group/card relative flex flex-col px-7 py-6">
      {/* Invisible button covering the whole card; the links below sit above it */}
      <button
        type="button"
        onClick={open}
        aria-label={`Read the ${p.title} case study`}
        className="absolute inset-0 z-0 rounded-lg focus-visible:outline-3 focus-visible:outline-offset-6 focus-visible:outline-(--marker-blue)"
      />

      <Image
        src={p.image}
        alt=""
        sizes="(min-width: 1024px) 22rem, (min-width: 768px) 45vw, 100vw"
        placeholder="blur"
        className="aspect-video w-full rounded-md border-2 border-ink object-cover object-top"
      />

      <p className="mt-4 text-base text-ink-soft">{p.date}</p>
      {/* With 2+ columns, every title reserves two lines so summaries line up across a row */}
      <h3 className="mt-1 text-[1.75rem] text-balance md:min-h-[2.2em]">{p.title}</h3>
      <p className="mt-2 self-start">
        <span className="bg-[linear-gradient(transparent_55%,var(--marker-yellow)_55%)] px-1 text-base">
          {p.role}
        </span>
      </p>
      <p className="mt-3 leading-relaxed">{p.summary}</p>
      {p.caseStudy.results && (
        <p className="mt-3 self-start">
          <span className="bg-[linear-gradient(transparent_55%,var(--marker-green)_55%)] px-1">
            ✓ {p.caseStudy.results[0]}
          </span>
        </p>
      )}
      <p className="font-hand mt-2 text-xl text-ink-soft transition-transform group-hover/card:translate-x-1">
        read the case study →
      </p>

      <div className="flex-1" />
      <Tags tech={p.tech} />
      <Links project={p} />

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="doodle-dialog"
        // Clicking the dimmed backdrop (outside the card) closes the popup
        onClick={(e) => e.target === e.currentTarget && close()}
      >
        <div className="doodle-box flex max-h-[calc(100svh-2rem)] w-[min(58rem,calc(100vw-2rem))] flex-col p-0 text-left">
          {/* Title and close button stay put; only the content below scrolls */}
          <div className="doodle-line mx-7 flex items-start justify-between gap-4 pt-7 pb-3 md:mx-10">
            <div>
              <p className="text-base text-ink-soft">
                {p.date} · {p.role}
              </p>
              <h3 id={titleId} className="mt-1 text-4xl">
                {p.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="font-hand -mt-1 text-3xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Inset from the frame and faded at the edges, so text never runs over the drawn border */}
          <DoodleScroll className="mx-3 mb-4 md:mx-6" contentClassName="pl-4">
            <Image
              src={p.image}
              alt={`Screenshot of ${p.title}`}
              sizes="(min-width: 960px) 54rem, 100vw"
              placeholder="blur"
              className="w-full rounded-md border-2 border-ink"
            />

            <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <div>
                <CaseHeading>The problem</CaseHeading>
                <p className="mt-2 leading-relaxed">{p.caseStudy.problem}</p>

                <CaseHeading className="mt-6">What I did</CaseHeading>
                <ul className="mt-2 grid list-['✎_'] gap-1.5 pl-6 leading-relaxed">
                  {p.caseStudy.contributions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                {p.caseStudy.results && (
                  <>
                    <CaseHeading>Results</CaseHeading>
                    <ul className="mt-2 mb-6 grid gap-1.5 leading-relaxed">
                      {p.caseStudy.results.map((r) => (
                        <li key={r}>
                          <span className="bg-[linear-gradient(transparent_55%,var(--marker-green)_55%)] box-decoration-clone px-1">
                            ✓ {r}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {p.caseStudy.decisions && (
                  <>
                    <CaseHeading>Key decisions</CaseHeading>
                    <ul className="mt-2 grid list-['★_'] gap-1.5 pl-6 leading-relaxed">
                      {p.caseStudy.decisions.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </>
                )}

                <CaseHeading className={p.caseStudy.decisions ? "mt-6" : ""}>Stack</CaseHeading>
                <Tags tech={p.tech} className="mt-3" />
                <Links project={p} />
              </div>
            </div>
          </DoodleScroll>
        </div>
      </dialog>
    </li>
  );
}

function CaseHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h4 className={`font-hand text-2xl font-bold ${className}`}>{children}</h4>;
}

function Tags({ tech, className = "mt-5" }: { tech: string[]; className?: string }) {
  return (
    <ul className={`doodle-tags flex flex-wrap gap-2 ${className}`}>
      {tech.map((t) => (
        <li key={t}>
          <TechTag name={t} />
        </li>
      ))}
    </ul>
  );
}

// Live site on the left, Source on the right, so they read as two separate actions.
// z-10 keeps them clickable above the card's invisible button.
function Links({ project: p }: { project: Project }) {
  if (!p.liveUrl && !p.repoUrl) return null;
  return (
    <div className="relative z-10 mt-4 flex justify-between gap-5">
      {p.liveUrl ? (
        <ScribbleLink href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="doodle-link">
          Live site ↗
        </ScribbleLink>
      ) : (
        <span />
      )}
      {p.repoUrl && (
        <ScribbleLink href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="doodle-link">
          Source ↗
        </ScribbleLink>
      )}
    </div>
  );
}

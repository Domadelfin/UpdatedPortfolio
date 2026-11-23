"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import DoodleScroll from "@/components/DoodleScroll";
import ScribbleLink from "@/components/ScribbleLink";
import TechTag from "@/components/TechTag";
import type { GalleryItem, Project } from "@/data/portfolio";

// A project card. Clicking anywhere on it (except its links) opens the case study popup.
export default function ProjectCard({ project: p }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [shot, setShot] = useState<number | null>(null); // gallery screenshot shown enlarged
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

            {p.caseStudy.gallery && (
              <>
                <CaseHeading className="mt-8">
                  {p.caseStudy.gallery.some((g) => g.video) ? "See it in action" : "More screenshots"}
                </CaseHeading>
                <ul className="mt-3 grid gap-5 sm:grid-cols-2">
                  {p.caseStudy.gallery.map((g, i) => (
                    <li key={g.caption}>
                      {/* opens the screenshot enlarged on top of the case study */}
                      <button
                        type="button"
                        onClick={() => setShot(i)}
                        aria-label={`Enlarge: ${g.caption}`}
                        className="group/shot block w-full text-left"
                      >
                        <span className="relative block transition-transform group-hover/shot:-translate-y-0.5">
                          <Image
                            src={g.image}
                            alt={g.caption}
                            sizes="(min-width: 960px) 26rem, 100vw"
                            placeholder="blur"
                            className="aspect-video w-full rounded-md border-2 border-ink bg-white object-cover object-top"
                          />
                          {/* videos only load once enlarged; the badge says there's something to play */}
                          {g.video && (
                            <span className="doodle-btn absolute top-1/2 left-1/2 -translate-1/2 px-4 py-0.5 text-2xl">
                              ▶ play
                            </span>
                          )}
                        </span>
                        <span className="font-hand mt-1 block text-lg leading-snug text-ink-soft">
                          {g.caption} {g.video ? "" : "⤢"}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <Lightbox shots={p.caseStudy.gallery} index={shot} onChange={setShot} />
              </>
            )}
          </DoodleScroll>
        </div>
      </dialog>
    </li>
  );
}

// An enlarged gallery screenshot, opened as a second popup on top of the case study.
// Closes with ✕, Escape or a click outside the frame (which returns to the case study);
// ‹ › buttons and the arrow keys move between screenshots.
function Lightbox({
  shots,
  index,
  onChange,
}: {
  shots: GalleryItem[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const go = (step: number) => index !== null && onChange((index + step + shots.length) % shots.length);
  const current = index !== null ? shots[index] : null;

  return (
    <dialog
      ref={ref}
      aria-label="Screenshot"
      className="doodle-dialog"
      onClose={() => onChange(null)} // Escape closes only this popup
      onClick={(e) => e.target === e.currentTarget && onChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      {current && (
        <figure className="doodle-box w-[min(80rem,calc(100vw-2rem))] px-5 pt-4 pb-5 md:px-7">
          <div className="mb-3 flex items-center justify-between gap-4">
            <figcaption className="font-hand text-2xl leading-tight">{current.caption}</figcaption>
            <div className="flex shrink-0 items-center gap-4">
              {shots.length > 1 && (
                <span className="text-base text-ink-soft">
                  {index! + 1} / {shots.length}
                </span>
              )}
              <button
                type="button"
                onClick={() => onChange(null)}
                aria-label="Close screenshot"
                className="font-hand text-3xl leading-none"
              >
                ✕
              </button>
            </div>
          </div>

          {/* From md up the arrows sit beside the image, outside it; on phones they
              wrap into a row under it. `order` puts the image first on phones. */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap md:gap-4">
            {shots.length > 1 && <LightboxArrow side="left" onClick={() => go(-1)} />}
            <div className="order-first w-full min-w-0 md:order-none md:w-auto md:flex-1">
              {current.video ? (
                // key restarts the clip when switching between videos
                <video
                  key={current.video}
                  src={current.video}
                  poster={current.image.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label={current.caption}
                  className="mx-auto max-h-[calc(100svh-9rem)] w-auto rounded-md border-2 border-ink bg-white"
                />
              ) : (
                <Image
                  src={current.image}
                  alt={current.caption}
                  sizes="(min-width: 1280px) 74rem, 100vw"
                  placeholder="blur"
                  className="mx-auto max-h-[calc(100svh-9rem)] w-auto rounded-md border-2 border-ink bg-white object-contain"
                />
              )}
            </div>
            {shots.length > 1 && <LightboxArrow side="right" onClick={() => go(1)} />}
          </div>
        </figure>
      )}
    </dialog>
  );
}

function LightboxArrow({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous screenshot" : "Next screenshot"}
      className={`doodle-btn shrink-0 px-3 py-0 text-3xl ${side === "right" ? "alt" : ""}`}
    >
      {side === "left" ? "‹" : "›"}
    </button>
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

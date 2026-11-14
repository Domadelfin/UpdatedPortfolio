import Image from "next/image";
import EducationCard from "@/components/EducationCard";
import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <Section id="home">
      {/* Intro on the left, education on the right; stacked on smaller screens */}
      <div className="doodle-tilt grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="doodle-box doodle-straight px-8 py-10 text-center md:px-12">
          {/* Photo beside the name on wider screens, above it on phones */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10 md:text-left">
            <Polaroid />
            <div>
              <p className="font-hand text-3xl">Hi there! I&apos;m</p>
              <h1>{profile.name}</h1>
              {/* "Software Engineer | Backend, …" shown as two lines, without the bar */}
              <p className="font-hand mt-2 text-3xl">
                {profile.title.split(" | ").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <p className="font-hand mx-auto mt-7 max-w-xl text-2xl leading-snug">
            <span className="bg-[linear-gradient(transparent_60%,var(--marker-yellow)_60%)] box-decoration-clone px-1">
              {profile.tagline}
            </span>
          </p>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a href="#projects" className="doodle-btn">
              View my projects
            </a>
            <a href="#contact" className="doodle-btn alt">
              Contact me
            </a>
            <a href={profile.resume.href} download={profile.resume.fileName} className="doodle-btn green">
              ↓ Download resume
            </a>
          </div>
        </div>
        <EducationCard />
      </div>
    </Section>
  );
}

// Graduation photo as a taped-on polaroid
function Polaroid() {
  return (
    <figure className="polaroid w-40 shrink-0 md:w-44">
      <Image
        src={profile.photo}
        alt={`${profile.name} in a graduation toga`}
        sizes="(min-width: 768px) 11rem, 10rem"
        placeholder="blur"
        preload
        className="aspect-square w-full object-cover"
      />
    </figure>
  );
}

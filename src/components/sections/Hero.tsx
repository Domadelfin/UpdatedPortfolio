import EducationCard from "@/components/EducationCard";
import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <Section id="home">
      {/* Intro on the left, education on the right; stacked on smaller screens */}
      <div className="doodle-tilt grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="doodle-box px-8 py-11 text-center md:px-12">
          <p className="font-hand text-3xl">Hi there! I&apos;m</p>
          <h1>{profile.name}</h1>
          <p className="font-hand mt-2 text-3xl">{profile.title}</p>
          <p className="mx-auto mt-6 max-w-xl">{profile.summary}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <a href="#projects" className="doodle-btn">
              View my projects
            </a>
            <a href="#contact" className="doodle-btn alt">
              Contact me
            </a>
          </div>
        </div>
        <EducationCard />
      </div>
    </Section>
  );
}

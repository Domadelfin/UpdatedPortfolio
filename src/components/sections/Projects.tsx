import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="doodle-tilt grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </ul>
    </Section>
  );
}

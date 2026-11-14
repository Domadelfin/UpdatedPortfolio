import {
  type SimpleIcon,
  siCss,
  siDart,
  siDjango,
  siDocker,
  siExpress,
  siFlutter,
  siGithubactions,
  siGoogle,
  siHtml5,
  siInertia,
  siJavascript,
  siLaravel,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siRailway,
  siReact,
  siRender,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVuedotjs,
} from "simple-icons";

// Logos come from Simple Icons and are drawn in the ink color so they match
// the hand-drawn style. A name not listed here (e.g. AWS, which Simple Icons
// doesn't include) shows as a plain tag.
const icons: Record<string, SimpleIcon> = {
  CSS: siCss,
  Dart: siDart,
  Django: siDjango,
  Docker: siDocker,
  "Express.js": siExpress,
  Flutter: siFlutter,
  "GitHub Actions": siGithubactions,
  "Google Sign-In": siGoogle,
  HTML: siHtml5,
  "Inertia.js": siInertia,
  Java: siOpenjdk,
  JavaScript: siJavascript,
  Laravel: siLaravel,
  Linux: siLinux,
  MongoDB: siMongodb,
  MySQL: siMysql,
  "Next.js": siNextdotjs,
  Nginx: siNginx,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  Python: siPython,
  Railway: siRailway,
  React: siReact,
  Render: siRender,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  Vercel: siVercel,
  Vue: siVuedotjs,
  "Vue.js": siVuedotjs,
};

export default function TechTag({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <span className="doodle-tag inline-flex items-center gap-1.5">
      {icon && (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[0.95em] shrink-0" fill="currentColor">
          <path d={icon.path} />
        </svg>
      )}
      {name}
    </span>
  );
}

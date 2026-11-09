// Hidden SVG filters used by the .doodle-* classes in globals.css.
// Each one slightly displaces straight lines so borders look hand-drawn.
// "doodle-wobble" is the resting look; the -2/-3 variants use different noise seeds
// and are cycled through when a .doodle-box card is hovered, making the outline jitter.
const filters = [
  { id: "doodle-wobble", seed: 3 },
  { id: "doodle-wobble-2", seed: 8 },
  { id: "doodle-wobble-3", seed: 15 },
];

export default function DoodleFilters() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute" }}
    >
      {filters.map((f) => (
        <filter key={f.id} id={f.id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            seed={f.seed}
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      ))}
    </svg>
  );
}

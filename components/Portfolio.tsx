import Image from "next/image";
import { Section } from "./Section";

const projects = [
  {
    title: "Vera.lk",
    description: "Complete vehicle marketplace platform with AI-powered search.",
    tech: "Next.js · PostgreSQL · AI search",
    timeline: "",
    link: "https://vera.lk",
    linkLabel: "View site",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fvera.lk&meta=false&screenshot=true&embed=screenshot.url",
  },
  {
    title: "iSafe",
    description:
      "Disaster response platform with shelter registry, missing persons reporting, and digital compensation.",
    tech: "Next.js · real-time data",
    timeline: "Built in 24 hours during Cyclone Ditwah",
    link: "https://i-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app/en",
    linkLabel: "Live preview",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fi-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app%2Fen&meta=false&screenshot=true&embed=screenshot.url",
  },
  {
    title: "Aurium.lk (demo)",
    description: "Modern e-commerce platform for jewelry and accessories with elegant design.",
    tech: "Next.js · E-commerce",
    timeline: "Demo project",
    link: "https://aurium-k120je06u-shyans-projects-7b2901b0.vercel.app/",
    linkLabel: "Live preview",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Faurium-k120je06u-shyans-projects-7b2901b0.vercel.app%2F&meta=false&screenshot=true&embed=screenshot.url",
  },
];

export function Portfolio() {
  return (
    <Section id="work">
      <div className="container space-y-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">Highlight Projects</h2>
          <p className="text-lg text-slate-700 max-w-3xl">
            Fast delivery without sacrificing quality. Each build is optimized for speed, clarity,
            and measurable results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card p-5 flex flex-col gap-3">
              <div className="h-40 overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 100vw"
                    priority={project.title === "Vera.lk"}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-slate-600">
                    Preview coming soon
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <span className="text-xs font-medium text-slate-600">{project.timeline}</span>
              </div>
              <p className="text-sm text-slate-700">{project.description}</p>
              <p className="text-xs font-semibold text-slate-600">{project.tech}</p>
              <div className="pt-2">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {project.linkLabel || "View project"} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}


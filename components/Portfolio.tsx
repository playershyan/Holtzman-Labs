import Image from "next/image";
import { Section } from "./Section";

const projects = [
  {
    title: "Aurium.lk",
    type: "Jewelry E-Commerce",
    description: "Beautiful online store showcasing luxury jewelry with elegant design and easy browsing.",
    results: "Professional look that builds trust with high-end customers",
    link: "https://aurium-k120je06u-shyans-projects-7b2901b0.vercel.app/",
    linkLabel: "View example",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Faurium-k120je06u-shyans-projects-7b2901b0.vercel.app%2F&meta=false&screenshot=true&embed=screenshot.url",
  },
  {
    title: "Vera.lk",
    type: "Automotive Marketplace",
    description: "Complete vehicle marketplace that helps buyers find exactly what they're looking for quickly.",
    results: "Thousands of monthly visitors connecting buyers with sellers",
    link: "https://vera.lk",
    linkLabel: "View live site",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fvera.lk&meta=false&screenshot=true&embed=screenshot.url",
  },
  {
    title: "iSafe",
    type: "Community Service",
    description: "Emergency response platform helping communities during disasters—built and deployed in 24 hours.",
    results: "Rapid deployment when it mattered most",
    link: "https://i-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app/en",
    linkLabel: "View platform",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fi-safe-okm6jbh47-shyans-projects-7b2901b0.vercel.app%2Fen&meta=false&screenshot=true&embed=screenshot.url",
  },
];

export function Portfolio() {
  return (
    <Section id="work">
      <div className="container space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Recent Work</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here are some examples of websites I&apos;ve built. Your site will be tailored specifically to your business needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card p-5 flex flex-col gap-4 hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 to-slate-100">
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
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                  <span className="text-xs font-semibold text-accent bg-orange-50 px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-slate-700 mb-3">{project.description}</p>
                <div className="bg-slate-50 rounded-lg p-3 mb-3">
                  <p className="text-xs font-semibold text-slate-600 mb-1">RESULT:</p>
                  <p className="text-sm text-slate-800">{project.results}</p>
                </div>
              </div>
              <div className="mt-auto">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    className="text-sm font-semibold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
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

        <div className="card p-8 bg-slate-900 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">
            Your Business Deserves a Professional Website
          </h3>
          <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
            These are just examples. Your website will be custom-designed for your specific business, industry, and goals.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            Let&apos;s Build Yours →
          </a>
        </div>
      </div>
    </Section>
  );
}


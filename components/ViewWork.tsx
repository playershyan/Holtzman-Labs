import Link from "next/link";

export default function ViewWork() {
  const templates = [
    {
      title: "Modern SaaS Landing",
      description:
        "Clean, conversion-focused design for software products. Features hero sections, pricing tables, and testimonials.",
    },
    {
      title: "Creative Portfolio",
      description:
        "Stunning showcase for designers and artists. Gallery layouts with smooth animations and project details.",
    },
    {
      title: "Professional Services",
      description:
        "Multi-page site for consultants and agencies. Includes service pages, about section, and contact forms.",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight">
            Our work
          </h2>
          <Link
            href="/templates"
            className="text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors hidden sm:block"
          >
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-gray-100 h-64 mb-4 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-[#8B5CF6] transition-colors">
                <span className="text-gray-400 text-sm">Template Preview</span>
              </div>
              <h3 className="text-xl leading-tight md:text-2xl font-bold text-black mb-2">
                {template.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed md:text-lg">
                {template.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/templates"
          className="mt-8 text-lg font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors sm:hidden block text-center"
        >
          See all →
        </Link>
      </div>
    </section>
  );
}

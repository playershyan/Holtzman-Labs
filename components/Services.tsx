export default function Services() {
  const services = [
    {
      title: "Landing pages",
      subtitle:
        "High-converting single-page sites built to turn visitors into customers",
    },
    {
      title: "Static Websites",
      subtitle:
        "Fast, reliable multi-page sites with clean navigation and structure.",
    },
    {
      title: "Portfolio sites",
      subtitle:
        "Showcase your work with elegant, professional designs that make lasting impressions.",
    },
    {
      title: "Redesigns",
      subtitle:
        "Transform your existing site into a modern, high-performance asset.",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold text-black tracking-tight mb-12 md:mb-16">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 hover:border-[#8B5CF6] hover:shadow-lg transition-all"
            >
              <h3 className="text-xl leading-tight md:text-2xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed md:text-lg">
                {service.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

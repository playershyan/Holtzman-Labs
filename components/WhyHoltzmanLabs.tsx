import { Clock, DollarSign, RefreshCw } from "lucide-react";

export default function WhyHoltzmanLabs() {
  const features = [
    {
      icon: Clock,
      title: "Fast turnaround",
      description:
        "Landing pages in 5 days. Multi-page sites in 2 weeks. No waiting months for results.",
    },
    {
      icon: DollarSign,
      title: "Fixed pricing and no upfront payments",
      description:
        "Clear packages with transparent pricing. No hidden fees or surprise charges.",
    },
    {
      icon: RefreshCw,
      title: "Unlimited Revisions*",
      description:
        "Refine until it's perfect. We work with you until you're completely satisfied.",
    },
  ];

  return (
    <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl font-bold tracking-tight mb-12 md:mb-16">
          Why Holtzman Labs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="space-y-4">
                <Icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />
                <h3 className="text-xl leading-tight md:text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed md:text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

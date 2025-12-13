import { Section } from "./Section";

export function SpeedSection() {
  return (
    <Section id="why-website">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Your Business Needs a Website
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A website isn&apos;t just about being online. It&apos;s about building trust, reaching more customers, and growing your business.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {[
            {
              icon: "🏆",
              title: "Build Trust & Credibility",
              body: "Customers expect legitimate businesses to have a professional website. Without one, they question if you're real or reliable."
            },
            {
              icon: "👥",
              title: "Reach More Customers",
              body: "Your competitors are getting found on Google. A website helps potential customers discover you when they search for services in your area."
            },
            {
              icon: "💼",
              title: "Look Professional",
              body: "A clean, modern website makes your business look established and trustworthy—even if you're just starting out."
            },
            {
              icon: "🕐",
              title: "Open 24/7",
              body: "Your website works around the clock. Customers can learn about your services, see your prices, and contact you anytime."
            },
            {
              icon: "💰",
              title: "Cost-Effective Marketing",
              body: "Compared to print ads or billboards, a website is affordable and reaches people actively looking for what you offer."
            },
            {
              icon: "📞",
              title: "Make It Easy to Contact You",
              body: "Display your phone number, address, hours, and contact form. Make it simple for customers to reach you and book your services."
            },
          ].map((item) => (
            <div key={item.title} className="card p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="card p-8 bg-gradient-to-br from-blue-50 to-slate-50 border-2 border-blue-100">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Here&apos;s the Truth: Without a Website, You&apos;re Invisible
              </h3>
              <p className="text-slate-700 text-lg mb-4">
                When someone searches for &quot;dentist near me&quot; or &quot;best lawyer in [city]&quot; or &quot;restaurants open now&quot;—if you don&apos;t have a website, they won&apos;t find you. They&apos;ll find your competition instead.
              </p>
              <p className="text-slate-600">
                Don&apos;t lose customers to businesses that simply showed up online. Get your website built in 1-2 weeks and start capturing those searches.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold gradient-cta shadow-lg transition hover:brightness-110 hover:shadow-xl whitespace-nowrap"
              >
                Start Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}


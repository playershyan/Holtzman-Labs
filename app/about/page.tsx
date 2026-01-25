import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'About — Holtzman Labs',
  description: 'Holtzman Labs is a specialized engineering consultancy focused on architectural precision and high-fidelity software development.'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" role="main" tabIndex={-1}>
        {/* Hero Section */}
        <section className="px-6 py-20 md:px-16 md:py-32 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6">
              About Holtzman Labs
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed max-w-4xl">
              Holtzman Labs is a web development consultancy specializing in architectural precision and high‑fidelity implementation. Our objective is to prevent technical debt at the source.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24 bg-gradient-to-r from-[#f8f5ff] to-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Approach
              </h2>
              <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  We function as a technical partner rather than a vendor. Requirements that compromise stability, security, or scalability are challenged and replaced with superior alternatives. The priority is durable software, not short‑term delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities Section */}
        <section className="px-6 py-16 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">
              Core Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Systems Architecture */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Systems Architecture
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Designing the blueprint for scalable, crash-resistant applications.
                </p>
              </div>

              {/* Full-Stack Development */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Full-Stack Development
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  End-to-end execution, from database logic to user interface.
                </p>
              </div>

              {/* Code Remediation */}
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Code Remediation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Taking over failing or buggy projects and refactoring them for stability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-12 md:px-16 lg:px-24 bg-gradient-to-r from-[#f8f5ff] to-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg md:text-xl font-semibold">Ready to build something that lasts?</div>
              <div className="text-sm text-gray-600 mt-1">Work with engineers who push back when it matters.</div>
            </div>
            <div>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 gradient-cta font-semibold">
                Start a conversation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

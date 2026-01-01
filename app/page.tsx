import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" role="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Impact />

        {/* Single action bar — concise next step */}
        <section className="px-6 py-12 md:px-16 lg:px-24 bg-gradient-to-r from-[#f8f5ff] to-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-lg md:text-xl font-semibold">Ready to ship something great?</div>
              <div className="text-sm text-gray-600 mt-1">Get a clear, fixed estimate in 24 hours.</div>
            </div>
            <div>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 gradient-cta font-semibold">
                Start a scoped estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

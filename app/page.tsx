import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { SpeedSection } from "@/components/SpeedSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <SpeedSection />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

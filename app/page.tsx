import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ViewWork from "@/components/ViewWork";
import WhyHoltzmanLabs from "@/components/WhyHoltzmanLabs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <ViewWork />
        <WhyHoltzmanLabs />
      </main>
      <Footer />
    </div>
  );
}

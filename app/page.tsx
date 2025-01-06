import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { HeroParallaxDemo } from "@/components/parallax";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <HeroParallaxDemo />
      <Hero />
      <Footer />
    </div>
  );
}

import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Questions from "@/components/sections/Questions";
import Reviews from "@/components/sections/Reviews";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Questions />
        <Gallery />
    </>
  );
}

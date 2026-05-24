import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Recommendations } from "@/components/sections/Recommendations";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Copyright } from "@/components/sections/Copyright";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div className="container mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[7fr_3fr] lg:gap-x-8 lg:items-stretch">
          <div className="flex min-h-0 flex-col overflow-y-auto">
            <TechStack />
            <Projects />
          </div>
          <div className="flex min-h-0 flex-col lg:h-full">
            <Experience />
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4">
        <div className="grid grid-cols-1 gap-8 py-8 md:py-10 lg:grid-cols-2 lg:gap-x-8">
          <Certifications />
          <Recommendations />
        </div>
      </div>
      <Footer />
      <Gallery />
      <Copyright />
    </>
  );
}

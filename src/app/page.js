import Navbar from "@/components/layout/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import Industries from "../sections/Industries";
import Process from "../sections/Process";
import WhyChooseUs from "../sections/WhyChooseUs";
import MissionVision from "../sections/MissionVision";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Industries />
        <Process />
        <WhyChooseUs />
        <MissionVision />
      </main>
    </>
  );
}

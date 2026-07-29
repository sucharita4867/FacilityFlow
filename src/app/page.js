import Navbar from "@/components/layout/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="font-hand px-6 py-8 text-center text-2xl">
        © 2026 Dominic Delfin
      </footer>
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-gray-900 dark:text-[#f0f6fc]">
      <Navbar />
      <main className="px-6 pt-20 pb-20 max-w-6xl mx-auto space-y-12">
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

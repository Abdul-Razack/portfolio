import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import WorkExperience  from './components/aboutme';
export default function App() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="px-6 py-24 max-w-6xl mx-auto space-y-20">
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
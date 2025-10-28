import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Work Experience', href: '#wxp' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Observe active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {  
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-[#f9f9f9]/70 dark:bg-[#0d1117]/90 backdrop-blur-md shadow-md z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-[#f0f6fc]">
          MyPortfolio
        </h1>

        {/* Right: Desktop links and theme button */}
        <div className="flex items-center gap-4 justify-end">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300 font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-black dark:text-white font-semibold'
                      : 'hover:text-black dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          {/* Mobile menu icon */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d1117] w-full shadow-md border-t border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-800 dark:text-[#f0f6fc] font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-black dark:text-white font-semibold'
                      : 'hover:text-black dark:hover:text-white'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

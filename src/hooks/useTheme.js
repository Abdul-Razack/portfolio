import { useEffect, useState } from 'react';

export default function useTheme() {
  // Default to dark if no theme is saved
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.backgroundColor = '#0d1117'; // dark background
      root.style.color = '#f0f6fc';           // light text
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
      root.style.color = '#000000';
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return { theme, toggleTheme };
}

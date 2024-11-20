// pages/_app.js
import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Check localStorage for theme preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      // Check if the user prefers dark mode in system settings
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDarkMode);
    }
  }, []);

  // Apply the dark theme class to the body tag
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme]);

  // Toggle the dark theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Dark/Light Theme</button>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
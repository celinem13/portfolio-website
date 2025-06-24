// 1. Import required hooks
import { createContext, useState, useEffect } from 'react';

// 2. Create the context
export const ThemeContext = createContext();

// 3. Create a provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // 4. Initialize from localStorage or default to false
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // 5. Update <body> class and localStorage when darkMode changes
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // 6. Function to toggle the mode
  const toggleTheme = () => setDarkMode(prev => !prev);

  // 7. Provide both the state and toggler
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'dark' | 'light';
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {}
});
interface ThemeProviderProps {
  children: React.ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as Theme | null;
    const initial = stored === 'light' ? 'light' : 'dark';
    setTheme(initial);
    applyTheme(initial);
  }, []);
  function applyTheme(t: Theme) {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(t);
  }
  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', next);
      applyTheme(next);
      return next;
    });
  }
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>

      {children}
    </ThemeContext.Provider>);

}
export function useTheme() {
  return useContext(ThemeContext);
}
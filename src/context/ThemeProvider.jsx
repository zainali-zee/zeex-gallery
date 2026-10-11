import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}
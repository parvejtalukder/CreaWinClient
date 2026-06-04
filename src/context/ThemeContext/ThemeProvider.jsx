import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
// import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(
      () =>
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light"
        );
    };

    const themeInfo = {
        theme,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeInfo}>
          {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
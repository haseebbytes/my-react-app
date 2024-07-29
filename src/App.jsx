import React from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

const App = () => {
  const [themeMode, setThemeMode] = React.useState("light");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    document.documentElement.className = themeMode;
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

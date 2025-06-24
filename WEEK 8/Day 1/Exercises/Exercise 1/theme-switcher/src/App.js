// src/App.js
import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./index.css";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App;

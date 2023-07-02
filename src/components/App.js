import React, { useState } from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext, themes } from "../context/theme-context";

function App() {

  const [theme, setTheme] = useState(themes.light);

  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;
  
  function toggleTheme() {
    setTheme(theme =>
      theme.textColor === "AntiqueWhite" ? themes.light : themes.dark
      );
  }

    return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <ToggleTheme toggleTheme = {toggleTheme} />
      <TicketControl />
    </ThemeContext.Provider>
  );
}

export default App;

{/* this is JSX comment */}
// ctrl + / for comments 

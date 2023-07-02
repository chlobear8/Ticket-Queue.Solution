import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import ToggleTheme from "./ToggleTheme";
import { ThemeContext } from "../context/theme-context";

function App() {
    return (
    <ThemeContext.Provider value={themes.light}>
      <Header />
      <ToggleTheme />
      <TicketControl />
    </ThemeContext.Provider>
  );
}

export default App;

{/* this is JSX comment */}
// ctrl + / for comments 

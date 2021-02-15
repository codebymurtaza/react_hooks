import React from "react";
import "./App.css";import FetchingData from "./Components/FetchingData";
import { ThemeContext } from "./Components/theme_context";
import '../src/Css/Styles.css';

function App() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);

  return (
    <div
      className="App-header"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
      data-testid="header"
    >
      <button
      className="btn"
        type="button"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: "none",
        }}
        data-testid="toggle-theme-btn"
      >
        Toggle to {!dark ? "Dark" : "Light"} theme
      </button>
      <p>ReactJs lesson 10;</p>

      <FetchingData />
    </div>
  );
}

export default App;

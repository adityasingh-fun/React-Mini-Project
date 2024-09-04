import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import "./ChangeTheme.css";

const ChangeTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleOnClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="theme-container" data-theme={theme}>
      <div className="sub-theme-container">
        <h1>Hello World!</h1>
        <button onClick={handleOnClick}>Change Theme</button>
      </div>
    </div>
  );
};

export default ChangeTheme;

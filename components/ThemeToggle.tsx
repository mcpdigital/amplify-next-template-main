"use client";
import { useState } from "react";

import React from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  const switchto = theme === "light" ? "dark" : "light";
  const addtoClassname = theme === "light" ? "" : "dark";
  return (
    <div>
      <div className={theme}>
        <button
          className={`mr-4 mt-1 p-1 max-w-[100px] rounded-md dark:bg-slate-200 dark:text-slate-800 bg-slate-800 text-slate-200 ${addtoClassname}`}
          onClick={toggleTheme}
        >
          Go {switchto}
        </button>
        mode: {theme}
      </div>
    </div>
  );
};

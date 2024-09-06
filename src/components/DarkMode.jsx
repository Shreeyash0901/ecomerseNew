import React, { useEffect, useState } from 'react';
import lightbutton from '../Asset/light-mode-button.png';
import darkbutton from '../Asset/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Get reference to documentElement (html tag)
  const element = document.documentElement;

  useEffect(() => {
    // Apply the theme class on the root HTML element
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme, element]);

  return (
    <div className='relative'>
      {/* Toggle button */}
      <img
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        src={theme === "light" ? lightbutton : darkbutton}
        alt="Toggle Theme"
        className='w-12 cursor-pointer transition-all duration-300'
      />
      {/* Example of using Tailwind's dark mode utility classes */}
      <div >
        {/* Your content here */}
      </div>
    </div>
  );
};

export default DarkMode;
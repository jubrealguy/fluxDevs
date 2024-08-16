import React, { createContext, useContext, useState } from 'react';
import nightLogo from './img/moon.png';
import dayLogo from './img/sun.png';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [logo, setLogo] = useState(nightLogo);
  const [body, setBody] = useState("night-theme");
  const [isDayTheme, setIsDayTheme] = useState(false);

  const themeClick = (e) => {
    e.preventDefault();
    setIsDayTheme(!isDayTheme);
    setLogo(logo === nightLogo ? dayLogo : nightLogo);
    setBody(logo === nightLogo ? "App day-theme" : "App night-theme");
  };

  return (
    <ThemeContext.Provider value={{ logo, dayLogo, themeClick, body }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

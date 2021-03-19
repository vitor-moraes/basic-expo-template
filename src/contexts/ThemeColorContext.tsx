import React, { createContext, useState, ReactNode, useEffect } from "react";
import ThemesData from "../constants/Theme";
import { ThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

interface StyledThemeProps {
  children: ReactNode;
}

interface Theme {
  colors: {
    background: String;
    primary: String;
    secundary: String;
    text: String;
    tint: String;
  };
  fonts: String[];
  fontSizes: {
    small: String;
    medium: String;
    large: String;
  };
  toNavigation: String;
}

interface ThemeContextData {
  theme: Theme;
  themeType: String;
  changeTheme: (choosedTheme: String) => void;
}

export const ThemeColorContext = createContext({} as ThemeContextData);

export function ThemeColorProvider({ children, ...rest }: ThemeProviderProps) {
  const [themeType, setThemeType] = useState("dark");
  const [theme, setTheme] = useState(ThemesData.dark);

  useEffect(() => {
    //get theme by assync storage and if is using the device theme
  }, []);

  function changeTheme(choosedTheme: String) {
    if (choosedTheme === "light") {
      setThemeType("light");
      setTheme(ThemesData.light);
    }
    if (choosedTheme === "dark") {
      setThemeType("dark");
      setTheme(ThemesData.dark);
    }
  }

  const Theme = ({ children }: StyledThemeProps) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return (
    <Theme>
      <ThemeColorContext.Provider
        value={{
          theme,
          themeType,
          changeTheme,
        }}
      >
        {children}
      </ThemeColorContext.Provider>
    </Theme>
  );
}

import React, { createContext, useState, ReactNode, useEffect } from "react";
import ThemesData from "../constants/Theme";
import { ThemeProvider } from "styled-components";
import useColorScheme from "../hooks/useColorScheme";

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
  setDeviceSchemeMode: (isDeviceThemeOn: Boolean) => void;
}

export const ThemeColorContext = createContext({} as ThemeContextData);

export function ThemeColorProvider({ children, ...rest }: ThemeProviderProps) {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = useState("light");
  const [theme, setTheme] = useState(ThemesData.light);
  const [isDeviceSchemeMode, setIsDeviceSchemeMode] = useState(false);

  useEffect(() => {
    //get theme by assync storage and if is using the device theme
  }, []);

  useEffect(() => {
    //to get device mode if set is on
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

  function setDeviceSchemeMode(isDeviceThemeOn: Boolean) {}

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
          setDeviceSchemeMode,
        }}
      >
        {children}
      </ThemeColorContext.Provider>
    </Theme>
  );
}

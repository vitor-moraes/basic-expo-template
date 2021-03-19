import React, { useState, useEffect, useContext } from "react";
import {} from "react-native";
import { Container, SwitchText, SwitchTheme } from "./styles";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

const ChangeTheme = () => {
    const { changeTheme, themeType } = useContext(ThemeColorContext);
    const [themeState, setThemeState] = useState(
      themeType === "light" ? true : false
    );
  
    useEffect(() => {
      changeTheme(themeState ? "light" : "dark");
    }, [themeState]);
  
    const toggleSwitch = () => {
      setThemeState((previousState) => !previousState);
    };
  
    return (
      <Container>
        <SwitchText>Tema: light / dark</SwitchText>
        <SwitchTheme onValueChange={toggleSwitch} value={themeState} />
      </Container>
    );
  };
  
  export default ChangeTheme;
  
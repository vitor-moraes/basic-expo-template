import React, { useState, useEffect, useContext } from "react";
import {} from "react-native";
import BasicButton from "../../components/BasicButton";
import { Container, SwitchText, SwitchTheme } from "./styles";
import { ThemeColorContext } from "../../contexts/ThemeColorContext";

interface HomeProps {
  navigation: any;
}

const Home = ({ navigation }: HomeProps) => {
  const { changeTheme, themeType } = useContext(ThemeColorContext);
  const [themeState, setThemeState] = useState(
    themeType === "light" ? true : false
  );
  // const [haveDeviceThemeOn, setHaveDeviceThemeOn] = useState(false);

  useEffect(() => {
    changeTheme(themeState ? "light" : "dark");
  }, [themeState]);

  const toggleSwitch = () => {
    setThemeState((previousState) => !previousState);
  };

  // function getDeviceTheme() {
  //   setHaveDeviceThemeOn(!haveDeviceThemeOn);
  // }

  return (
    <Container>
      <SwitchText>Tema: light / dark</SwitchText>
      <SwitchTheme onValueChange={toggleSwitch} value={themeState} />
      {/* <SwitchText>Utilizar o tema padrão do sistema</SwitchText>
      <SwitchTheme onValueChange={getDeviceTheme} value={haveDeviceThemeOn} /> */}
      {/* <BasicButton
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        Abrir menu
      </BasicButton> */}
    </Container>
  );
};

export default Home;

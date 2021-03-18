import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const SwitchText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  margin-top: 10px;
`;

export const SwitchTheme = styled.Switch`
  transform: scaleX(1.3) scaleY(1.3);
  margin: 10px;
`;

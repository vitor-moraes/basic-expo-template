import styled from "styled-components/native";

export const TouchableContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  height: 50px;
  width: 100px;
  border-radius: 25px;
`;

export const BtnText = styled.Text`
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.background};
`;

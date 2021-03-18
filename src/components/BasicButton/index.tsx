import React, { ReactNode } from "react";
import {} from "react-native";
import { TouchableContainer, BtnText } from "./styles";

interface BasicButtonProps {
  children: ReactNode;
  onPress: () => void;
}

const BasicButton = ({ children, onPress }: BasicButtonProps) => {
  return (
    <TouchableContainer onPress={onPress}>
      <BtnText>{children}</BtnText>
    </TouchableContainer>
  );
};

export default BasicButton;

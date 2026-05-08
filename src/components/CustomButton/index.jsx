
import React from "react";
import {TouchableOpacity, Text} from "react-native"
import styles from "./styles";

const CustomButton = ({ text, onPress, style,customStyle ,customTxtSyle}) => {
  return (
      <TouchableOpacity   style={[styles.container, {...customStyle}]} onPress={onPress}>
          <Text style={[styles.buttonText, customTxtSyle]}>{text}</Text>
        </TouchableOpacity>
  );
};

export default CustomButton;
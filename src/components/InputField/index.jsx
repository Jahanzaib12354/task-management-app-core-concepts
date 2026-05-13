import React from "react";
import styles from "./styles";
import { TextInput, View, Text } from "react-native";

const InputField = ({
  value,
  onChangeText,
  placeholder = "something",
  customStyle,
  secureTextEntry,
  editable,
  label,
  required, 
}) => {
  return (
    <View>
      {label && (<Text style={styles.label}>{label}
      {required && <Text style={styles.star}> *</Text>}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.container, customStyle]}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
    </View>
  );
};

export default InputField;
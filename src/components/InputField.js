import { COLORS } from 'assets/';
import React from 'react';
import { View, TextInput } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';


const InputField = ({
  placeholder,
  capitalize,
  keyboardType,
  returnKeyType,
  checkVal,
  txtValue,
  errorMsg
}) => {
  const { t, i18n } = useTranslation();

  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        style={[MainStyle.inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.black}
        autoCapitalize={capitalize}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onChangeText={checkVal}
        defaultValue={txtValue}
        // underlineColorAndroid="#EFEFEF"
        // secureTextEntry={secureText}
        blurOnSubmit={false}
      />

    </View>
  );
};

export default InputField;

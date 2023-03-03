import {COLORS, FONTS} from 'assets/theme';
import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextField = props => {
  return (
    <View style={{marginLeft: 16, marginRight: 16, marginTop: 23}}>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: 12,
          color: COLORS.black,
          fontWeight: '500',
          lineHeight: 19.2,
          marginBottom: 8,
        }}>
        {props.title}
      </Text>
      <View
        style={{
          borderColor: COLORS.grey,
          borderWidth: 1,
          height: 46,
          backgroundColor: props.backgroundColor,
        }}>
        <TextInput
          placeholder={props.placeholder}
          secureTextEntry={props.secureText}
          placeholderTextColor={COLORS.darkGrey}
          maxLength={15}
          onChangeText={props.onChangeText}
          style={{
            marginHorizontal: 10,
            flex: 1,
            fontFamily: FONTS.light,
            fontSize: 14,
            color: COLORS.black,
          }}
        />
      </View>
    </View>
  );
};

export default TextField;

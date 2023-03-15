import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {FONTS, COLORS, ComIcons} from 'assets/index';

const NavigationHeader = ({
  navigation,
  title,
  pop = true,
  onPress,
  productSelection = false,
  displayBtn = 'back',
}) => {
  const back = () => {
    navigation.pop();
  };
  return (
    <View
    style={styles.mainView}>
    <View
      style={{
        width: '80%',
        alignItems: 'center'
      }}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    {productSelection ? <View>{ComIcons.productSelection}</View> : null}
    <TouchableOpacity activeOpacity={0.7}
      hitSlop={30}
      style={{
        position: 'absolute',
        left: 0,
        marginLeft: displayBtn === 'dash' ? 20 : 10
      }}
      onPress={() => (pop ? back() : onPress())}>
        {displayBtn === 'back'
         ? ComIcons.back
           : displayBtn === 'dash'
           ? ComIcons.drawer
           : displayBtn === 'null'
           ? null
           : ComIcons.back}
    </TouchableOpacity>
  </View>
  );
};

export default NavigationHeader;
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor:COLORS.red,
      marginTop:-4,
      alignItems:'center'
  },
  titleText: {
    marginLeft:'-5%',
    textAlign: 'center',
    fontFamily: FONTS.medium,
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 54,
    color: COLORS.white,
  },
});

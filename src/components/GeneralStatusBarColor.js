import React from 'react';
import {View, StatusBar} from 'react-native';
import {COLORS} from '../assets';
import styles from './styles/GeneralStatusBarColorStyles';

const GeneralStatusBarColor = ({backgroundColor = true, ...props}) => {
  return (
    <View
      style={[
        styles.statusBar,
        {backgroundColor: backgroundColor == true ? COLORS.red : COLORS.white},
      ]}>
      <StatusBar translucent backgroundColor={COLORS.red} {...props} />
    </View>
  );
};
export default GeneralStatusBarColor;

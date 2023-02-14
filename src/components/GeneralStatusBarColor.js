import React from 'react';
import { View, StatusBar } from 'react-native';
import { COLORS } from '../assets';
import styles from './styles/GeneralStatusBarColorStyles';

const GeneralStatusBarColor = ({ ...props }) => ( 
<View style={styles.statusBar}>
<StatusBar translucent backgroundColor={COLORS.red} {...props} />
</View>
);
export default GeneralStatusBarColor;
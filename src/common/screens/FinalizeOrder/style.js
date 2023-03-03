import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

export default styles = StyleSheet.create({
  screen: {
    marginTop: 36, marginLeft: 16, marginRight: 16
},
  payment: {
    textAlign: 'center',
    fontFamily: FONTS.bold,
    fontSize: 25,
    color:COLORS.black,
    lineHeight: 27.63,
    marginBottom: 16,
  },
  flatlist:{justifyContent: 'space-evenly', height: 300},
});

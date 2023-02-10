import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

export default styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'space-between', margin: 18},
  text: {
    fontFamily: FONTS.normal,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  input: {
    marginTop: 15,
    height: 317,
    borderColor: COLORS.darkGrey,
    borderWidth: 1,
  },
  button: {flexDirection: 'row', justifyContent: 'space-evenly'},
});

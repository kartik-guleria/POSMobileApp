import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'assets/index';

export default styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
    alignSelf: 'center',
    marginTop: 23,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 32.5,
  },
  title: {
    marginTop: 23,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: FONTS.normal,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
  },
});

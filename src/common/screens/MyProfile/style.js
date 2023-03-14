import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'assets/index';
import { DEVICE } from '../../../assets/theme';

export default styles = StyleSheet.create({
  image: {
    height: 71,
    width: 71,
    alignSelf: 'center',
    marginTop: DEVICE==='tab' ? 0 :23,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 32.5,
  },
  title: {
    marginTop: 23,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: FONTS.medium,
    color:COLORS.black,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
  },
});

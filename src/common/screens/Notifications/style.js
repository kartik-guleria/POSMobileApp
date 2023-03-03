import {StyleSheet} from 'react-native';
import {FONTS} from 'assets/index';
import { COLORS } from '../../../assets';

export default styles = StyleSheet.create({
  header: {
    fontFamily: FONTS.medium,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
    marginLeft: 20,
    color:COLORS.black
  },
  box: {
    alignItems: 'center',
    margin: 15,
    height: 82,
    flexDirection: 'row',
  },
  textView: {
    marginLeft: 11,
    marginRight: 11,
  },
  name:{
    fontFamily: FONTS.medium,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22.4,
  },
  desc :{
    marginTop: 6,
    fontFamily: FONTS.normal,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 19.2,
  },
});

import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from 'assets/index';

export default styles = StyleSheet.create({
  desc: {
    fontFamily: FONTS.normal,
    fontSize: 12,
    color:COLORS.black,
    fontWeight: '300',
    lineHeight: 19.2,
  },
  title: {
    marginTop: 23,
    fontFamily: FONTS.medium,
    color:COLORS.black,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 24,
  },
  name: {
    marginBottom: 6,
    fontFamily: FONTS.bold,
    color:COLORS.black,
    fontSize: 14,
    lineHeight: 22.4,
  },
  image: {marginLeft: 8, height: 64, width: 60},
  boxTextView: {marginLeft: 15, marginRight: 6,
    flex:1, justifyContent: 'center'},
  boxView: {
    alignItems: 'center',
    height: 82,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: 16,
    flexDirection: 'row',
  },
  screen: {flex: 1, marginHorizontal: 16,paddingBottom:10},
});

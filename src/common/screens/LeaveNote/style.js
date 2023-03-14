import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'assets/index';

export default styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'space-between', margin: 16},
  text: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  input: {
    marginTop: 15,
    height: 317,
    elevation: 4,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 19.2,
  },
  button: {flexDirection: 'row', justifyContent: 'space-evenly'},
});

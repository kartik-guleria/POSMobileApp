import { StyleSheet, Dimensions } from 'react-native';
import {COLORS, FONTS} from 'assets/index';
const { height, width } = Dimensions.get('window');
const aspectRatio = height / width;
export default styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: aspectRatio < 1.6 ? "12%" : 5,
    marginRight: aspectRatio < 1.6 ? "12%" : 5, 
  },
  box: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    // height: 424,
    justifyContent: 'center',
  },
  image: {
    marginTop: aspectRatio < 1.6 ? 100 : 33,
    alignSelf: 'center',
    marginBottom: 11,
  },
  title: {
    marginBottom: 45,
    textAlign: 'center',
    fontFamily: FONTS.medium,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    color: COLORS.black,
  },
  inputView: {
    flexDirection: 'row',
    height: 49,
    borderColor: COLORS.grey,
    marginLeft: aspectRatio < 1.6 ? 100 : 22,
    marginRight: aspectRatio < 1.6 ? 100 : 22,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },
  inputText: {
    marginLeft: 18,
    marginRight: 18,
    flex: 1,
    fontFamily: FONTS.medium,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    color: COLORS.black,
    alignSelf:'center'
  },
  reset: {
    textDecorationLine: 'underline',
    color: COLORS.red,
    alignSelf: 'center',
    marginTop: 22,
    backgroundColor:'grey',
    marginBottom: aspectRatio < 1.6 ? 100 : 35,
  },
  resetText: {
    fontFamily: FONTS.normal,
    fontSize: 12,
    lineHeight: 12.85,
    textDecorationLine: 'underline',
    color: COLORS.red,
  },
  separator: {
    width: 1,
    backgroundColor: "#D6D6D6",
  },
  icon: { margin: 15.93, },
});

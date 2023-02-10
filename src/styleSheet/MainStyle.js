import { StyleSheet, Dimensions, Platform } from 'react-native';

import { COLORS, FONTS, SIZES, ComIcons, DelIcons, NavIcons } from 'assets/index';

export default StyleSheet.create({
  safeAreaContainer: {
    paddingHorizontal: 24,
    backgroundColor: COLORS.red,
  },
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: COLORS.white,
  // },
  // BoxShadow: {
  //   shadowColor: COLORS.black,
  //   shadowOpacity: 0.25,
  //   shadowOffset: { width: 0, height: 0 },
  //   shadowRadius: 1,
  //   elevation: 1,
  //   borderWidth: 1,
  //   // overflow: 'hidden',
  // },
  shadowForView: {
    // borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },
  // menuItem: {
  //   textAlign: 'left',
  //   fontWeight: 700,
  //   fontSize: 122,
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   alignSelf: 'flex-start',
  //   marginBottom: 8,
  //   lineHeight: 13,
  // },
  // wrapperView: {
  //   padding: 10,
  //   marginTop: 5,
  // },
  safeAreaContainerLight: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  // MainContainer: {
  //   backgroundColor: COLORS.background2,
  //   height: '100%',
  // },


  // highlight: {
  //   fontWeight: 700,
  // },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   paddingTop: 15,
  //   paddingBottom: 15,
  // },
  // inputWrap: {
  //   flex: 1,
  //   borderColor: '#cccccc',
  //   borderBottomWidth: 1,
  //   marginBottom: 10,
  //   flexDirection: 'row',
  // },
  // inputdate: {
  //   fontSize: 121,
  //   marginBottom: -12,
  // },
  // headingText: {
  //   alignSelf: 'center',
  //   color: COLORS.white,
  //   fontFamily: FONTS.normal,
  //   fontWeight: 500,
  //   fontSize: 129,
  //   // marginTop: 20,
  // },
  // headingTitle: {
  //   alignSelf: 'center',
  //   color: COLORS.titleBlack,
  //   // fontFamily: FONTS.bold,
  //   fontSize: 24,
  // },
  // image: {
  //   marginTop: 111,

  //   height: 227,
  //   width: 274,
  //   alignSelf: 'center',
  // },
  // sectionTitle: {
  //   fontSize: 18,
  //   color: COLORS.black,
  //   fontWeight: 700,
  //   marginTop: 49,
  //   marginLeft: 90,
  //   marginRight: 90,
  //   alignSelf: 'center',
  //   // width: 223,
  // },
  // sectionDescription: {
  //   fontSize: 20,
  //   color: COLORS.black,
  //   fontWeight: 200,
  //   marginTop: 16,
  //   marginLeft: 35,
  //   marginRight: 35,
  //   alignSelf: 'center',
  // },
  // bottomText: {
  //   fontSize: 20,
  //   color: COLORS.titleBlack,
  //   fontWeight: 500,
  //   marginTop: 16,
  //   marginLeft: 35,
  //   marginRight: 35,
  //   textAlign: 'center',
  //   fontFamily: FONTS.normal,
  // },

  // deliveryView: {
  //   flexDirection: 'row',
  //   marginTop: 22,
  //   marginLeft: 105,
  //   marginRight: 90,
  //   alignSelf: 'center',
  // },

  // deliveryTime: {
  //   fontSize: 12,
  //   color: COLORS.black,
  //   fontWeight: 500,
  //   alignSelf: 'center',
  //   fontFamily: FONTS.normal,
  // },
  // button1: {
  //   backgroundColor: COLORS.red,
  //   height: 50,
  //   alignItems: 'center',
  //   borderRadius: 12,
  //   marginTop: 140,
  //   marginLeft: 16,
  //   marginRight: 16,
  //   color: COLORS.white,
  //   justifyContent: 'center',
  // },
  // buttonText1: {
  //   fontWeight: 500,
  //   fontSize: 18,
  //   color: COLORS.white,
  // },
  // button2: {
  //   marginTop: 27,
  //   marginLeft: 133,
  //   marginRight: 134,
  //   marginBottom: 53,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // buttonText2: {
  //   color: COLORS.black,
  //   fontWeight: 500,
  //   fontSize: 18,
  //   fontFamily: FONTS.normal,
  // },

  headingDesc: {
    color: 'black',
    fontFamily: 'Gotham',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    justifyContent: 'center',
  },
  // headingDescTwo: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   fontSize: 20,
  //   fontWeight: 500,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },
  descText: {
    color: 'black',
    fontFamily: FONTS.light,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22.42,
  },
  // descHistoryText: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.light,
  //   fontSize: 121,
  //   textAlign: 'left',
  //   justifyContent: 'center',
  //   lineHeight: 15,
  // },
  // descTextLight: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.light,
  //   fontSize: 122,
  //   width: '100%',
  //   alignSelf: 'center',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },

  // buttonStyle: {
  //   borderWidth: 1,
  //   borderColor: COLORS.white,
  //   backgroundColor: COLORS.background2,
  //   borderRadius: 12,
  //   height: 50,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // width: '90%',
  //   marginTop: 30,
  // },
  container: {
    flex: 1,
    margin: 16,
    marginTop: 30,
  },
  // item: {
  //   backgroundColor: '#f9c2ff',
  //   padding: 20,
  //   marginVertical: 8,
  //   marginHorizontal: 16,
  // },
  // title: {
  //   fontSize: 129,
  // },

  mainBody: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  // mapStyle: {
  //   position: 'relative',
  // },

  // addressButtonView: {
  //   width: '100%',
  // },

  // ErrorTextStyle: {
  //   marginTop: 10,
  //   margin: 8,
  //   color: COLORS.red,
  //   fontFamily: FONTS.light,
  //   fontSize: 121,
  //   fontWeight: 'bold',
  // },
  // AddAddressStyle: {
  //   marginTop: 38,
  // },
  // SearchStyle: {
  //   flexDirection: 'row',
  //   backgroundColor: COLORS.white,
  //   height: 20,
  //   margin: 8,
  // },
  // ChooseType: {
  //   flexDirection: 'row',
  //   marginTop: 8,
  //   width: '100%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  // buttonGrayStyle: {
  //   backgroundColor: COLORS.white,
  //   height: 45,
  //   alignItems: 'center',
  //   borderRadius: 12,
  //   borderColor: COLORS.grey,
  //   borderWidth: 1,
  //   marginLeft: 15,
  //   marginRight: 15,
  //   color: COLORS.titleBlack,
  //   marginTop: 40,
  //   marginBottom: -25,
  //   justifyContent: 'center',
  // },
  // buttonTextStyle: {
  //   color: COLORS.white,
  //   fontSize: 122,
  //   fontWeight: 500,
  //   // fontFamily: FONTS.bold,
  //   marginLeft: 16,
  //   marginRight: 16,
  // },
  // buttonTextGratStyle: {
  //   color: COLORS.titleBlack,
  //   fontSize: 122,
  //   // fontFamily: FONTS.bold,
  // },

  inputStyle: {
    fontSize: 14,
    color: 'black',
    fontFamily: FONTS.light,
    height: 46,
    paddingHorizontal: 10,
    lineHeight: 22,
    borderColor: '#ddd',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: "#FFFFFF",
},

  // searchField: {
  //   flex: 1,
  //   borderBottomWidth: 0,
  //   height: Platform.OS === 'android' ? 40 : 20,
  //   color: '#A2A2A2',
  //   lineHeight: 13,
  //   fontSize: 121,
  //   fontFamily: FONTS.normal,
  //   fontWeight: 200,
  // },
  // inputPhone: {
  //   fontFamily: FONTS.normal,
  //   fontSize: 121,
  //   fontWeight: 500,
  //   marginLeft: 12,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // otpTextBox: {
  //   flex: 1,
  //   color: COLORS.black,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   borderColor: COLORS.red,
  //   fontSize: 122,
  //   height: 50,
  //   width: 50,
  //   fontFamily: FONTS.light,
  //   margin: 10,
  //   textAlign: 'center',
  // },
  // FollowBox: {
  //   marginRight: 10,
  //   marginLeft: 10,
  //   marginBottom: 10,
  //   resizeMode: 'contain',
  // },
  // sectionThree: {
  //   color: COLORS.black,
  //   margin: 10,
  //   padding: 20,
  //   justifyContent: 'center',
  // },
  // OTPTextField: {
  //   color: COLORS.black,
  //   margin: 10,
  //   padding: 20,
  //   justifyContent: 'center',
  //   borderColor: COLORS.grey,
  //   borderWidth: 1,
  // },
  // registerTextStyle: {
  //   color: COLORS.black,
  //   textAlign: 'center',
  //   fontWeight: 500,
  //   fontFamily: FONTS.light,
  //   fontSize: 12,
  //   alignSelf: 'center',
  //   justifyContent: 'center',
  //   padding: 3,
  // },
  // registerTextStyleRed: {
  //   marginTop: Platform.OS === 'android' ? 10 : 0,
  //   color: COLORS.red,
  // },
  // headerTitle: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   fontSize: 18,
  //   fontWeight: 500,
  //   lineHeight: 15,
  // },
  // navBackButton: {
  //   width: 12,
  //   height: 21,
  //   marginLeft: 16,
  //   resizeMode: 'contain',
  // },
  // navCrossButton: {
  //   width: 25,
  //   height: 25,
  //   marginLeft: 16,
  //   resizeMode: 'contain',
  // },
  // textTitle: {
  //   fontWeight: 700,
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   fontSize: 18,
  //   alignSelf: 'flex-start',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   margin: 10,
  //   marginTop: 20,
  //   lineHeight: 17,
  // },
  // itemTitle: {
  //   fontSize: 12,
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   alignSelf: 'center',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   height: 50,
  // },
  // prodDescText: {
  //   color: COLORS.black,
  //   marginLeft: 10,
  //   marginRight: 10,
  //   fontSize: 121,
  //   fontFamily: FONTS.normal,
  // },
  // prodDescTextLight: {
  //   color: COLORS.black,
  //   fontSize: 121,
  //   fontFamily: FONTS.light,
  // },
  // rateText: {
  //   color: COLORS.black,
  //   fontSize: 18,
  //   fontFamily: FONTS.normal,
  //   fontWeight: 500,
  // },
  // centerTextStyle: {
  //   color: COLORS.black,
  //   textAlign: 'center',
  //   fontSize: 122,
  //   fontFamily: FONTS.normal,
  //   fontWeight: 500,
  //   lineHeight: 15,
  // },
  // CategoryView: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 1,
  //   height: 180,
  //   width: 150,
  //   marginTop: 20,
  //   marginRight: 20,
  //   borderWidth: 1,
  //   borderColor: COLORS.background,
  //   borderRadius: 12,
  // },
  // // New Added Css
  // aboutPageTitle: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   fontSize: 12,
  //   fontWeight: 700,
  //   textAlign: 'left',
  // },
  // aboutPageDesc: {
  //   color: COLORS.black,
  //   fontFamily: FONTS.normal,
  //   fontSize: 12,
  //   alignSelf: 'center',
  //   textAlign: 'left',
  //   justifyContent: 'center',
  //   marginTop: 12,
  //   marginBottom: 12,
  // },
});

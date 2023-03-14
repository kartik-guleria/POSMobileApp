import { Platform, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const appTheme = {COLORS, FONTS};

export const COLORS= {
red :'#E1251B',
black : '#000000',
lightBlack :'#333333',
white : '#FFFFFF',
grey :'#C5C5C5',
lightGrey:'#D3D3D3',
darkGrey:'#999999',
g1:'#CCCCCC',
g2:'#999999',
g3:'#666666',
g4:'#333333',
}

const aspectRatio = height / width;

export const DEVICE = aspectRatio < 1.6 ? 'tab' : 'mobile'

  export const FONTS = {
    light: Platform.OS === 'ios' ? 'Gotham-Light' : 'Gotham-Light',
    bold: Platform.OS === 'ios' ? 'Gotham-Bold' : 'GothamBold',
    medium: Platform.OS === 'ios' ? 'Gotham' : 'GothamMedium',
    normal: Platform.OS === 'ios' ? 'Gotham' : 'GothamBook',
  };

export default appTheme;

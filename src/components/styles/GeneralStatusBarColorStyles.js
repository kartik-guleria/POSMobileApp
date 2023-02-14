import { StyleSheet, Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { COLORS } from '../../assets';

const height = getStatusBarHeight();
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? height : StatusBar.currentHeight;
export default StyleSheet.create({
statusBar: {
height: STATUSBAR_HEIGHT,
backgroundColor:COLORS.red
}
});

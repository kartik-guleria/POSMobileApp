import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';

export default styles = StyleSheet.create({
    tableName: {
        fontSize: 17,
        position: 'absolute',
        fontFamily:FONTS.bold
    },
    topBarView: {
      height: 50,
      margin: 8,
      borderRadius: 2,
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.15,
      shadowRadius: 2,
      justifyContent: 'center',
      elevation: 4,
    },
    topBarText: {
        justifyContent: 'center',
        fontSize: 12,
        padding: 10,
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: FONTS.normal,
    },
    buttonStyle: {
        fontFamily: FONTS.bold,
        fontSize: 16, 
        textTransform: 'uppercase',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: COLORS.white
    }
});

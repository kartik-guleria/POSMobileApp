import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from 'assets/index';

export default styles = StyleSheet.create({
    tableName: {
        fontSize: 17, fontWeight: '700',
        position: 'absolute',
    },
    topBarView: {
        height: 50,
        margin: 8,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
        fontFamily: FONTS.normal,
        fontSize: 16, fontWeight: '700',
        textTransform: 'uppercase',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: 'white'
    }
});

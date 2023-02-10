import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from "react-native";
import { FONTS,COLORS,ComIcons} from 'assets/index'; 
import { useTranslation } from 'react-i18next';


const NavigationHeader = ({navigation,title,pop=true,onSelect,productSelection = false}) =>{
    const { t, i18n } = useTranslation();

    const back =() => {
        navigation.pop();
    }
    return (
        <View style={styles.mainView}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={()=> pop ? back() : onSelect() } style={{ marginLeft: 10,backgroundColor:'green' }}>{ComIcons.back}</TouchableOpacity>
            <View style ={{width:'80%'}}><Text style={styles.titleText}>{title}</Text></View>
           { productSelection ? <View>{ComIcons.productSelection}</View>:null}
</View>
    );
}

export default NavigationHeader;
const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:COLORS.red,
    },
    titleText: {
        textAlign: 'center',
        fontFamily: FONTS.normal,
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 54,
        color: 'white'
    }

});

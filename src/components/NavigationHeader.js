import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FONTS,COLORS,ComIcons} from 'assets/index'; 
import { useTranslation } from 'react-i18next';


const NavigationHeader = ({navigation,title,pop=true,onPress,productSelection = false,displayBtn='back'}) =>{
    const { t, i18n } = useTranslation();

    const back =() => {
        navigation.pop();
    }
    return (
        <View style={styles.mainView}>
         <TouchableOpacity onPress={()=> pop ? back() : onPress() } style={{ marginLeft: 10}}>{displayBtn==='back'? ComIcons.back : displayBtn ==='dash' ? ComIcons.drawer :  displayBtn ==='null' ? null : ComIcons.back }</TouchableOpacity>
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

import React from "react";
import { View, TouchableOpacity,Text,StatusBar, SafeAreaView} from "react-native";
import { COLORS,ComIcons, FONTS} from "assets/index";
import { useTranslation } from 'react-i18next';

const NavigationHeaderDash = ({title,navigation,displayBtn,onPress}) =>{
    const { t, i18n } = useTranslation();

    return(
        <View>
            <View style={{backgroundColor:COLORS.red,height:40}}></View>
            <View style={{backgroundColor:COLORS.red,flexDirection:'row',alignItems:'center',height:49}}>
            {displayBtn ? <TouchableOpacity onPress ={onPress} style={{marginLeft:16}}>{ComIcons.drawer}</TouchableOpacity> : <View style={{width:31}}></View>}
            <Text style={{width:'81%',textAlign:'center',fontFamily:FONTS.normal,fontWeight:'400',fontSize:16,lineHeight:19.2,color:COLORS.white, textTransform: "uppercase",}}>{title}</Text>
        </View>
        </View>

    );
}

export default NavigationHeaderDash;

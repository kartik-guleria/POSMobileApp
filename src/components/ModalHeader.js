import React from "react";
import {View,TouchableOpacity,Text} from 'react-native';
import { COLORS,ComIcons,FONTS } from "assets/index";
import { useTranslation } from 'react-i18next';


const ModalHeader = ({title,newLine=false,newLineTitle,navigation,onPressCross}) => {
    const { t, i18n } = useTranslation();

    return(
        <View style={{paddingLeft:9,height:68,backgroundColor:COLORS.red,flexDirection:'row',alignItems:'center'}}>
   <TouchableOpacity onPress={onPressCross}>{ComIcons.whiteCross}</TouchableOpacity>
    <View style={{width:"90%",alignItems:'center'}}>
        <Text style={{fontFamily:FONTS.normal,fontSize:16,fontWeight:'500',color:COLORS.white}}>{title}</Text>
        {newLine ?<Text style={{fontFamily:FONTS.normal,fontSize:16,fontWeight:'500',color:COLORS.white}}>{newLineTitle}</Text>:null}
    </View>
</View>
    );
};

export default ModalHeader;
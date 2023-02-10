import { COLORS, FONTS } from "assets/theme";
import React from "react";
import {View,Text,TextInput} from 'react-native';
import { useTranslation } from 'react-i18next';


const TextField = props => {
    const { t, i18n } = useTranslation();

    return(
<View style ={{marginLeft:16,marginRight:16,marginTop:23}}>
    <Text style={{fontFamily:FONTS.normal,fontSize:12, fontWeight:'500',lineHeight:19.2,marginBottom:8}}>{props.title}
    </Text>
    <View style={{borderColor:COLORS.grey,borderWidth:1,height:46,backgroundColor:props.backgroundColor}}>
    <TextInput 
    placeholder={props.placeholder}
    secureTextEntry= {props.secureText}
    maxLength={15}
    style={{marginLeft:10,marginRight:10,flex:1,fontFamily:FONTS.normal,fontSize:14,fontWeight:'400',alignItems:'center'}} />
</View>
       
</View>
    );
}

export default TextField;
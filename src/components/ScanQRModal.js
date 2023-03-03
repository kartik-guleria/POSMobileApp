import React from "react";
import {TouchableOpacity, View,Text} from 'react-native';
import ModalHeader from "./ModalHeader";
import { COLORS, ComIcons } from "assets/index";
import MyButton from "./MyButton";
import { useTranslation } from 'react-i18next';
import { FONTS } from "../assets";


const ScanQRModal = props => {
    const { t, i18n } = useTranslation();
return(
<View style={{}}>
    <ModalHeader title= {t('common:scanQR')}  onPressCross ={props.onPressCross}/>
    <View style ={{justifyContent:'center',alignItems:'center',height:342,borderColor:COLORS.grey,borderWidth:1,margin:9}}>
        {ComIcons.scanGrey}
        <TouchableOpacity style={{backgroundColor:COLORS.red,height:38,alignItems:'center',justifyContent:'center',marginTop:28}}>
            <Text style={{fontSize:16,fontFamily:FONTS.bold,lineHeight:17.68,color:COLORS.white,marginHorizontal:18}}>
                SCAN
            </Text>
        </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginHorizontal:16,marginBottom:20}}>
        <MyButton title={t('common:back')} width={false} size={false} backColor='grey' onPress={props.onPressCross}/><MyButton width={false} size={false} title={t('common:proceed')}/>
    </View>
</View>
);
}

export default ScanQRModal;
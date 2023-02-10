import { FONTS } from "assets/theme";
import React from "react";
import { View,Text} from "react-native-animatable";
import MyButton from "./MyButton";
import { useTranslation } from 'react-i18next';


const CheckModal = ({title,btnTitle,onPressNo,onPress}) => {
    const { t, i18n } = useTranslation();

return(
    <View style={{flex:1}}>
<Text style={{textAlign:'center',flex:1,marginTop:40,fontFamily:FONTS.normal,fontSize:16,fontWeight:'400',lineHeight:17,marginHorizontal:55}}>
{title}
</Text>
<View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'grey',}}>
<MyButton title={'NO'}  onPress={onPressNo} width={false} backColor={'white'} /><MyButton width={false} title={btnTitle} onPress={onPress}/></View>

</View>
);
}
export default CheckModal;
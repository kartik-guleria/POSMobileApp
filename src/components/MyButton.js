import { FONTS } from "assets/";
import { COLORS } from "assets/";
import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import { useTranslation } from 'react-i18next';


const MyButton = ({onPress ,title, size = true , backColor = 'red',width =true })=> {
    const { t, i18n } = useTranslation();

    return (
<TouchableOpacity onPress={onPress} style={{width: width ? null : '50%', height:49, backgroundColor: backColor === 'red' ? COLORS.red : backColor === 'grey' ? COLORS.grey : backColor === 'white' ? COLORS.white :null ,alignItems:'center',justifyContent:'center',marginHorizontal: size ? 16:21,borderWidth:backColor === 'white' ? 1:0, borderColor: backColor === 'white' ? COLORS.grey: null }}>
            <Text style={{ fontFamily: FONTS.normal, fontSize: 16, fontWeight: '700', lineHeight: 17.68, textTransform: 'uppercase', color: backColor === 'white' ? null : COLORS.white }}>
        {title}
    </Text>
</TouchableOpacity>

    );

}
export default MyButton;

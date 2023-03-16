import { FONTS } from "assets/";
import { COLORS } from "assets/";
import React from "react";
import { Text,TouchableOpacity } from "react-native";
import { useTranslation } from 'react-i18next';

const MyButton = ({onPress ,title, size = true , backColor = 'red',width =true })=> {
    const { t, i18n } = useTranslation();

    return (
<TouchableOpacity activeOpacity={0.7} onPress={onPress} style={{width: width ? null : '50%', height:49, backgroundColor: backColor === 'red' ? COLORS.red : backColor === 'grey' ? COLORS.grey : backColor === 'white' ? COLORS.white :null ,alignItems:'center',justifyContent:'center',marginHorizontal: size ? 16:21,borderWidth:backColor === 'white' ? 1 : 0, borderColor: backColor === 'white' ? COLORS.red :null}}>
            <Text style={{ fontFamily: FONTS.bold, fontSize: 16, lineHeight: 17.68, textTransform: 'uppercase', color: backColor === 'white' ? COLORS.red : COLORS.white }}>
        {title}
    </Text>
</TouchableOpacity>

    );

}
export default MyButton;

import React from "react";
import { Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FONTS,COLORS} from 'assets/index';
import { useTranslation } from 'react-i18next';


const SkipButton = props => {
    const { t, i18n } = useTranslation();

    const navigation = useNavigation();

return (
    <View>
        <TouchableOpacity 
            onPress={props.onPress}>
            <Text style = {{fontFamily:FONTS.bold,fontSize:14,lineHeight:15,marginLeft:7,marginRight:7}}>
               Skip
            </Text>
        </TouchableOpacity>
    </View>

);
};

export default SkipButton;

import { FONTS } from "assets/theme";
import InputField from "components/InputField";
import MyButton from "components/MyButton";
import NavigationHeader from "components/NavigationHeader";
import React from "react";
import { SafeAreaView,View,Text} from "react-native";
import MainStyle from "styleSheet/MainStyle";
import { useTranslation } from 'react-i18next';


const FinalizeOrderAmount = props => {
    const { t, i18n } = useTranslation();

    return(
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
    <NavigationHeader title= {t('common:finalizeOrder')} navigation={props.navigation}/>  
    <View style={{justifyContent:'space-between',marginVertical:30,flex:1}}>

       <View style={{marginHorizontal:16}}><Text style ={{textAlign:"center",fontSize:25,fontFamily:FONTS.normal,fontWeight:'700',lineHeight:27.63}}>
    1000L {t('common:cash')}
        </Text>
        <InputField placeholder={'1000L Cash'}/></View>

<MyButton title={t('common:tender')} onPress={()=> props.navigation.navigate('PaymentCompleted')}/>

    </View>
</SafeAreaView>
    );
}
export default FinalizeOrderAmount;
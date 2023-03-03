import React from "react";
import { SafeAreaView,Text,View } from "react-native";
import NavigationHeader from "components/NavigationHeader";
import { COLORS, FONTS } from "assets/theme";
import { ComIcons } from "assets/";
import MainStyle from "styleSheet/MainStyle";
import MyButton from "components/MyButton";
import InputField from "components/InputField";
import { replace } from 'navigation/RootNaviagtion';
import { useTranslation } from 'react-i18next';


const InviteGuest = props => {
    const { t, i18n } = useTranslation();

    return(
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
    <NavigationHeader title = {'Invite Guest'} navigation={props.navigation}/>
    
    <View style= {{flex:1,justifyContent:'space-between'}}>
       
        <View style={{marginTop:41,marginLeft:17,marginRight:17}}>

        <View style={{alignSelf:'center'}}>{ComIcons.inviteGuest}</View>

        <Text style ={{textAlign:'center',marginBottom:14,marginTop:41,fontFamily:FONTS.normal,color:COLORS.black,fontSize:16,fontWeight:'400',lineHeight:22.4}}>
        Invite guest to download wonderbites app and use QR code by filling up the information below.
            </Text>
            <InputField
              placeholder="Name"
              capitalize="none"
              keyboardType="default"
              returnKeyType="next"
            //   checkVal={value => setEmail(value)} 
            />
              <InputField
              placeholder="Phone Number"
              capitalize="none"
              keyboardType="number-pad"
              returnKeyType="next"
            //   checkVal={value => setEmail(value)} 
            />
        </View>
        <MyButton title={"SEND INVITATION"} onPress={()=> props.navigation.navigate('DashBoard')}/>
    </View>
</SafeAreaView>
    );
}

export default InviteGuest;
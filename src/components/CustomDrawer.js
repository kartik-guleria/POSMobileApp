import React from "react";
import { DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
import { View,Text, TouchableOpacity} from "react-native";
import { ComIcons } from "assets/";
import { COLORS, FONTS } from "assets/theme";
import { useTranslation } from 'react-i18next';


const CustomDrawer = props => {
    const { t, i18n } = useTranslation();

    return(
        <View style ={{flex:1,justifyContent:'space-between'}}>
<DrawerContentScrollView {...props} contentContainerStyle={{justifyContent:'space-between',flex:1,marginBottom:48}}>
    <View>
    <DrawerItemList {...props}/>
    </View>

<TouchableOpacity style={{flexDirection:'row',marginLeft:16,alignItems:'center'}} onPress= {()=> props.navigation.navigate('LogIn')}>
    {ComIcons.logOut}
        <Text style={{marginLeft:11.5,fontFamily:FONTS.normal,fontSize:16,fontWeight:'700',lineHeight:17,color:COLORS.darkGrey}}>
            LOGOUT
        </Text>
        </TouchableOpacity>
</DrawerContentScrollView>
</View>
    );
}

export default CustomDrawer;
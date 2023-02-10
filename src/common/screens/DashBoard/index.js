import React from 'react';
import { View, FlatList, SafeAreaView, TouchableOpacity, Text,Image} from 'react-native';
import MainStyle from '../../../styleSheet/MainStyle';
import NavigationHeaderDash from 'components/NavigationHeaderDash';

import ServiceGridTile from '../../../components/ServiceGridTile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ResetPassword from '../ResetPassword';
import MyProfile from '../MyProfile';
import styles from './style';
import SelectLangScreen from '../SelectLangScreen';
import StartShift from '../StartShift';
import Notifications from '../Notifications';
import CustomDrawer from 'components/CustomDrawer';
import { ComIcons, FONTS } from 'assets/index';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

const Dash = props => {
  const { t, i18n } = useTranslation();
  const SERVICES = [
    {id: '1', title: t('common:dineIn'), image: ComIcons.dineIn},
    {id: '2', title: t('common:newOrderSmall'), image: ComIcons.newOrder},
    {id: '3', title: t('common:viewOrders'), image: ComIcons.viewOrders},
    {id: '4', title: t('common:todaySpecial'),image: ComIcons.todaySpecial},
    {id: '5', title: t('common:menuUpdates'), image: ComIcons.menuUpdates},
    {id: '6', title: t('common:orderStatus'), image: ComIcons.orderStatus},
  ];
  const renderServiceGridItem = itemData => {
    return (
      <ServiceGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        menuIndex={itemData.item.id}
        onSelect={() => {
          if (itemData.item.id == '1') {
            props.navigation.navigate('SelectTableScreen', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '2') {
            props.navigation.navigate('ProductSelection', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '3') {
            props.navigation.navigate('Orders', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '4') {
            props.navigation.navigate('TodaySpecial', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '5') {
            props.navigation.navigate('MenuUpdates', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '6') {
            props.navigation.navigate('OrderStatus', {
              serviceId: itemData.item.id,
            });
          }
        }}
      />
    );
  };
  return (
    <>
      <NavigationHeaderDash
        title={t('common:dashboard')}
        displayBtn={true}
        onPress={() => props.navigation.openDrawer()}
      />
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <View style={{flex:1}}>
          <FlatList
            bounces={false}
            numColumns={2}
            data={SERVICES}
            renderItem={renderServiceGridItem}
            contentContainerStyle={{justifyContent:'center',flex:1}}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default function DashBoard() {
  return (
    <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>} initialRouteName={'DashBoard'} screenOptions= {{ headerShown: false, drawerLabelStyle: {
      marginLeft: -10,
      fontFamily: FONTS.normal,
      fontSize: 16,
      fontWeight:'500',
      lineHeight:19,
    }, }}>
      <Drawer.Screen name="DashBoard" component={Dash}/>
     
     <Drawer.Screen name="My Profile" component={MyProfile} options={{
        drawerIcon: ()=> (
          ComIcons.profileRed
        ),
      }}/>
      <Drawer.Screen name="Notifications" component={Notifications}options={{
        drawerIcon: ()=> (
          ComIcons.notification
        ),
      }} />
      <Drawer.Screen name="Language" component={SelectLangScreen} options={{
        drawerIcon: ()=> (
          ComIcons.language
        ),
      }}/>
       <Drawer.Screen name="Start Shift" component={StartShift}options={{
        drawerIcon: ()=> (
          ComIcons.shift
        ),
      }} />
       <Drawer.Screen name="Reset Password" component={ResetPassword}options={{
        drawerIcon: ()=> (
          ComIcons.profileRed
        ),
      }} />

    </Drawer.Navigator>
  );
}

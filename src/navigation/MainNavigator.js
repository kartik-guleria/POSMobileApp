import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from 'navigation/RootNaviagtion';
import RNBootSplash from 'react-native-bootsplash';
import DashBoard from 'common/screens/DashBoard';
import LogInScreen from 'common/screens/LogIn';
import ResetPasswordScreen from 'common/screens/ResetPassword';
import DrawerNavigation from 'navigation/DrawerNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestScreen from 'common/screens/TestScreen';
import LeaveNote from 'common/screens/LeaveNote';
import SelectLangScreen from 'common/screens/SelectLangScreen';
import FinalizeOrder from 'common/screens/FinalizeOrder';
import PaymentCompleted from 'common/screens/PaymentCompleted';
import MyProfile from 'common/screens/MyProfile';
import Notifications from 'common/screens/Notifications';
import TodaySpecial from 'common/screens/TodaySpecial';
import MenuUpdates from 'common/screens/MenuUpdates';
import StartShift from 'common/screens/StartShift';
import ShiftReport from 'common/screens/ShiftReport';
import InviteGuest from 'common/screens/InviteGuest';
import ScanQR from 'common/screens/ScanQR';
import OrderStatus from 'common/screens/OrderStatus';
import SelectTable from 'components/SelectTable';
import FinalizeOrderAmount from 'common/screens/FinalizeOrderAmount';
import SelectItems from 'common/screens/SelectItems';
import CustomerDashboard from 'common/screens/CustomerDashboard';
import Orders from 'common/screens/Orders';
import CheckOrder from 'common/screens/CheckOrder';
import Pie3D from 'common/screens/Pie3D';
import ProductSelection from 'common/screens/ProductSelection';
import ProductConfig from 'common/screens/ProductConfig';
import SelectTableScreen from 'common/screens/SelectTableScreen';
import ConfirmationCode from 'common/screens/ConfirmationCode';
// import OrderDetails from 'common/screens/Pie3D';
// import Pie3D from 'common/screens/Pie3D';

export default function MainNavigator() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000)
  }, [])
  const screenOptions = {
    headerShown: false,
    gestureEnabled: false,
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={screenOptions}>


      <Stack.Screen name="DashBoard" component={DashBoard} />

              <Stack.Screen name="LogIn" component={LogInScreen} />

      <Stack.Screen name="ProductConfig" component={ProductConfig} />
      <Stack.Screen name="StartShift" component={StartShift} />

      <Stack.Screen name="Test" component={TestScreen} />  
      <Stack.Screen name="ProductSelection" component={ProductSelection} />
      <Stack.Screen name="Pie3D" component={Pie3D} />   
      <Stack.Screen name="CheckOrder" component={CheckOrder} /> 
      <Stack.Screen name="Orders" component={Orders}/>
      <Stack.Screen name="CustomerDashboard" component={CustomerDashboard} />   
      <Stack.Screen name="SelectItems" component={SelectItems} />   
      <Stack.Screen name="FinalizeOrderAmount" component={FinalizeOrderAmount} />
      <Stack.Screen name="SelectTable" component={SelectTable} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name ="InviteGuest" component={InviteGuest}/>
        <Stack.Screen name ="ScanQR" component={ScanQR}/>
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="MenuUpdates" component={MenuUpdates} />
      <Stack.Screen name="PaymentCompleted" component={PaymentCompleted} />
      <Stack.Screen name="FinalizeOrder" component={FinalizeOrder} />
      <Stack.Screen name="ShiftReport" component={ShiftReport} />
        <Stack.Screen name="SelectTableScreen" component={SelectTableScreen} />
      <Stack.Screen name="TodaySpecial" component={TodaySpecial} />
      <Stack.Screen name="SelectLanguage" component={SelectLangScreen} />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="LeaveNote" component={LeaveNote} />
      <Stack.Screen name="ConfirmationCode" component={ConfirmationCode} />   

      </Stack.Navigator>
    </NavigationContainer>
  );
}

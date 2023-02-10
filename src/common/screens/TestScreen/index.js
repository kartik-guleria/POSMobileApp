import React ,{useState}from 'react';
import {COLORS, FONTS,ComIcons} from 'assets/index';
import ModalHeader from 'components/ModalHeader';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';


const TestScreen = props => {
  const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <ModalHeader onPressCross={()=>toggleModal()} title={'Close Shift'}/>
      <View style={{flex:1,justifyContent:'space-between',paddingHorizontal:9}}>
        <View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'500',lineHeight:21}}>Expected Cash Amount</Text>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'400',lineHeight:21}}>00.00L</Text>
  </View>
  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'400',lineHeight:21}}>Actual Cash Amount</Text>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'400',lineHeight:21}}>00.00L</Text></View>

  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'400',lineHeight:21}}>Differnce</Text>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'500',lineHeight:21}}>-</Text></View>
  <Text style={{marginTop:23,fontFamily:FONTS.normal,fontSize:18,fontWeight:'400',lineHeight:21}}>Print Report</Text>
</View>
<View style={{marginHorizontal:-16}}>
<MyButton title={'CLOSE SHIFT'}/></View>
</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TestScreen;

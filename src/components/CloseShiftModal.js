import React ,{useState}from 'react';
import {FONTS,} from 'assets/index';
import ModalHeader from 'components/ModalHeader';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import MyButton from 'components/MyButton';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../assets';
import { Switch } from 'react-native-gesture-handler';


const CloseShiftModal = props => {
  const { t, i18n } = useTranslation();

  const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
      <><ModalHeader onPressCross={props.onPressCross} title={'Close Shift'} /><View style={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 9 }}>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginTop: 23, fontFamily: FONTS.bold,color:COLORS.black, fontSize: 18, lineHeight: 21 }}>Expected Cash Amount</Text>
          <Text style={{ marginTop: 23, fontFamily: FONTS.normal,color:COLORS.black, fontSize: 18, fontWeight: '400', lineHeight: 21 }}>00.00L</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginTop: 23, fontFamily: FONTS.normal,color:COLORS.black, fontSize: 18, fontWeight: '400', lineHeight: 21 }}>Actual Cash Amount</Text>
          <Text style={{ marginTop: 23, fontFamily: FONTS.normal, color:COLORS.black,fontSize: 18, fontWeight: '400', lineHeight: 21 }}>00.00L</Text></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginTop: 23, fontFamily: FONTS.normal, color:COLORS.black,fontSize: 18, fontWeight: '400', lineHeight: 21 }}>Differnce</Text>
          <Text style={{ marginTop: 23, fontFamily: FONTS.medium,color:COLORS.black, fontSize: 18, fontWeight: '500', lineHeight: 21 }}>-</Text></View>
          <View style={{marginTop: 23, flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
        <Text style={{ fontFamily: FONTS.normal, color:COLORS.black,fontSize: 18, fontWeight: '400', lineHeight: 21 }}>Print Report</Text>
         <Switch
                  value={true}
                  trackColor={{false: 'grey',true:'red'}}
                  // onValueChange={() =>
                  //   isSwitchEnabled ? setSwitch(false) : setSwitch(true)
                  // }
                  style={{height: 32, width: 51}}
                  switchBackgroundColor="#2B2C2D"
                />
        </View>
      </View>
      <View style={{ marginHorizontal: -16, marginBottom: 20 }}>
        <MyButton title={'CLOSE SHIFT'} onPress={props.onPressClose} /></View>
    </View></>
  );
};

const styles = StyleSheet.create({});

export default CloseShiftModal;

import React, { useState } from 'react';
import { View, Text,SafeAreaView, Dimensions } from 'react-native';
import MyButton from 'components/MyButton';
import InputField from 'components/InputField';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { FONTS,COLORS} from 'assets/index';
import Toast from 'react-native-toast-message';
import { DEVICE } from '../../../assets/theme';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');


const ResetPassword = ({route,navigation})=> {
  const cameFrom = route.params
  console.log(cameFrom)
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');


  const checkTextInput = () => {
    // let errorMsg = '';
    // if (!email) {
    //   errorMsg = 'Please enter your email';
    // } else if (!validate(email)) {
    //   errorMsg = 'Please enter a valid email';
    // } else {
      navigation.navigate('ConfirmationCode');
    // }
    // showToast(errorMsg);
    // return;
  };

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text) === true;
  };
  const showToast = errorMsg => {
    Toast.show({
      type: 'error',
      text1: '' + errorMsg,
      text1Style: {
        fontSize: 20,
        fontWeight: '400',
      },
    });
  };
  return (
  <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:resetPassword')}
        navigation={navigation} 
        pop={cameFrom === undefined ? false : true}
        displayBtn={ cameFrom ? 'back': 'dash'}
        onPress= { () => cameFrom || navigation.openDrawer()}/>
         <View style={{flex:1,justifyContent:'center'}}> 
      <View
          style={{
            marginHorizontal: DEVICE === 'tab' ? '30%' : 0,
            borderRadius: 5,
            borderColor: '#ddd',
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.15,
            shadowRadius: 2,
            elevation: 3,
            backgroundColor: '#FFFFFF',
            paddingVertical: DEVICE === 'tab' ? 44 : 0,
            paddingHorizontal: DEVICE === 'tab' ? '4%':0,
            flex: DEVICE === 'tab' ? 0 : 1,
            justifyContent: 'space-between',
            height: DEVICE === 'tab'? screenHeight / 1.4 : screenHeight,
          }}>
      <View style={MainStyle.mainBody}>
        <View style={MainStyle.container}>
          <Text
            style={[
              MainStyle.headingDesc,
              {
                textAlign: 'left',
                fontWeight: "500",
                fontFamily: FONTS.medium,
                fontSize: 20,
                marginBottom: 18,
              },
            ]}>
            {t('common:resetPassword')}
          </Text>
          <Text style={[MainStyle.descText, { textAlign: 'left' }]}>
            {t('common:ResetPasswordDesc')}
          </Text>
          <View>
            <Text style={{ textAlign: 'left', marginTop: 15, fontSize: 12, fontFamily: FONTS.medium,color:COLORS.black, fontWeight: '500' }}>
            {t('common:email')}
            </Text>
            <InputField
              placeholder={t('common:ResetPasswordEmail')}
              capitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              checkVal={value => setEmail(value)} />
          </View>
        </View>
        <View style={{marginBottom:10}}>
          <MyButton title={t('common:sendInstructions')} onPress={()=> checkTextInput()} />
        </View>

      </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

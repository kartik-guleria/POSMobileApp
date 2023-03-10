import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MyButton from 'components/MyButton';
import InputField from 'components/InputField';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { FONTS,COLORS} from 'assets/index';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
const ConfirmationCode = props => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');


  const checkTextInput = () => {
    // let errorMsg = '';
    // if (!email) {
    //   errorMsg = 'Please enter your email';
    // } else if (!validate(email)) {
    //   errorMsg = 'Please enter a valid email';
    // } else {
props.navigation.openDrawer();
    //   return;
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
    <><View style={{ backgroundColor: COLORS.red, height: 50 }}></View>
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:confirmationCode')}
        navigation={props.navigation}
      />
      <View style={MainStyle.mainBody}>
        <View style={MainStyle.container}>
          <Text
            style={[
              MainStyle.headingDesc,
              {
                textAlign: 'left',
                fontWeight: "500",
                fontFamily: FONTS.normal,
                fontSize: 20,
                marginBottom: 18,
              },
            ]}>
            {t('common:confirmationCodeTitle')}
          </Text>
          <Text style={[MainStyle.descText, { textAlign: 'left' }]}>
            {t('common:confirmationCodeDesc')}
          </Text>
          <View>

          </View>
        </View>
        <View>
          <MyButton title={t('common:Submit')} onPress={()=> checkTextInput()}
          />
        </View>

      </View>
    </SafeAreaView>
    </>
  );
};

export default ConfirmationCode;

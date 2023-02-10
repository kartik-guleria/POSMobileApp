import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import MyButton from 'components/MyButton';
import InputField from 'components/InputField';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import { useTranslation } from 'react-i18next';
import { FONTS, SIZES } from 'assets/index';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const CreatePassword = props => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');


  const checkTextInput = () => {
    let errorMsg = '';
    if (!email) {
      errorMsg = 'Please enter your email';
    } else if (!validate(email)) {
      errorMsg = 'Please enter a valid email';
    } else {

      return;
    }
    showToast(errorMsg);
    return;
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
        title={t('common:createNewPassword')}
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
            {t('common:createNewPassword')}
          </Text>
          <Text style={[MainStyle.descText, { textAlign: 'left' }]}>
            {t('common:createNewPasswordDesc')}
          </Text>
          <View>
            <Text style={{ textAlign: 'left', marginTop: 15, fontSize: 12, fontFamily: FONTS.normal, fontWeight: '500' }}>
              Email
            </Text>
            <InputField
              placeholder={"abcd"}
              capitalize="none"
              returnKeyType="next"
              checkVal={value => setEmail(value)}
            />
          </View>
        </View>
        <View>
          <MyButton title={t('common:ResetPassword')} onSelect={checkTextInput}
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default CreatePassword;

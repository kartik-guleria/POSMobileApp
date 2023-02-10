import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import NavigationHeaderDash from 'components/NavigationHeaderDash';
import {FONTS} from 'assets/';
import MyButton from 'components/MyButton';
import styles from './style'
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';


const PaymentCompleted = props => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <NavigationHeaderDash displayBtn={false} title={t('common:completed')} />
      <SafeAreaView
        style={[
          MainStyle.safeAreaContainerLight,
          {justifyContent: 'space-between'},
        ]}>
        <View>
          <Text>image</Text>
        </View>
        <Text
          style={styles.payment}>
          {t('common:paymentCompleted')} 
        </Text>
        <MyButton title={t('common:done')}  onPress={()=> props.navigation.navigate('DashBoard')} />
      </SafeAreaView>
    </>
  );
};

export default PaymentCompleted;

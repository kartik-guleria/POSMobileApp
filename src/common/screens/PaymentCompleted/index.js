import React from 'react';
import {SafeAreaView,Text} from 'react-native';
import MyButton from 'components/MyButton';
import styles from './style'
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
import NavigationHeader from '../../../components/NavigationHeader';


const PaymentCompleted = props => {
  const { t, i18n } = useTranslation();

  return (
      <SafeAreaView
        style={[
          MainStyle.safeAreaContainerLight,
          {justifyContent: 'space-between'},
        ]}>
      <NavigationHeader displayBackBtn={false} title={t('common:completed')}  navigation={props.navigation}/>
        <Text
          style={styles.payment}>
          {t('common:paymentCompleted')} 
        </Text>
        <MyButton title={t('common:done')}  onPress={()=> props.navigation.navigate('DashBoard')} />
      </SafeAreaView>
  );
};

export default PaymentCompleted;

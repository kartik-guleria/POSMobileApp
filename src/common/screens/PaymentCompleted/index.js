import React from 'react';
import {Dimensions, SafeAreaView,Text,View} from 'react-native';
import MyButton from 'components/MyButton';
import styles from './style'
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
import NavigationHeader from '../../../components/NavigationHeader';
import { DEVICE } from '../../../assets/theme';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const PaymentCompleted = props => {
  const { t, i18n } = useTranslation();

  return (
      <SafeAreaView
        style={[
          MainStyle.safeAreaContainerLight,
          {justifyContent: 'space-between'},
        ]}>
      <NavigationHeader displayBackBtn={false} title={t('common:completed')}  navigation={props.navigation}/>
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
        <Text
          style={styles.payment}>
          {t('common:paymentCompleted')} 
        </Text>
        <MyButton title={t('common:done')}  onPress={()=> props.navigation.navigate('DashBoard')} />
        </View>
        </View>
      </SafeAreaView>
  );
};

export default PaymentCompleted;

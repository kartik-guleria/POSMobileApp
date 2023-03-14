import {FONTS} from 'assets/theme';
import InputField from 'components/InputField';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import React from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
import { COLORS } from '../../../assets';
import { DEVICE } from '../../../assets/theme';

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const FinalizeOrderAmount = props => {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:finalizeOrder')}
        navigation={props.navigation}
      />
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
            paddingHorizontal: DEVICE === 'tab' ?'4%':0,
            paddingVertical: DEVICE === 'tab' ? 44:0,
            flex: DEVICE === 'tab' ? 0 : 1,
            justifyContent: 'space-between',
            height: DEVICE === 'tab'? screenHeight / 1.4 : screenHeight,
          }}>
      <View
        style={{justifyContent: 'space-between', marginVertical: 30, flex: 1}}>
        <View style={{marginHorizontal: 16}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontFamily: FONTS.bold,
              color:COLORS.black,
              lineHeight: 27.63,
              marginBottom:20
            }}>
            1000L {t('common:cash')}
          </Text>
          <InputField placeholder={'1000L Cash'} />
        </View>

        <MyButton
          title={t('common:tender')}
          onPress={() => props.navigation.navigate('PaymentCompleted')}
        />
      </View>
      </View>
      </View>
    </SafeAreaView>
  );
};
export default FinalizeOrderAmount;

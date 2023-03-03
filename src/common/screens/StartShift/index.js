import React from 'react';
import {View, SafeAreaView, Text,TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from 'assets/theme';
import NavigationHeader from 'components/NavigationHeader';
import MyButton from 'components/MyButton';
import {TextInput} from 'react-native-gesture-handler';
import UnderlineView from 'components/underlineView';
import style from './style';
import { replace } from 'navigation/RootNaviagtion';
import { useTranslation } from 'react-i18next';



const StartShift = props => {
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader title={t('common:startShift')} displayBtn={'dash'} pop={false} navigation={props.navigation}  onPress={()=>props.navigation.openDrawer()} />
      <View style={{ flex: 1, justifyContent: 'space-between' ,marginBottom:'2%'}}>
        <View style={{ height: 10, marginLeft: 16, marginRight: 16 }}></View>
        <View
          style={{
            padding: 21,
            height: 189,
            marginLeft: 16,
            marginRight: 16,
            borderColor: COLORS.grey,
            borderWidth: 1,
            justifyContent: 'center'
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: FONTS.medium,
              color:COLORS.black,
              fontSize: 20,
              fontWeight: '500',
              lineHeight: 24
            }}>
            {t('common:enterStartingCashAmount')} 
          </Text>
          <Text
            style={{
              marginTop: 31,
              fontFamily: FONTS.medium,
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 19.2,
              color: COLORS.darkGrey,
            }}>{t('common:amount')} 
          </Text>
          <TextInput
            placeholder="0.00L"
            placeholderTextColor={COLORS.black}
            style={{
              marginTop: 2,
              fontFamily: FONTS.light,
              fontSize: 16,
              lineHeight: 17.14,
              paddingVertical: 0,
            }} />
          <UnderlineView />
        </View>
        <MyButton title={t('common:amount')}  onPress={() =>replace('ShiftReport')} />
      </View>
    </SafeAreaView>
  );
};

export default StartShift;

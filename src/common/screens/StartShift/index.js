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
    <><View style={{ backgroundColor: COLORS.red, height: 50 }}></View><SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader title={t('common:startShift')} pop={false} navigation={props.navigation}  onSelect={()=>props.navigation.openDrawer()} />
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
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
              fontFamily: FONTS.normal,
              fontSize: 20,
              fontWeight: '500',
              lineHeight: 24
            }}>
            {t('common:enterStartingCashAmount')} 
          </Text>
          <Text
            style={{
              marginTop: 31,
              fontFamily: FONTS.normal,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 19.2,
              color: COLORS.darkGrey
            }}>
          {t('common:amount')} 
          </Text>
          <TextInput
            placeholder="0.00L"
            placeholderTextColor={COLORS.black}
            style={{
              marginTop: 2,
              fontFamily: FONTS.normal,
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 17.14
            }} />
          <UnderlineView />
        </View>
        <MyButton title={t('common:amount')}  onPress={() =>replace('ShiftReport')} />
      </View>
    </SafeAreaView></>
  );
};

export default StartShift;

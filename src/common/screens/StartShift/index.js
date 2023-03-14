import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from 'assets/theme';
import NavigationHeader from 'components/NavigationHeader';
import MyButton from 'components/MyButton';
import {TextInput} from 'react-native-gesture-handler';
import UnderlineView from 'components/underlineView';
import {useTranslation} from 'react-i18next';
import {DEVICE} from '../../../assets/theme';
import MainStyle from '../../../styleSheet/MainStyle';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const StartShift = props => {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:startShift')}
        displayBtn={'dash'}
        pop={false}
        navigation={props.navigation}
        onPress={() => props.navigation.openDrawer()}
      />

      <View style={{flex: 1, justifyContent: 'center',marginBottom:'4%'}}>
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
            paddingHorizontal: DEVICE === 'tab' ? 50 : 0,
            paddingVertical: DEVICE === 'tab' ? 44 : 0,
            flex: DEVICE === 'tab' ? 0 : 1,
            justifyContent: 'space-between',
            height: DEVICE === 'tab'? screenHeight / 1.4 : screenHeight,
          }}>
          {DEVICE != 'tab' ? (
            <View style={{height: 10, marginLeft: 16, marginRight: 16}}></View>
          ) : null}
          <View
            style={{
              padding: 21,
              height: 189,
              marginLeft: 16,
              marginRight: 16,
              borderColor: COLORS.grey,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontSize: 20,
                fontWeight: '500',
                lineHeight: 24,
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
              }}>
              {t('common:amount')}
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
              }}
            />
            <UnderlineView />
          </View>
          <MyButton
            title={t('common:amount')}
            onPress={() => props.navigation.navigate('ShiftReport')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartShift;

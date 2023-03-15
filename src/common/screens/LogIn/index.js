import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ComIcons, COLORS} from 'assets/index';
import {TextInput} from 'react-native-gesture-handler';
import MyButton from 'components/MyButton';
import styles from './style';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
import { DEVICE } from '../../../assets/theme';

const {height, width} = Dimensions.get('window');
const aspectRatio = height / width;

const LogInScreen = props => {
  const {t, i18n} = useTranslation();
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <View style={styles.screen}>
        <View style={{margin: DEVICE === 'tab' ? '20%' : 16}}>
          <View style={MainStyle.shadowForView}>
            <View style={styles.image}>{ComIcons.posLogo}</View>
            <Text style={styles.title}>{t('common:projectName')}</Text>
           <View style={[styles.inputView, {marginBottom: 7}]}>
              <View style={styles.icon}>{ComIcons.userRed}</View>
              <View style={styles.separator}></View>
              <TextInput
                maxLength={10}
                placeholder={t('common:user')}
                placeholderTextColor={COLORS.darkGrey}
                style={styles.inputText}
              />
            </View>
            <View style={[styles.inputView, {marginBottom: 15}]}>
              <View style={styles.icon}>{ComIcons.lock}</View>
              <View style={styles.separator}></View>
              <TextInput
                maxLength={10}
                multiline={true}
                placeholder={t('common:password')}
                placeholderTextColor={COLORS.darkGrey}
                style={styles.inputText}
              />
            </View>
            <View
              style={{
                marginLeft: aspectRatio < 1.6 ? 78 : 0,
                marginRight: aspectRatio < 1.6 ? 78 : 0,
              }}>
              <MyButton
                onPress={() => props.navigation.navigate('DashBoard')}
                title={t('common:logIn')}
                size={false}
              />
            </View>
            <TouchableOpacity activeOpacity={0.7}
            hitSlop={15}
              onPress={() => props.navigation.navigate('ResetPassword',{
                cameFrom:'logIn'
              })}
              style={styles.reset}>
              <Text style={styles.resetText}>{t('common:forgotPassword')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LogInScreen;

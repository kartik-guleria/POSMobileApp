import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import styles from './style';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import {COLORS} from 'assets/theme';
import {useTranslation} from 'react-i18next';

const LeaveNote = props => {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:leaveANote')}
        navigation={props.navigation}
      />
      <View style={styles.screen}>
        <View>
          <Text style={styles.text}>{t('common:addYourNote')}</Text>
          <TextInput
            placeholder="Please dont overcook the meat!. Do not add fries to burger. Add extra Pickles"
            multiline={true}
            placeholderTextColor={COLORS.grey}
            style={styles.input}
          />
        </View>

        <View style={styles.button}>
          <MyButton
            title={t('common:cancel')}
            width={false}
            backColor={'grey'}
            onPress={() => props.navigation.pop()}
          />
          <MyButton
            title={t('common:apply')}
            width={false}
            onPress={() => props.navigation.pop()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeaveNote;

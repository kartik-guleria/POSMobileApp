import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../assets';
import MyButton from './MyButton';
import ModalHeader from './ModalHeader';

const LeaveNoteModal = props => {
  const {t, i18n} = useTranslation();
  return (
    <View style={{backgroundColor: COLORS.white}}>
      <ModalHeader title={'LEAVE A NOTE'} onPressCross={props.onPressCross} />
      <View style={{padding: 9}}>
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
          onPress={props.onPressCancel}
        />
        <MyButton
          title={t('common:apply')}
          width={false}
          onPress={props.onPressApply}
        />
      </View>
    </View>
  );
};

export default LeaveNoteModal;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  input: {
    marginTop: 32,
    marginBottom: 60,
    height: 317,
    elevation: 4,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 19.2,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    marginBottom: 17,
  },
});

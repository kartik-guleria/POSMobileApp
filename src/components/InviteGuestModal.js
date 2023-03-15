import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, ComIcons, FONTS} from '../assets';
import InputField from './InputField';
import ModalHeader from './ModalHeader';
import MyButton from './MyButton';

const InviteGuestModal = props => {
  return (
    <>
      <ModalHeader title={'INVITE GUEST'} onPressCross={props.onPressCross} />
      <View
        style={{
          backgroundColor: COLORS.white,
          justifyContent: 'space-between',
          paddingBottom:'5%'
        }}>
        <View style={{marginVertical: 41, marginLeft: 17, marginRight: 17}}>
          <View style={{alignSelf: 'center'}}>{ComIcons.inviteGuest}</View>

          <Text
            style={{
              textAlign: 'center',
              marginBottom: 14,
              marginTop: 41,
              fontFamily: FONTS.normal,
              color: COLORS.black,
              fontSize: 16,
              fontWeight: '400',
              lineHeight: 22.4,
            }}>
            Invite guest to download wonderbites app and use QR code by filling
            up the information below.
          </Text>
          <InputField
            placeholder="Name"
            capitalize="none"
            keyboardType="default"
            returnKeyType="next"
          />
          <InputField
            placeholder="Phone Number"
            capitalize="none"
            keyboardType="number-pad"
            returnKeyType="next"
          />
        </View>
        <MyButton title={'SEND INVITATION'} onPress={props.onPressSend} />
      </View>
    </>
  );
};

export default InviteGuestModal;

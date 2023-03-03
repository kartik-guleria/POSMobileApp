import React,{useState}from 'react';
import {View, Text, SafeAreaView, SectionList,TouchableOpacity} from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import {FONTS,COLORS} from 'assets/theme';
import UnderlineView from 'components/underlineView';
import MyButton from 'components/MyButton';
import {SHIFT_DATA} from 'data/dummyData';
import CloseShiftModal from '../../../components/CloseShiftModal';
import Modal from 'react-native-modal';
import { useTranslation } from 'react-i18next';

const ShiftReport = props => {
  const { t, i18n } = useTranslation();
  const SHIFT_DATA = [
    {
      title: t('common:cashDrawer'),
      data: [
        {id: 1, name: t('common:startingCash'), amount: '00.00L'},
        {id: 2, name:  t('common:cashPayment'), amount: '00.00L'},
        {id: 3, name:  t('common:cashRefunds'), amount: '00.00L'},
        {id: 4, name:  t('common:cashIn'), amount: '00.00L'},
        {id: 5, name:  t('common:cashOut'), amount: '00.00L'},
        {id: 6, name:  t('common:expectedCashAmount'), amount: '00.00L'},
      ],
    },
    {
      title:  t('common:salesSummary'),
      data: [
        {id: 7, name:  t('common:grossSales'), amount: '00.00L'},
        {id: 8, name:  t('common:refunds'), amount: '00.00L'},
        {id: 9, name:  t('common:Discounts'), amount: '00.00L'},
        {id: 10, name:  t('common:netSales'), amount: '00.00L'},
        {id: 11, name: t('common:cash'), amount: '00.00L'},
      ],
    },
  ];
  

  const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const onPressClose = () => {
      toggleModal();
      props.navigation.navigate('InviteGuest');
    }
  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: 19}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontFamily:   item.id === 6 || item.id === 7 || item.id === 10? FONTS.bold:FONTS.normal,
              color:COLORS.black,
              fontSize: 18,
              lineHeight: 21,
            }}>
            {item.name}
          </Text>

          <Text
            style={{
                  fontFamily:  item.id === 6 || item.id === 7 || item.id === 10? FONTS.bold:FONTS.normal,
                  fontSize: 18,
                  color:COLORS.black,
              lineHeight: 21,
              marginBottom: item.id === 6 || item.id == 9 ? 21 : null,
            }}>
            {item.amount}
          </Text>
        </View>
        {item.id === 6 || item.id == 9 ? <UnderlineView /> : null}
      </View>
    );
  };
  const header = ({section}) => {
    return (
      <View>
        <Text
          style={{
            marginTop: 23,
            fontWeight: '500',
            fontFamily: FONTS.medium,
            color:COLORS.black,
            fontSize: 18,
            lineHeight: 21.6,
          }}>
          {section.title}
        </Text>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View style={{marginLeft: -19, marginRight: -19, marginTop: 19}}>
        <MyButton title={t('common:closeShift')} onPress={()=> toggleModal()}/>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: FONTS.medium,
              color:COLORS.black,
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 21,
            }}>
            {t('common:shiftOpened')} : Andy
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: FONTS.medium,
              color:COLORS.black,
              fontSize: 18,
              fontWeight: '400',
              lineHeight: 21,
              marginBottom: 15,
            }}>
            21/02/22, 07:00
          </Text>
        </View>
        <UnderlineView />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationHeader title={t('common:shiftReport')} navigation={props.navigation} />
      <View style={{ marginLeft: 16, marginRight: 16, marginTop: 23, flex: 1 }}>
        <SectionList
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ marginBottom: 19 }}
          sections={SHIFT_DATA}
          renderItem={renderItem}
          renderSectionHeader={header}
          ListFooterComponent={renderFooter}
          ListHeaderComponent={renderHeader}
          keyExtractor={(item, index) => index} />
          <Modal
            isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            backdropOpacity={0.7}
            backgroundColor="#FFFFFF"
            style={{
              marginBottom:400,
              position:'absolute',
              top:120,
              height:582,
              backgroundColor:COLORS.white,
              marginRight:-4
            }}>
              <CloseShiftModal onPressCross={() => toggleModal()} onPressClose={()=> onPressClose()}/>
            </Modal>
      </View>
    </SafeAreaView>
  );
};
export default ShiftReport;

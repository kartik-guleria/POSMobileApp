import * as React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, ComIcons} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import {ORDER_INFO} from 'data/dummyData';
import {useState} from 'react';
import MyButton from 'components/MyButton';
import Modal from 'react-native-modal';
import CheckModal from 'components/CheckModal';
import {useTranslation} from 'react-i18next';
import {DEVICE} from '../../../assets/theme';

const SelectItems = props => {
  const {t, i18n} = useTranslation();
  const BILL_INFO = [
    {id: 1, name: 'Special Chicken Burger', price: '200', qty: '1', disc: '0'},
    {id: 2, name: 'Special Chicken Burger', price: '300', qty: '3', disc: '0'},
    {id: 3, name: 'Special Chicken Burger', price: '400', qty: '2', disc: '0'},
    {id: 4, name: 'Special Chicken Burger', price: '300', qty: '1', disc: '0'},
    {id: 5, name: 'Special Chicken Burger', price: '200', qty: '2', disc: '0'},
    {id: 6, name: 'Special Chicken Burger', price: '400', qty: '2', disc: '0'},
  ];
  const AMOUNT_INFO = [
    {id: 1, title: t('common:items'), price: '10'},
    {id: 2, title: t('common:discount'), price: '50 L'},
    {id: 3, title: t('common:tax'), price: '1,160 L'},
    {id: 4, title: t('common:subTotal'), price: '5,800 L'},
    {id: 5, title: t('common:totalAmount'), price: '5,800 L'},
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onPressPlace = () => {
    toggleModal();
    props.navigation.navigate('FinalizeOrder');
  };
  const [selectedTick, setSelectedTick] = useState(false);
  const renderBillHeader = () => {
    const renderInfo = infoData => {
      return (
        <View style={{flexDirection: 'row', marginBottom: 15, flex: 1}}>
          <Text style={styles.infoText}>{infoData.item.title} </Text>
          <Text
            style={[
              styles.infoText,
              {
                color: infoData.item.id == 3 ? COLORS.red : COLORS.black,
                textDecorationLine:
                  infoData.item.id == 3 ? 'underline' : 'none',
                textDecorationColor: COLORS.red,
                fontWeight: '400',
                fontFamily: FONTS.medium,
              },
            ]}>
            {infoData.item.info}
          </Text>
        </View>
      );
    };
    const renderInfoHeader = () => {
      return (
        <Text
          style={[
            styles.billHeader,
            {
              fontSize: 18,
              fontFamily: FONTS.bold,
              color: COLORS.black,
              lineHeight: 19,
              marginBottom: 18,
              marginTop: 13,
            },
          ]}>
          {t('common:orderInformation')}
        </Text>
      );
    };
    const renderAmount = amountData => {
      return (
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 5,
            height: 26,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: amountData.item.id == 5 ? 0 : 1,
            borderBottomColor: COLORS.grey,
          }}>
          <Text
            style={{
              fontFamily: amountData.item.id === 5 ? FONTS.bold : FONTS.normal,
              color: COLORS.black,
              fontSize: 14,
              fontWeight: amountData.item.id === 5 ? '500' : '400',
              lineHeight: 16,
            }}>
            {amountData.item.title}
          </Text>
          <Text
            style={{
              fontFamily: amountData.item.id === 5 ? FONTS.bold : FONTS.normal,
              color: COLORS.black,
              fontSize: 14,
              fontWeight: amountData.item.id === 5 ? '500' : '400',
              lineHeight: 16,
            }}>
            {amountData.item.price}
          </Text>
        </View>
      );
    };
    return (
      <>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
            marginTop: 20,
          }}>
          {DEVICE === 'tab' ? (
            <FlatList
              data={ORDER_INFO}
              renderItem={renderInfo}
              numColumns={2}
              ListHeaderComponent={renderInfoHeader}
              keyExtractor={item => item.id}
              bounces={false}
              style={{width: '40%'}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
          ) : (
            <FlatList
              data={ORDER_INFO}
              renderItem={renderInfo}
              ListHeaderComponent={renderInfoHeader}
              keyExtractor={item => item.id}
              bounces={false}
              style={{width: '100%'}}
            />
          )}
          {DEVICE === 'tab' ? (
            <FlatList
              data={AMOUNT_INFO}
              renderItem={renderAmount}
              ListHeaderComponent={() => (
                <Text
                  style={[
                    styles.billHeader,
                    {
                      fontSize: 18,
                      fontFamily: FONTS.bold,
                      color: COLORS.black,
                      lineHeight: 19,
                      marginBottom: 18,
                      marginTop: 13,
                    },
                  ]}>
                  {t('Full Total')}
                </Text>
              )}
              keyExtractor={item => item.id}
              bounces={false}
              style={{width: '30%'}}
            />
          ) : null}
        </View>
        <UnderlineView />
        <Text style={[styles.billHeader, {marginTop: 16, color: COLORS.black}]}>
          {t('common:bill')}: 62545(1)
        </Text>
        <View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 23,
            backgroundColor: COLORS.red,
          }}>
          <Text style={[styles.billHeader, {width: '30%', marginLeft: 4}]}>
            {t('common:name')}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-evenly',
            }}>
            <Text style={styles.billHeader}>{t('common:uPrice')}</Text>
            <Text style={styles.billHeader}>{t('common:qty')}</Text>
            <Text style={styles.billHeader}>{t('common:disc')}</Text>
            <Text style={styles.billHeader}>{t('common:total')}</Text>
            {selectedTick === true ? (
              <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedTick(false)}>
                {ComIcons.redTick}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedTick(true)}>
                {ComIcons.emptyBox}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </>
    );
  };
  const renderBill = billData => {
    return (
      <View
        style={{
          marginTop: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 49,
          backgroundColor:
            billData.item.id % 2 ? COLORS.grey : COLORS.lightGrey,
        }}>
        <Text style={[styles.billText, {width: '35%', marginLeft: 4}]}>
          {billData.item.name}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '65%',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.billText}>{billData.item.price}</Text>
          <Text style={styles.billText}>{billData.item.qty}</Text>
          <Text style={styles.billText}>{billData.item.disc}</Text>
          <Text style={styles.billText}>
            {' '}
            {billData.item.price * billData.item.qty} L
          </Text>
          {selectedTick === true ? (
            <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedTick(false)}>
              {ComIcons.redTick}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity activeOpacity={0.7} onPress={() => setSelectedTick(true)}>
              {ComIcons.emptyBox}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
  const renderBillFooter = () => {
    const renderAmount = amountData => {
      return (
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 5,
            borderWidth: 1,
            height: 26,
            backgroundColor: COLORS.darkGrey,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: amountData.item.id === 5 ? FONTS.bold : FONTS.normal,
              color: COLORS.black,
              fontSize: 14,
              fontWeight: amountData.item.id === 5 ? '500' : '400',
              lineHeight: 16,
            }}>
            {amountData.item.title}
          </Text>
          <Text
            style={{
              fontFamily: amountData.item.id === 5 ? FONTS.bold : FONTS.normal,
              color: COLORS.black,
              fontSize: 14,
              fontWeight: amountData.item.id === 5 ? '500' : '400',
              lineHeight: 16,
            }}>
            {amountData.item.price}
          </Text>
        </View>
      );
    };
    return (
      <>
        {selectedTick === true ? (
          <View style={{marginBottom: 18}}>
            <View
              style={{marginHorizontal: -16, marginBottom: 22, marginTop: 5}}>
              <MyButton
                title={t('common:CONTINUE')}
                onPress={() => toggleModal()}
              />
            </View>
            <UnderlineView />
          </View>
        ) : null}
        <FlatList
          data={AMOUNT_INFO}
          renderItem={renderAmount}
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={{}}
        />
      </>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title={'Select Items'} navigation={props.navigation} />
      <View style={{flex: 1, marginHorizontal: 16}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={BILL_INFO}
          renderItem={renderBill}
          ListHeaderComponent={renderBillHeader}
          ListFooterComponent={DEVICE === 'tab' ? null : renderBillFooter}
          ListFooterComponentStyle={{marginTop: 18, marginBottom: 60}}
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={{}}
        />
        {DEVICE === 'tab' ? (
          selectedTick === true ? (
            <View style={{marginHorizontal: -16, marginBottom: 22}}>
              <MyButton
                title={t('common:CONTINUE')}
                onPress={() => toggleModal()}
              />
            </View>
          ) : null
        ) : null}
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          backdropOpacity={0.7}
          backgroundColor="#FFFFFF"
          onBackdropPress={()=> toggleModal()}
          style={{
            width: DEVICE==='tab' ? '30%' : '100%',
            alignSelf:'center',
            paddingHorizontal:DEVICE==='tab' ?0:16
          }}>
          <CheckModal
            title={t('common:areYouSureWonderpoints')}
            btnTitle={t('common:finalizeOrder')}
            onPressNo={() => toggleModal()}
            onPress={() => onPressPlace()}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
};
export default SelectItems;

const styles = StyleSheet.create({
  infoText: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    lineHeight: 15,
  },
  billHeader: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    lineHeight: 15,
    color: COLORS.white,
  },
  billText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: FONTS.medium,
    color: COLORS.black,
    lineHeight: 14,
  },
});

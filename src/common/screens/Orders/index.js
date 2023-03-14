import NavigationHeader from 'components/NavigationHeader';
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import {COLORS, FONTS} from 'assets/theme';
import SearchBar from 'components/SearchBar';
import {useTranslation} from 'react-i18next';
import {DEVICE} from '../../../assets/theme';
import Skeleton from './skeleton';

const Orders = props => {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);
  const OPEN_ORDERS = [
    {
      id: 1,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 2,
      custName: 'Joe ',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 3,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 4,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
  ];
  const CLOSED_ORDERS = [
    {
      id: 1,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 2,
      custName: 'Joe ',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 3,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
    {
      id: 4,
      custName: 'Joe Nick',
      orderID: '62545',
      price: '200L',
      table: 'T-4',
      date: '02/02/2022 15:00',
      empName: 'Andy',
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(2);
  const renderHeader = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
          }}>
          <TouchableOpacity
            onPress={() => setSelectedIndex(1)}
            style={{
              borderWidth: selectedIndex === 1 ? 0 : 1,
              borderColor: COLORS.grey,
              justifyContent: 'center',
              flex: 1,
              height: 56,
              backgroundColor: selectedIndex === 1 ? COLORS.red : COLORS.white,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: selectedIndex === 1 ? COLORS.white : COLORS.darkGrey,
                fontFamily: FONTS.medium,
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
              }}>
              {t('common:openOrders')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedIndex(2)}
            style={{
              borderWidth: selectedIndex === 2 ? 0 : 1,
              borderColor: COLORS.grey,
              justifyContent: 'center',
              flex: 1,
              height: 56,
              backgroundColor: selectedIndex === 2 ? COLORS.red : COLORS.white,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: selectedIndex === 2 ? COLORS.white : COLORS.darkGrey,
                fontFamily: FONTS.normal,
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
              }}>
              {t('common:closedOrders')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: -16}}>
          {DEVICE === 'tab' ? null : <SearchBar />}
        </View>
      </>
    );
  };

  const renderHeaderTab = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
          }}>
          <TouchableOpacity
            onPress={() => setSelectedIndex(1)}
            style={{
              borderWidth: selectedIndex === 1 ? 0 : 1,
              borderColor: COLORS.grey,
              justifyContent: 'center',
              flex: 1,
              height: 56,
              backgroundColor: selectedIndex === 1 ? COLORS.red : COLORS.white,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: selectedIndex === 1 ? COLORS.white : COLORS.darkGrey,
                fontFamily: FONTS.medium,
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
              }}>
              {t('common:openOrders')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedIndex(2)}
            style={{
              borderWidth: selectedIndex === 2 ? 0 : 1,
              borderColor: COLORS.grey,
              justifyContent: 'center',
              flex: 1,
              height: 56,
              backgroundColor: selectedIndex === 2 ? COLORS.red : COLORS.white,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: selectedIndex === 2 ? COLORS.white : COLORS.darkGrey,
                fontFamily: FONTS.normal,
                fontSize: 12,
                fontWeight: '500',
                lineHeight: 14,
              }}>
              {t('common:closedOrders')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: -16}}>
          {DEVICE === 'tab' ? null : <SearchBar />}
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.red,
            marginTop: 23,
            justifyContent: 'space-between',
            paddingHorizontal: 8,
          }}>
          <Text style={styles.titleTab}> {t('common:order')}#</Text>
          <Text style={styles.titleTab}> {t('common:customer')}</Text>
          <Text style={styles.titleTab}> {t('common:table')}</Text>
          <Text style={styles.titleTab}> {t('common:dateTime')}</Text>
          <Text style={styles.titleTab}> {t('common:price')}</Text>
          <Text style={styles.titleTab}> {t('common:employee')}</Text>
          <Text style={[styles.titleTab, {width: '4.1%'}]}>
            {' '}
            {t('common:status')}
          </Text>
        </View>
      </>
    );
  };

  const renderItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SelectItems')}
        disabled={selectedIndex == 1 ? false : true}
        style={{
          height: 256,
          borderColor: COLORS.grey,
          borderWidth: 1,
          paddingLeft: 8,
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.titleView}>
            <Text style={styles.title}> {t('common:status')}</Text>
            <Text style={styles.title}> {t('common:customer')}</Text>
            <Text style={styles.title}> {t('common:order')}#</Text>
            <Text style={styles.title}> {t('common:price')}</Text>
            <Text style={styles.title}> {t('common:table')}</Text>
            <Text style={styles.title}> {t('common:dateTime')}</Text>
            <Text style={styles.title}> {t('common:employee')}</Text>
          </View>

          <View style={styles.textview}>
            <View
              style={{
                borderRadius: 5,
                backgroundColor:
                  selectedIndex == 1 ? COLORS.darkGrey : COLORS.red,
                alignSelf: 'flex-start',
              }}>
              <Text
                style={[
                  styles.desc,
                  {marginHorizontal: 5, color: COLORS.white},
                ]}>
                {selectedIndex == 1 ? t('common:open') : t('common:closed')}
              </Text>
            </View>
            <Text
              style={[
                styles.desc,
                {
                  color: COLORS.red,
                  textDecorationLine: 'underline',
                  textDecorationColor: COLORS.red,
                },
              ]}>
              {itemData.item.custName}
            </Text>
            <Text style={styles.desc}>{itemData.item.orderID}</Text>
            <Text style={styles.desc}>{itemData.item.price}</Text>
            <Text style={styles.desc}>{itemData.item.table}</Text>
            <Text style={styles.desc}>{itemData.item.date}</Text>
            <Text style={styles.desc}>{itemData.item.empName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemTab = itemData => {
    return (
      <TouchableOpacity
        disabled={selectedIndex === 1 ? false : true}
        onPress={() => props.navigation.navigate('SelectItems')}>
        <View
          style={{
            height: 49,
            flexDirection: 'row',
            backgroundColor:
              itemData.item.id % 2 === 0 ? COLORS.lightGrey : COLORS.grey,
            justifyContent: 'space-between',
            paddingHorizontal: 8,
            alignItems: 'center',
          }}>
          <Text style={styles.descTab}>#{itemData.item.orderID}</Text>
          <Text
            style={[
              styles.descTab,
              {
                color: COLORS.red,
                textDecorationLine: 'underline',
                textDecorationColor: COLORS.red,
              },
            ]}>
            {itemData.item.custName}
          </Text>
          <Text style={styles.descTab}>{itemData.item.table}</Text>
          <Text style={styles.descTab}>{itemData.item.date}</Text>
          <Text style={styles.descTab}>{itemData.item.price}</Text>
          <Text style={styles.descTab}>{itemData.item.empName}</Text>
          <View
            style={{
              borderRadius: 5,
              backgroundColor:
                selectedIndex == 1 ? COLORS.darkGrey : COLORS.red,
            }}>
            <Text
              style={[
                styles.descTab,
                {paddingHorizontal: 5, color: COLORS.white, width: '100%'},
              ]}>
              {selectedIndex == 1 ? t('common:open') : t('common:closed')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:orders')}
        navigation={props.navigation}
      />
      {loading === true ? (
        <Skeleton />
      ) : (
        <FlatList
          data={selectedIndex == 1 ? OPEN_ORDERS : CLOSED_ORDERS}
          renderItem={DEVICE === 'tab' ? renderItemTab : renderItem}
          ListHeaderComponent={
            DEVICE === 'tab' ? renderHeaderTab : renderHeader
          }
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={{marginHorizontal: 16, paddingBottom: 10}}
          ItemSeparatorComponent={() =>
            DEVICE === 'tab' ? null : <View style={{height: 10}}></View>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 15,
    marginVertical: 9,
  },
  desc: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 15,
    marginVertical: 9,
  },
  titleTab: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    color: DEVICE === 'tab' ? COLORS.white : COLORS.black,
    lineHeight: 15,
    marginVertical: 9,
    width: '14.2%',
    textAlign: 'left',
    marginRight: 24,
  },
  descTab: {
    fontFamily: FONTS.medium,
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 15,
    marginVertical: 4,
    width: '14.2%',
    textAlign: 'left',
  },
  titleView: {width: '30%'},
});

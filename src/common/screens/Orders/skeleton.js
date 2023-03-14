import React, {useState} from 'react';
import {View, TouchableOpacity, Text, FlatList, StyleSheet} from 'react-native';
import {COLORS, FONTS} from 'assets/theme';
import SearchBar from 'components/SearchBar';
import {useTranslation} from 'react-i18next';
import {DEVICE} from '../../../assets/theme';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';

const Skeleton = props => {
  const {t, i18n} = useTranslation();

  const OPEN_ORDERS = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
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
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
          </View>

          <View style={styles.textview}>
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
            <ShimmerPlaceholder style={{marginVertical: 9, width: '60%'}} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemTab = itemData => {
    return (
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
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
        <ShimmerPlaceholder style={{marginVertical: 9, width: '9%'}} />
      </View>
    );
  };
  return (
    <FlatList
      data={OPEN_ORDERS}
      renderItem={DEVICE === 'tab' ? renderItemTab : renderItem}
      ListHeaderComponent={DEVICE === 'tab' ? renderHeaderTab : renderHeader}
      keyExtractor={item => item.id}
      bounces={false}
      contentContainerStyle={{marginHorizontal: 16, paddingBottom: 10}}
      ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
    />
  );
};

export default Skeleton;

const styles = StyleSheet.create({
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
  titleView: {width: '30%'},
});

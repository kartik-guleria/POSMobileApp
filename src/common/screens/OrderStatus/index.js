import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {COLORS, ComIcons, FONTS} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import {ORDER_STATUS} from '../../../data/dummyData';
import style from './style';
import { useTranslation } from 'react-i18next';

const OrderStatus = props => {
  const { t, i18n } = useTranslation();

  const renderItem = itemData => {
    return (
      <View
        style={{
          backgroundColor:
            itemData.item.status === t('common:sentToKitchen')
              ? COLORS.g1
              : itemData.item.status === t('common:preparing')
              ? COLORS.g2
              : itemData.item.status === t('common:ready')
              ? COLORS.g3
              : itemData.item.status === t('common:delivered')
              ? COLORS.g4
              : itemData.item.status === t('common:closed')
              ? COLORS.white
              : null,
              height:71,
              marginTop:16,
              justifyContent:'space-between',
              padding:8
        }}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '700',
              fontFamily: FONTS.normal,
              lineHeight: 12.85,
            }}>
            ORDERD #{itemData.item.orderId}
          </Text>

          <View style={{flexDirection: 'row'}}>
            {itemData.item.status === 'CLOSED' ||
            itemData.item.status === 'DELIVERED'
              ? ComIcons.whiteClock
              : null}
            <Text
              style={{
                fontSize: 12,
                fontWeight: '700',
                fontFamily: FONTS.normal,
                lineHeight: 12.85,
              }}>
              {itemData.item.orderTime}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
                fontSize: 14,
                fontWeight: '700',
                fontFamily: FONTS.normal,
                lineHeight: 15.47,
              }}>
              {itemData.item.tableNo} {' '}
            </Text>
            <View style ={{justifyContent:'center'}}>{itemData.item.status === 'CLOSED' ? ComIcons.greyTableChair : ComIcons.whiteTableChair}</View>
            <Text style={{ color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
                fontSize: 14,
                fontWeight: '700',
                fontFamily: FONTS.normal,
                lineHeight: 15.47,
              }}>
                {' '}
              {itemData.item.time}
            </Text>
          </View>

          <Text
            style={{ color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
              fontSize: 14,
              fontWeight: '700',
              fontFamily: FONTS.normal,
              lineHeight: 15.47,
            }}>
            {itemData.item.status}
          </Text>
        </View>
      
      </View>
    );
  };

  return (
    <>
      <View style={{backgroundColor: COLORS.red, height: 50}}></View>
      <SafeAreaView>
        <NavigationHeader
          title={'Order Status'}
          navigation={props.navigation}
        />
        <View>
          <FlatList
            data={ORDER_STATUS}
            renderItem={renderItem}
            keyExtractor={item => item.orderId}
            bounces={false}
            contentContainerStyle={{marginLeft:16,marginRight:16,marginTop:16}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default OrderStatus;

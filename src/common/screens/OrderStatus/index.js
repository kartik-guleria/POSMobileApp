import React, { useState } from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {COLORS, ComIcons, FONTS} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import {ORDER_STATUS} from '../../../data/dummyData';
import { useTranslation } from 'react-i18next';
import MainStyle from '../../../styleSheet/MainStyle';
import Skeleton from './skeleton';
import { DEVICE } from '../../../assets';
import DashBoardMenu from '../../../components/DashboardMenu';

const OrderStatus = props => {
  const { t, i18n } = useTranslation();
const [loading ,setLoading] = useState(true);
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
              && COLORS.white,
              height:71,
              marginTop:16,
              justifyContent:'space-between',
              padding:8,
              elevation:3,marginHorizontal:2,
              borderColor:COLORS.grey,
              borderWidth:1
        }}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FONTS.bold,
              color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
              lineHeight: 12.85,
            }}>
            ORDERD #{itemData.item.orderId}
          </Text>

          <View style={{flexDirection: 'row'}}>
            {/* {itemData.item.status === 'CLOSED' ||
            itemData.item.status === 'DELIVERED' */}
              {/* ?  */}
             {ComIcons.whiteClock}
              {/* : null} */}
            <Text
              style={{
                fontSize: 12,
              color:itemData.item.status === 'CLOSED' ? COLORS.darkGrey:COLORS.white,
                fontFamily: FONTS.bold,
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
                fontFamily: FONTS.bold,
                lineHeight: 15.47,
              }}>
              {itemData.item.tableNo} {' '}
            </Text>
            <View style ={{justifyContent:'center'}}>{itemData.item.status === 'CLOSED' ? ComIcons.greyTableChair : ComIcons.whiteTableChair}</View>
            <Text style={{ color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
                fontSize: 14,
                fontFamily: FONTS.bold,
                lineHeight: 15.47,
              }}>
                {' '}
              {itemData.item.time}
            </Text>
          </View>

          <Text
            style={{ color: itemData.item.status === 'CLOSED' ? COLORS.darkGrey : COLORS.white,
              fontSize: 14,
              fontFamily: FONTS.bold,
              lineHeight: 15.47,
            }}>
            {itemData.item.status}
          </Text>
        </View>
      
      </View>
    );
  };

  return (
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <NavigationHeader
          title={'Order Status'}
          navigation={props.navigation}
        />
        {loading === true ? <Skeleton/> :

<View style={{flexDirection:'row',flex:1}}>
{DEVICE === 'tab' &&  <View style={{width: '13%',justifyContent: 'center', alignContent: 'center', borderRightWidth: 1, borderRightColor: '#dddddd' }}>
<DashBoardMenu navigation={props.navigation} />
</View>}
          <FlatList
            data={ORDER_STATUS}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.orderId}
            bounces={false}
            contentContainerStyle={{marginHorizontal:20,marginTop:10,paddingBottom:15}}
          />
          </View>
  }
      </SafeAreaView>
  );
};

export default OrderStatus;

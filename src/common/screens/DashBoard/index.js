import React from 'react';
import { View, FlatList, SafeAreaView} from 'react-native';
import MainStyle from '../../../styleSheet/MainStyle';
import NavigationHeaderDash from 'components/NavigationHeaderDash';

import ServiceGridTile from '../../../components/ServiceGridTile';
import { ComIcons } from 'assets/index';
import { useTranslation } from 'react-i18next';

const DashBoard = props => {
  const { t, i18n } = useTranslation();
  const SERVICES = [
    {id: '1', title: t('common:dineIn'), image: ComIcons.dineIn},
    {id: '2', title: t('common:newOrderSmall'), image: ComIcons.newOrder},
    {id: '3', title: t('common:viewOrders'), image: ComIcons.viewOrders},
    {id: '4', title: t('common:todaySpecial'),image: ComIcons.todaySpecial},
    {id: '5', title: t('common:menuUpdates'), image: ComIcons.menuUpdates},
    {id: '6', title: t('common:orderStatus'), image: ComIcons.orderStatus},
  ];
  const renderServiceGridItem = itemData => {
    return (
      <ServiceGridTile
        title={itemData.item.title}
        image={itemData.item.image}
        menuIndex={itemData.item.id}
        onSelect={() => {
          if (itemData.item.id == '1') {
            props.navigation.navigate('SelectTableScreen', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '2') {
            props.navigation.navigate('ProductSelection', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '3') {
            props.navigation.navigate('Orders', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '4') {
            props.navigation.navigate('TodaySpecial', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '5') {
            props.navigation.navigate('MenuUpdates', {
              serviceId: itemData.item.id,
            });
          }
          else if (itemData.item.id == '6') {
            props.navigation.navigate('OrderStatus', {
              serviceId: itemData.item.id,
            });
          }
        }}
      />
    );
  };
  return (
    <>
      <NavigationHeaderDash
        title={t('common:dashboard')}
        displayBtn={true}
        onPress={() => props.navigation.openDrawer()}
      />
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <View style={{flex:1}}>
          <FlatList
            bounces={false}
            numColumns={2}
            data={SERVICES}
            renderItem={renderServiceGridItem}
            contentContainerStyle={{justifyContent:'center',flex:1}}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

export default DashBoard;

import React from 'react';
import { View, FlatList, SafeAreaView, Alert } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import ServiceGridTile from '../../../components/ServiceGridTile';
import { ComIcons, DEVICE } from 'assets/index';
import { useTranslation } from 'react-i18next';
import NavigationHeader from '../../../components/NavigationHeader';

const DashBoard = props => {
  const { t, i18n } = useTranslation();
  const SERVICES = [
    { id: '1', title: t('common:dineIn'), image: DEVICE == 'tab' ? ComIcons.dineInTab : ComIcons.dineIn },
    { id: '2', title: t('common:newOrderSmall'), image: DEVICE == 'tab' ? ComIcons.newOrderTab : ComIcons.newOrder },
    { id: '3', title: t('common:viewOrders'), image: DEVICE == 'tab' ? ComIcons.viewOrdersTab : ComIcons.viewOrders },
    { id: '4', title: t('common:todaySpecial'), image: DEVICE == 'tab' ? ComIcons.todaySpecialTab : ComIcons.todaySpecial },
    { id: '5', title: t('common:menuUpdates'), image: DEVICE == 'tab' ? ComIcons.menuUpdatesTab : ComIcons.menuUpdates },
    { id: '6', title: t('common:orderStatus'), image: DEVICE == 'tab' ? ComIcons.orderStatusTab : ComIcons.orderStatus },
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
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:dashboard')}
        displayBtn={'dash'}
        pop ={false}
        onPress={() => props.navigation.openDrawer()}
      />
      <View style={{ flex: 1, marginHorizontal: DEVICE == 'tab' ? 100 : 25, marginVertical: DEVICE == 'tab' ? 50 : 20 }}>
          <FlatList
            bounces={false}
          numColumns={DEVICE == 'tab' ? 3 : 2}
            data={SERVICES}
            renderItem={renderServiceGridItem}
            contentContainerStyle={{justifyContent:'center',flex:1}}
          />
        </View>
      </SafeAreaView>
  );
}

export default DashBoard;

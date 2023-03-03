import {COLORS, FONTS} from 'assets/theme';
import NavigationHeader from 'components/NavigationHeader';
import WonderPointTab from 'components/WonderpointsTab';
import {ORDER_DATA, TAGS, WONDERPOINTS_DATA} from 'data/dummyData';
import React, {useState} from 'react';
import {View, FlatList, SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';


const CustomerDashboard = props => {
  const { t, i18n } = useTranslation();

  const [wpTypeId, setwpTypeId] = useState(1);
  const [wpType, setwpType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const onSelectSwitch = index => {
    switch (index) {
      case 2:
        setwpTypeId(2);
        setwpType('earned');
        setCurrentPage(1);
        break;
      case 3:
        setwpTypeId(3);
        setwpType('redeemed');
        setCurrentPage(1);
        break;
      default:
        setwpTypeId(1);
        setwpType('');
        setCurrentPage(1);
    }
  };
  const renderTags = tagData => {
    return (
      <View
        style={{
          paddingHorizontal: 14,
          borderWidth: 1,
          borderColor: COLORS.grey,
          height: 30,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            fontFamily: FONTS.normal,
            lineHeight: 15,
          }}>
          {tagData.item.title}
        </Text>
      </View>
    );
  };
  const renderOrders = orderData => {
    return (
      <View
        style={{
          marginHorizontal: 16,
          paddingHorizontal: 4,
          marginTop: 6,
          height: 49,
          backgroundColor: orderData.item.id % 2 ? COLORS.darkGrey : COLORS.g1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.orderText}>{orderData.item.orderId}</Text>
        <Text style={styles.orderText}>{orderData.item.date}</Text>
        <Text style={styles.orderText}>{orderData.item.table}</Text>
        <Text style={styles.orderText}>{orderData.item.total} L</Text>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={{marginHorizontal: 16,marginTop:18}}>
        <Text style={styles.footerText}>Tags</Text>
        <FlatList
          data={TAGS}
          renderItem={renderTags}
          horizontal={true}
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={{
            justifyContent: 'space-around',
            flex: 1,
            marginTop: 17,
            marginBottom: 24,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.footerText}>Recent Orders</Text>
          <Text style={styles.seeMoreText}>See More</Text>
        </View>
        <View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            height: 23,
            backgroundColor: COLORS.red,
            padding: 4,
            justifyContent: 'space-between',
          }}>
          <Text style={styles.billHeader}>ORDER #</Text>
          <Text style={styles.billHeader}>DATE/TIME</Text>
          <Text style={styles.billHeader}>TABLE</Text>
          <Text style={styles.billHeader}>TOTAL</Text>
        </View>
      </View>
    );
  };
  const renderFooter = () => {
    const renderWB = wbData => {
      return (
        <View
          style={{
            height: 80,
            backgroundColor:
              wbData.item.id % 2 ? COLORS.grey : COLORS.lightGrey,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: 4,
            paddingRight: 13,
          }}>
          <View>
            <Text
              style={{
                fontFamily: FONTS.normal,
                fontSize: 12,
                fontWeight: '700',
                lineHeight: 13,
              }}>
              {wbData.item.title}
            </Text>
            <Text
              style={{
                marginTop: 11,
                fontFamily: FONTS.normal,
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 13,
              }}>
              {wbData.item.desc}
            </Text>
            <Text
              style={{
                marginTop: 8,
                fontFamily: FONTS.normal,
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 13,
              }}>
              {wbData.item.date}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: 18,
              fontWeight: '700',
              lineHeight: 19,
            }}>
            +1
          </Text>
        </View>
      );
    };
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.footerText}>Ordered the Most</Text>
          <Text style={styles.seeMoreText}>See More</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.footerText}>Services used the Most</Text>
          <Text style={styles.seeMoreText}>See More</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.footerText}>Wonderpoints</Text>
          <Text style={[styles.seeMoreText, {textDecorationLine: 'none'}]}>
            200
          </Text>
        </View>
        <View style={{marginBottom: 11}}>
          <WonderPointTab
            selectionMode={wpTypeId}
            option1="Recent History"
            option2="Earnings"
            option3="Spendings"
            onSelectSwitch={onSelectSwitch}
            selectionColor={COLORS.background2}
          />
        </View>
        <FlatList
          data={WONDERPOINTS_DATA}
          renderItem={renderWB}
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={{}}
        />
        
      </>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title="JOHN DOE" navigation={props.navigation} />
      <FlatList
        data={ORDER_DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderOrders}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={{marginTop: 34, marginHorizontal: 16}}
        keyExtractor={item => item.id}
        bounces={false}
        contentContainerStyle={{marginBottom: 34}}
      />
    </SafeAreaView>
  );
};

export default CustomerDashboard;

const styles = StyleSheet.create({
  orderText: {fontSize: 12, fontFamily: FONTS.normal, fontWeight: '400'},
  billHeader: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: FONTS.normal,
    lineHeight: 15,
    color: COLORS.white,
  },
  footerText: {
    fontFamily: FONTS.normal,
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21,
  },
  seeMoreText: {
    fontFamily: FONTS.normal,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.red,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.red,
    lineHeight: 16,
  },
});

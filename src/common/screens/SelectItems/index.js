import * as React from 'react';
import {View, SafeAreaView, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, ComIcons} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import {ORDER_INFO} from 'data/dummyData';
import { useState } from 'react';
import MyButton from 'components/MyButton';
import Modal from 'react-native-modal';
import CheckModal from 'components/CheckModal';
import { useTranslation } from 'react-i18next';

const SelectItems = props => {
  const { t, i18n } = useTranslation();
  const BILL_INFO = [
    {id:1, name:'Special Chicken Burger', price:'200',qty:'1',disc:'0'},
    {id:2, name:'Special Chicken Burger', price:'300',qty:'3',disc:'0'},
    {id:3, name:'Special Chicken Burger', price:'400',qty:'2',disc:'0'},
    {id:4, name:'Special Chicken Burger', price:'300',qty:'1',disc:'0'},
    {id:5, name:'Special Chicken Burger', price:'200',qty:'2',disc:'0'},
    {id:6, name:'Special Chicken Burger', price:'400',qty:'2',disc:'0'},
  ];
  const AMOUNT_INFO =[
    {id:1, title:t('common:items'), price:'10'},
    {id:2, title:t('common:discount'), price:'50 L'},
    {id:3, title:t('common:tax'), price:'1,160 L'},
    {id:4, title:t('common:subTotal'), price:'5,800 L'},
    {id:5, title:t('common:totalAmount'), price:'5,800 L'},
  ];
  

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const onPressPlace = () => {
    toggleModal();
    props.navigation.navigate('FinalizeOrder')
  }
const [selectedTick , setSelectedTick] = useState(false); 
  const renderBillHeader = () => {
    const renderInfo = infoData => {
      return (
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Text style={styles.infoText}>
            {infoData.item.title}{' '}
          </Text>
          <Text style={[styles.infoText, {fontWeight: '400',fontFamily:FONTS.medium}]}>
            {infoData.item.info}
          </Text>
        </View>
      );
    };
    const renderInfoHeader = () => {
      return(
        <Text
        style={[
          styles.billHeader,
          {fontSize: 18,fontFamily:FONTS.bold,color: COLORS.black, lineHeight: 19,marginBottom:18,marginTop:13},
        ]}>
        {t('common:orderInformation')}
      </Text>
      );
    };
    return(
      <><FlatList
        data={ORDER_INFO}
        renderItem={renderInfo}
        ListHeaderComponent={renderInfoHeader}
        keyExtractor={item => item.id}
        bounces={false}
        contentContainerStyle={{}} /><UnderlineView /><Text
          style={[styles.billHeader, { marginTop: 16, color: COLORS.black }]}>
          {t('common:bill')}: 62545(1)
        </Text><View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 23,
            backgroundColor: COLORS.red
          }}>
          <Text style={[styles.billHeader, { width: '30%', marginLeft: 4 }]}>
          {t('common:name')}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-evenly'
            }}>
            <Text style={styles.billHeader}>{t('common:uPrice')}</Text>
            <Text style={styles.billHeader}>{t('common:qty')}</Text>
            <Text style={styles.billHeader}>{t('common:disc')}</Text>
            <Text style={styles.billHeader}>{t('common:total')}</Text>
           {selectedTick === true ? <TouchableOpacity onPress={()=> setSelectedTick(false)}>{ComIcons.redTick}</TouchableOpacity> : <TouchableOpacity onPress={()=> setSelectedTick(true)}>{ComIcons.emptyBox}</TouchableOpacity>}
          </View>
        </View></>
    );
  };
  const renderBill = billData => {
    return(
      <View
      style={{
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 49,
        backgroundColor: billData.item.id % 2 ? COLORS.grey :COLORS.lightGrey
      }}>
        <Text style={[styles.billText, { width: '35%', marginLeft: 4}]}>
         {billData.item.name}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '65%',
            justifyContent: 'space-around'
          }}>
          <Text style={styles.billText}>{billData.item.price}</Text>
          <Text style={styles.billText}>{billData.item.qty}</Text>
          <Text style={styles.billText}>{billData.item.disc}</Text>
          <Text style={styles.billText}> {billData.item.price * billData.item.qty} L</Text>
          {selectedTick === true ? <TouchableOpacity onPress={()=> setSelectedTick(false)}>{ComIcons.redTick}</TouchableOpacity> : <TouchableOpacity onPress={()=> setSelectedTick(true)}>{ComIcons.emptyBox}</TouchableOpacity>}
        </View>
      </View>
    );
  }; 
  const renderBillFooter = () => {
    const renderAmount = amountData => {
      return(
        <View style={{alignItems:'center',paddingHorizontal:5,borderWidth:1,height:26,backgroundColor:COLORS.darkGrey,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontFamily: amountData.item.id === 5 ? FONTS.bold : FONTS.normal,color:COLORS.black,fontSize:14,fontWeight: amountData.item.id === 5 ? '500':'400',lineHeight:16}}>{amountData.item.title}</Text>
          <Text style={{fontFamily: amountData.item.id === 5 ? FONTS.bold :FONTS.normal,color:COLORS.black,fontSize:14,fontWeight: amountData.item.id === 5 ? '500':'400',lineHeight:16}}>{amountData.item.price}</Text>
        </View>
      );
    };
    return(
      <>
     {selectedTick === true ? <View style={{marginBottom:18}}><View style={{marginHorizontal:-16,marginBottom:22,marginTop:5}}><MyButton title={t('common:CONTINUE')} onPress={()=> toggleModal()}/></View><UnderlineView/></View> : null }
      <FlatList
        data={AMOUNT_INFO}
        renderItem={renderAmount}
        keyExtractor={item => item.id}
        bounces={false}
        contentContainerStyle={{}} /></>
    );
  }
  return (
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <NavigationHeader
          title={'Select Items'}
          navigation={props.navigation}
        />
        <View style={{flex:1,marginHorizontal:16}}>
         <FlatList
         showsVerticalScrollIndicator={false}
            data={BILL_INFO}
            renderItem={renderBill}
            ListHeaderComponent={renderBillHeader}
            ListFooterComponent={renderBillFooter}
            ListFooterComponentStyle={{marginTop:18,marginBottom:60}}
            keyExtractor={item => item.id}
            bounces={false}
            contentContainerStyle={{}}
          />
          <Modal
            isVisible={isModalVisible}
            onSwipeComplete={() => setModalVisible(false)}
            swipeDirection="down"
            backdropOpacity={0.7}
            backgroundColor="#FFFFFF"
            style={{
              position:'absolute',
              top:300,
              height:189,
              backgroundColor:COLORS.white,
              marginHorizontal:16,
            }}>
             <CheckModal title={t('common:areYouSureWonderpoints')} btnTitle={t('common:finalizeOrder')} onPressNo={()=>toggleModal()} onPress={()=> onPressPlace()}/>
            </Modal>
        </View>
      </SafeAreaView>
  );
};
export default SelectItems;

const styles = StyleSheet.create({
  infoText: {fontSize: 14, fontFamily: FONTS.bold,color:COLORS.black, lineHeight: 15},
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
    color:COLORS.black,
    lineHeight: 14,
  },
});

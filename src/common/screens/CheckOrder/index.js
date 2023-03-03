import React ,{useState}from "react";
import { View,SafeAreaView,Text,FlatList,TouchableOpacity,StyleSheet } from "react-native";
import { COLORS,ComIcons,FONTS } from "assets/index";
import MainStyle from "styleSheet/MainStyle";
import NavigationHeader from "components/NavigationHeader";
import { BILL_INFO,ORDER_INFO } from "data/dummyData";
import UnderlineView from "components/underlineView";
import MyButton from "components/MyButton";
import Modal from 'react-native-modal';
import CheckModal from "components/CheckModal";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useTranslation } from 'react-i18next';

const CheckOrder = props => {
  const { t, i18n } = useTranslation();

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
  };
  const [BillInfo, setBillInfo] = useState([
    {id:1, name:'Special Chicken Burger', price:'200',qty:'1',disc:'0'},
    {id:2, name:'Special Chicken Burger', price:'300',qty:'3',disc:'0'},
    {id:3, name:'Special Chicken Burger', price:'400',qty:'2',disc:'0'},
    {id:4, name:'Special Chicken Burger', price:'300',qty:'1',disc:'0'},
    {id:5, name:'Special Chicken Burger', price:'200',qty:'2',disc:'0'},
    {id:6, name:'Special Chicken Burger', price:'400',qty:'2',disc:'0'},
  ]);

    const [selectedTick , setSelectedTick] = useState(false); 
    const [itemQuantity, setQuantity] = useState(1);
      const renderBillHeader = () => {
        return(
          <><View
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
              </View>
            </View></>
        );
      };
      const incrementValue = () => {
        setQuantity(itemQuantity + 1);
      }
        const decrementValue = (billData) => {
          if (itemQuantity === 1) deleteItem(billData);
          else setQuantity(itemQuantity - 1);
        };

      const rightSwipeActions = () => {
        return (
          <View style={styles.swipeView}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => decrementValue(billData)}>
                <View>{ComIcons.minusRed}</View>
              </TouchableOpacity>
               <Text
                 style={{
                   marginHorizontal:8,
                   fontSize: 18,
                   fontWeight: '600',
                   alignSelf: 'center',
                 }}>
                 {itemQuantity}
               </Text>
              <TouchableOpacity onPress={() => incrementValue(props.id)}>
                <View>{ComIcons.plusRed}</View>
              </TouchableOpacity>
            </View>
          </View>
        );
      };
      const deleteItem = billData => {
        const filteredData = BillInfo.filter(
          item => item.id !== billData.item.id,
        );
        setBillInfo(filteredData);
      };
      const renderBill = billData => {
        return(
          <Swipeable renderRightActions={rightSwipeActions}>
            <View style={{
            marginTop: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 49,
            backgroundColor:'grey',
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
            </View>
            </View>
          </Swipeable>
        );
      }; 
      const renderBillFooter = () => {
        const renderAmount = amountData => {
          return(
        <View style={{ alignItems: 'center', paddingHorizontal: 5, borderWidth: 1, height: 26, backgroundColor: COLORS.grey, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontFamily: FONTS.medium, color:COLORS.black, fontSize: 14, fontWeight: amountData.item.id === 5 ? '700' : '400', lineHeight: 16 }}>{amountData.item.title}</Text>
                  <Text style={{ fontFamily: FONTS.medium,color:COLORS.black, fontSize: 14, fontWeight: '400', lineHeight: 16 }}>{amountData.item.price}</Text>
              </View>
      
          );
        };
        return(
          <>
          <FlatList
            data={AMOUNT_INFO}
            renderItem={renderAmount}
            keyExtractor={item => item.id}
            bounces={false}
            contentContainerStyle={{}} />
            <View style={{ flexDirection: 'row',justifyContent:'space-evenly',marginVertical:30}}>
            <MyButton title={t('common:print')} width={false} backColor={'grey'}/><MyButton title={t('common:placeOrder')} width={false} onPress={()=> toggleModal()}/></View></>
        );
      }
      return (
          <SafeAreaView style={MainStyle.safeAreaContainerLight}>
            <NavigationHeader
              title={t('common:check')}
              navigation={props.navigation}
            />
            <View style={{flex:1,marginHorizontal:16}}>
             <FlatList
             showsVerticalScrollIndicator={false}
                data={BillInfo}
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
             <CheckModal title={t('common:areYouSurePlaceOrder')} btnTitle={t('common:placeOrder')}  onPressNo={()=>toggleModal()} onPress={()=> onPressPlace()}/>
            </Modal>
            </View>
          </SafeAreaView>
      );
    };
    export default CheckOrder;

    const styles = StyleSheet.create({
        infoText: {fontSize: 14, fontFamily: FONTS.normal, lineHeight: 15},
        billHeader: {
          fontSize: 14,
          fontFamily: FONTS.bold,
          lineHeight: 15,
          color: COLORS.white,
        },
        billText: {
          fontSize: 12,
          fontWeight: '500',
          fontFamily: FONTS.medium,
          color:COLORS.black,
          lineHeight: 14,
        },
          swipeView: {justifyContent: 'center',marginLeft:6},
      });
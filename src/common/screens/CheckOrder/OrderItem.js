import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {COLORS, ComIcons, FONTS} from '../../../assets';

const OrderItem = props => {
  const incrementValue = () => {
    setQuantity(itemQuantity + 1);
  };
  const decrementValue = () => {
    if (itemQuantity === 1) props.deleteItem();
    else setQuantity(itemQuantity - 1);
  };
  const [itemQuantity, setQuantity] = useState(1);

  const rightSwipeActions = () => {
    return (
      <View style={styles.swipeView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => decrementValue()}>
            <View>{ComIcons.minusRed}</View>
          </TouchableOpacity>
          <Text
            style={{
              marginHorizontal: 8,
              fontSize: 18,
              fontWeight: '600',
              alignSelf: 'center',
            }}>
            {itemQuantity}
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={() => incrementValue(props.id)}>
            <View>{ComIcons.plusRed}</View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const billData = props.billData;
  return (
    <Swipeable renderRightActions={() => rightSwipeActions(billData)}>
      <View
        style={{
          marginTop: 6,
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
        </View>
      </View>
    </Swipeable>
  );
};
export default OrderItem;

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
    color: COLORS.black,
    lineHeight: 14,
  },
  swipeView: {justifyContent: 'center', marginLeft: 6},
});

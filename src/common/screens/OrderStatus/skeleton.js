import React from 'react';
import {FlatList, View} from 'react-native';
import {COLORS} from 'assets/index';
import {ORDER_STATUS} from '../../../data/dummyData';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';

const Skeleton = () => {
  const renderItem = () => {
    return (
      <View
        style={{
          height: 71,
          marginTop: 16,
          justifyContent: 'space-between',
          padding: 13,
          marginHorizontal: 2,
          borderColor: COLORS.grey,
          borderWidth: 1,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ShimmerPlaceholder style={{width: '30%'}} />
          <ShimmerPlaceholder style={{width: '30%'}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ShimmerPlaceholder style={{width: '30%'}} />
          <ShimmerPlaceholder style={{width: '30%'}} />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={ORDER_STATUS}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.orderId}
      bounces={false}
      contentContainerStyle={{
        marginHorizontal: 14,
        marginTop: 10,
        paddingBottom: 15,
      }}
    />
  );
};

export default Skeleton;

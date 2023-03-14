import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {MENU_UPDATES} from 'data/dummyData';
import styles from './style';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';
import { DEVICE } from '../../../assets/theme';

const Skeleton = () => {
  const renderItem = itemData => {
    return (
      <View style={styles.boxView}>
        <ShimmerPlaceholder style={[styles.image,{borderRadius:32}]} />
        <View style={styles.boxTextView}>
          <ShimmerPlaceholder style={{width: DEVICE === 'tab' ? '15%':'40%'}} />
          <ShimmerPlaceholder numberOfLines={2} style={{width:'100%',marginTop:10,height:'30%'}}/>
        </View>
      </View>
    );
  };
  const header = () => {
    return (
      <View>
        <Text style={styles.title}>Keeping the Restaurant Fresh</Text>
        <Text style={styles.desc}>
          Changing the menu will keep the restaurant fresh, engage new
          customers, and create new interests. We have beeing following food
          trends such as the rise of a vegetarian lifestyle, locally sourced
          ingredients, and certain ingredients like avocado.
        </Text>
        <Text style={styles.title}>New in the Menu</Text>
      </View>
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={MENU_UPDATES}
      renderItem={renderItem}
      ListHeaderComponent={header}
      bounces={false}
      keyExtractor={item => item.id}
    />
  );
};

export default Skeleton;

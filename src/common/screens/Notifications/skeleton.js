import React from 'react';
import {View, SectionList} from 'react-native';
import {COLORS} from 'assets/index';
import styles from './style';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';
import {DEVICE} from '../../../assets/theme';

const Skeleton = () => {
  const DUMMY = [
    {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    },

    {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
  ];

  const renderItem = () => {
    return (
      <View
        style={[
          styles.box,
          {
            borderColor: COLORS.grey,
            borderWidth: 1,
          },
        ]}>
        <View style={[styles.textView, {flex: 1}]}>
          <ShimmerPlaceholder
            style={{width: DEVICE === 'tab' ? '30%' : '50%'}}
          />
          <ShimmerPlaceholder
            style={{marginTop: 6, width: '100%', height: '40%'}}
          />
        </View>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <ShimmerPlaceholder
          style={{marginLeft: 20, width: DEVICE === 'tab' ? '5%' : '15%'}}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <SectionList
        showsVerticalScrollIndicator={false}
        bounces={false}
        sections={DUMMY}
        renderItem={renderItem}
        renderSectionHeader={renderHeader}
        keyExtractor={(item, index) => index}
        contentContainerStyle={{marginTop: 20}}
      />
    </View>
  );
};

export default Skeleton;

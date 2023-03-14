import React from 'react';
import {View, SectionList} from 'react-native';
import {COLORS} from 'assets/theme';
import {SPECIAL} from 'data/dummyData';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';
import {DEVICE} from '../../../assets/theme';

const Skeleton = () => {
  const renderItem = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          height: 82,
          borderColor: COLORS.grey,
          borderWidth: 1,
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <ShimmerPlaceholder style={{marginLeft: 8, height: 64, width: 60}} />

        <View
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 6,
          }}>
          <ShimmerPlaceholder
            style={{
              marginBottom: 6,
              width: DEVICE === 'tab' ? '20%' : '40%',
            }}
          />
          <ShimmerPlaceholder
            style={{
              width: '100%',
              height: '40%',
            }}
          />
        </View>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <ShimmerPlaceholder
        style={{
          marginTop: 23,
          width: DEVICE === 'tab' ? '10%' : '30%',
        }}
      />
    );
  };

  return (
    <SectionList
      sections={SPECIAL}
      renderItem={renderItem}
      renderSectionHeader={renderHeader}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Skeleton;

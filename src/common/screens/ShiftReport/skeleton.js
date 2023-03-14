import React from 'react';
import {View, SectionList, Dimensions} from 'react-native';
import UnderlineView from 'components/underlineView';
import {useTranslation} from 'react-i18next';
import {DEVICE} from '../../../assets/theme';
import {ShimmerPlaceholder} from '../../../assets/shimmerSlider';
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const Skeleton = () => {
  const SHIFT_DATA = [
    {
      data: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}],
    },
    {
      data: [{id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}],
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={{marginTop: 19}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ShimmerPlaceholder
            style={{
              width: '30%',
            }}
          />

          <ShimmerPlaceholder
            style={{
              width: '30%',
              marginBottom: item.id === 6 || item.id == 9 ? 21 : null,
            }}
          />
        </View>
        {item.id === 6 || item.id == 9 ? <UnderlineView /> : null}
      </View>
    );
  };
  const header = () => {
    return (
      <View>
        <ShimmerPlaceholder
          style={{
            marginTop: 23,
            width: '40%',
          }}
        />
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View style={{marginHorizontal: -19, marginTop: 19}}>
        <ShimmerPlaceholder style={{height: 49, width: '100%'}} />
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ShimmerPlaceholder
            style={{
              width: '30%',
            }}
          />
          <ShimmerPlaceholder
            style={{
              marginBottom: 15,
              width: '30%',
            }}
          />
        </View>
        <UnderlineView />
      </View>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          marginHorizontal: DEVICE === 'tab' ? '30%' : 0,
          borderRadius: 5,
          borderColor: '#ddd',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 3,
          backgroundColor: '#FFFFFF',
          paddingHorizontal: DEVICE === 'tab' ? '4%' : 0,
          paddingVertical: DEVICE === 'tab' ? 44 : 0,
          flex: DEVICE === 'tab' ? 0 : 1,
          justifyContent: 'space-between',
          height: DEVICE === 'tab' ? screenHeight / 1.4 : screenHeight,
        }}>
        <View style={{marginLeft: 16, marginRight: 16, marginTop: 23, flex: 1}}>
          <SectionList
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{marginBottom: 19}}
            sections={SHIFT_DATA}
            renderItem={renderItem}
            renderSectionHeader={header}
            ListFooterComponent={renderFooter}
            ListHeaderComponent={renderHeader}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    </View>
  );
};
export default Skeleton;

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  SectionList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import {COLORS, FONTS} from 'assets/theme';
import {SPECIAL} from 'data/dummyData';
import {useTranslation} from 'react-i18next';
import Skeleton from './skeleton';
import DashBoardMenu from '../../../components/DashboardMenu';
import { DEVICE } from '../../../assets';
import MainStyle from '../../../styleSheet/MainStyle';

const TodaySpecial = props => {
  const {t, i18n} = useTranslation();
  const [loading, setLoading] = useState(false);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}
        style={{
          alignItems: 'center',
          height: 82,
          borderColor: COLORS.grey,
          borderWidth: 1,
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <Image
          style={{marginLeft: 8, height: 64, width: 60}}
          source={require('../../../assets/images/johnDoe.png')}
        />

        <View
          style={{
            flex: 1,
            marginLeft: 15,
            marginRight: 6,
          }}>
          <Text
            style={{
              marginBottom: 6,
              fontFamily: FONTS.bold,
              color: COLORS.black,
              fontSize: 14,
              lineHeight: 22.4,
            }}>
            {item.name}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: FONTS.normal,
              color: COLORS.black,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 19.2,
            }}>
            {item.desc}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderSectionHeader = ({section}) => {
    return (      
      <Text
        style={{
          marginTop: 23,
          fontFamily: FONTS.medium,
          fontSize: 15,
          color: COLORS.black,
          fontWeight: '500',
          lineHeight: 24,
        }}>
          {section.title}
        </Text>
    );
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:todaySpecial')}
        navigation={props.navigation}
      />
      <View style={{marginLeft: 16, marginRight: 16,flex:1}}>
        {loading === true ? (
          <Skeleton />
        ) : (
          <View style={{flexDirection:'row',flex:1}}>
            {DEVICE === 'tab' &&  <View style={{width: '13%', justifyContent: 'center', alignContent: 'center', borderRightWidth: 1, borderRightColor: '#dddddd' }}>
        <DashBoardMenu navigation={props.navigation} />
      </View>}
        <SectionList
            bounces={false}
                sections={SPECIAL}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => index}
                contentContainerStyle={{marginLeft:20}} />
                </View>
          )}
      </View>
    </SafeAreaView>
  );
};

export default TodaySpecial;

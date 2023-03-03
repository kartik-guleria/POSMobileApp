import React from 'react';
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
import style from './style';
import { useTranslation } from 'react-i18next';


const TodaySpecial = props => {
  const { t, i18n } = useTranslation();

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
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
              fontSize: 14,
              lineHeight: 22.4,
            }}>
            {item.name}
          </Text>
          <Text
          numberOfLines={2}
            style={{
              fontFamily: FONTS.normal,
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
  const renderHeader = ({section}) => {
    return (
      <Text
        style={{
          marginTop: 23,
          fontFamily: FONTS.medium,
          fontSize: 15,
          fontWeight: '500',
          lineHeight: 24,
        }}>
        {section.title}
      </Text>
    );
  };

  return (
    <SafeAreaView>
      <NavigationHeader title={t('common:todaySpecial')}  navigation={props.navigation} />
      <View style={{ marginLeft: 16, marginRight: 16 }}>
        <SectionList
          sections={SPECIAL}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          keyExtractor={(item, index) => index} />
      </View>
    </SafeAreaView>
  );
};

export default TodaySpecial;

import React from 'react';
import {
  View,
  FlatList,
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
      <View
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
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginBottom: 6,
              fontFamily: FONTS.normal,
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 22.4,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 19.2,
            }}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };
  const renderHeader = ({section}) => {
    return (
      <Text
        style={{
          marginTop: 23,
          fontFamily: FONTS.normal,
          fontSize: 15,
          fontWeight: '500',
          lineHeight: 24,
        }}>
        {section.title}
      </Text>
    );
  };

  return (
    <><View style={{ backgroundColor: COLORS.red, height: 50 }}></View><SafeAreaView>
      <NavigationHeader title={t('common:todaySpecial')}  navigation={props.navigation} />

      <View style={{ marginLeft: 16, marginRight: 16 }}>
        <SectionList
          sections={SPECIAL}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          keyExtractor={(item, index) => index} />
      </View>
    </SafeAreaView></>
  );
};

export default TodaySpecial;

import React from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import NavigationHeader from 'components/NavigationHeader';
import {useTranslation} from 'react-i18next';
import {ComIcons, COLORS} from 'assets/index';
import UnderlineView from 'components/underlineView';
import {FONTS} from '../../../assets';

const SelectLangScreen = props => {
  const {i18n, t} = useTranslation();
  const selectedLanguageCode = i18n.language;
  const LANGUAGE = [
    {
      id: '1',
      title: t('common:english'),
      img: require('../../../assets/images/English-Flag.png'),
      code: 'en',
    },
    {
      id: '2',
      title: t('common:albanian'),
      img: require('../../../assets/images/Albanian-Flag.png'),
      code: 'al',
    },
  ];
  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const Item = ({item: {title, code, img}}) => (
    <TouchableOpacity activeOpacity={0.7}
      onPress={() => {
        i18n.changeLanguage(code);
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={img}
          style={{
            width: 23,
            height: 18,
            alignSelf: 'center',
            backgroundColor: 'grey',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex:1,
          }}>
          <Text
            style={[
              MainStyle.descText,
              {
                textAlign: 'left',
                fontWeight: '500',
                fontFamily: FONTS.medium,
                margin: 10,
                color:
                  selectedLanguageCode === code ? COLORS.red : COLORS.black,
                width: '50%',
              },
            ]}>
            {title}
          </Text>

          <View style={{marginRight: 30, alignSelf: 'center'}}>
            {selectedLanguageCode === code ? ComIcons.redTick : null}
          </View>
      
        </View>
     
      </View>
      <UnderlineView />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <NavigationHeader
          title={t('common:Language')}
          pop={false}
          displayBtn={'dash'}
          navigation={props.navigation}
          onPress={() => props.navigation.openDrawer()}
        />
        <View
          style={[
            MainStyle.MainContainerLight,
            {
              marginBottom: 100,
              marginLeft: 15,
              marginRight: 15,
            },
          ]}>
          <FlatList
            bounces={false}
            data={LANGUAGE}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectLangScreen;

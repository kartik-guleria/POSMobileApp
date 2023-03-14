import React, { useState } from 'react';
import {View, SafeAreaView, Text, SectionList} from 'react-native';
import {COLORS, ComIcons} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import {NOTIFICATIONS} from 'data/dummyData';
import MainStyle from 'styleSheet/MainStyle';
import styles from './style';
import { useTranslation } from 'react-i18next';
import Skeleton from './skeleton';

const Notifications = props => {
  const { t, i18n } = useTranslation();
const [loading,setLoading] = useState(false);
  const renderItem = ({item, section}) => {
    return (
      <View
        style={[
          styles.box,
          {
            backgroundColor:
              section.title === 'Unread' ? COLORS.red : COLORS.white,
            borderColor: section.title === 'Unread' ? null : COLORS.grey,
            borderWidth: section.title === 'Unread' ? null : 1,
            paddingLeft :section.title === 'Read' ? 17 :0
          },
        ]}>
        {section.title === 'Unread' ? (
          <View style={{marginLeft: 8}}>{ComIcons.whiteCircle}</View>
        ) : null}
        <View style={styles.textView}>
          <Text
          numberOfLines={2}
            style={[
              styles.name,
              {
                color:
                  section.title === 'Unread' ? COLORS.white : COLORS.darkGrey,
              },
            ]}>
            {item.name}
          </Text>
          <Text
           numberOfLines={2}
            style={[
              styles.desc,
              {
                color:
                  section.title === 'Unread' ? COLORS.white : COLORS.darkGrey,
              },
            ]}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };
  const renderHeader = ({section}) => {
    return (
      <View>
        <Text style={styles.header}>{section.title}</Text>
      </View>
    );
  };
  return (
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title={'NOTIFICATIONS'} displayBtn='dash' navigation={props.navigation} pop={false} onPress={()=>props.navigation.openDrawer()}/>
      <View style={{ flex: 1 }}>
       {
       loading === true ?  <Skeleton/> 
       :
        <SectionList
        stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          sections={NOTIFICATIONS}
          renderItem={renderItem}
          renderSectionHeader={renderHeader}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ marginTop: 20 }} />
          }
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

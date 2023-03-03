import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import UnderlineView from 'components/underlineView';
import {FlatList} from 'react-native-gesture-handler';
import styles from './style';
import MyButton from 'components/MyButton';
import MainStyle from 'styleSheet/MainStyle';
import { COLORS } from 'assets/theme';
import { useTranslation } from 'react-i18next';


const FinalizeOrder = props => {
  const { t, i18n } = useTranslation();

  const PAYMENT_MODE = [
    {id: 1, title: t('common:cash')},
    {id: 2, title: t('common:creditCard')},
    {id: 3, title: t('common:giftCard')},
    {id: 4, title: t('common:wonderpoints')},
  ];

  const renderItem = itemData => {
    return (
     <MyButton title={itemData.item.title} backColor = {'white'} onPress={()=>props.navigation.navigate('FinalizeOrderAmount')}/>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title={t('common:finalizeOrder')}   navigation={props.navigation}/>
      <View style={styles.screen}>
        <Text
          style={styles.payment}>
          1000L
        </Text>
        <UnderlineView />
        <FlatList
          data={PAYMENT_MODE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          bounces={false}
          contentContainerStyle={styles.flatlist}
        />
      </View>
    </SafeAreaView>
  );
};

export default FinalizeOrder;

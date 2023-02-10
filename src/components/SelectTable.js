import {ComIcons} from 'assets/';
import {COLORS, FONTS} from 'assets/theme';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ModalHeader from './ModalHeader';
import MyButton from './MyButton';
import { useTranslation } from 'react-i18next';


const SelectTable = ({title, navigation, newLine = false, newLineTitle}) => {

  const { t, i18n } = useTranslation();
  const [selectedId, setSelectedId] = useState(1);
  const GUEST_NUMBER = [
    {id: 1, number: '1'},
    {id: 2, number: '2'},
    {id: 3, number: '3'},
    {id: 4, number: '4'},
    {id: 5, number: '5'},
    {id: 6, number: '6'},
  ];
  const renderItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(itemData.item.id)}
        style={{
          backgroundColor:
            itemData.item.id === selectedId ? COLORS.red : COLORS.white,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          margin: 10,
          borderWidth: 1,
          borderColor: COLORS.grey,
          height: 120.41,
        }}>
        <Text
          style={{
            fontFamily: FONTS.normal,
            fontSize: 26,
            fontWeight: '500',
            lineHeight: 30.47,
          }}>
          {itemData.item.number}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => {
    return (
      <ModalHeader
        title={'T3, T9'}
        newLine={true}
        newLineTitle= {t('common:selectGuest')}
      />
    );
  };
  const renderFooter = () => {
    return (
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            borderColor: COLORS.grey,
            borderWidth: 1,
            height: 62,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <Text
            style={{
              fontFamily: FONTS.normal,
              fontSize: 22,
              fontWeight: '700',
              lineHeight: 24.31,
            }}>
           {t('common:more')}
          </Text>
        </TouchableOpacity>
        <View style={{marginLeft: -6, marginRight: -6}}>
          <MyButton title={t('common:continue')} onPress={()=> navigation.navigate('Dash')} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={GUEST_NUMBER}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          bounces={false}
          numColumns={3}
          contentContainerStyle={{justifyContent: 'space-between'}}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
        />
        <TouchableOpacity onPress={()=> navigation.navigate('ProductSelection')}><Text>Product selection</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectTable;

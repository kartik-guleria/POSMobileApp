import {COLORS, FONTS, ComIcons} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import ScanQRModal from 'components/ScanQRModal';
import SearchBar from 'components/SearchBar';
import {PRODUCTS} from 'data/dummyData';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import Modal from 'react-native-modal';
import MyButton from 'components/MyButton';
import {useTranslation} from 'react-i18next';

const ProductSelection = props => {
  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    {
      counter === 1 ? setSelected(false) : setCounter(counter - 1);
    }
  };
  const renderItem = itemData => {
    return (
      <View>
        <View
          style={{
            height: 79,
            borderWidth: 1,
            borderColor: COLORS.grey,
            alignItems: 'center',
          }}>
          {selected === itemData.item.id ? null : (
            <Image
              style={{height: 41, width: 41}}
              source={itemData.item.image}
            />
          )}
          <Text
            style={{
              fontSize: 10,
              fontFamily: FONTS.medium,
              color: COLORS.black,
              fontWeight: '500',
              lineHeight: 12,
              marginBottom: 2,
              marginTop: 4,
              marginHorizontal: 16,
            }}>
            {itemData.item.title}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: FONTS.medium,
              color: COLORS.black,
              fontWeight: '500',
              lineHeight: 12,
            }}>
            {itemData.item.price}L
          </Text>
          {selected === itemData.item.id ? (
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <TouchableOpacity onPress={() => decrementCounter()}>
                {ComIcons.minusRed}
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: FONTS.bold,
                  fontSize: 20,
                  color: COLORS.black,
                  lineHeight: 23,
                  marginHorizontal: 9,
                }}>
                {counter}
              </Text>
              <TouchableOpacity onPress={() => incrementCounter()}>
                {ComIcons.plusRed}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <TouchableOpacity
          onPress={() => setSelected(itemData.item.id)}
          style={{
            backgroundColor: COLORS.red,
            alignSelf: 'stretch',
            textTransform: 'uppercase',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.white,
              fontFamily: FONTS.medium,
              paddingVertical: 2,
              fontSize: 12,
            }}>
            {t('common:add')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.bold,
                color: COLORS.black,
                lineHeight: 18,
              }}>
              T3, T9
            </Text>
            <View
              style={{
                backgroundColor: COLORS.darkGrey,
                width: 1,
                height: 16,
                marginHorizontal: 9,
              }}></View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: FONTS.bold,
                color: COLORS.black,
                lineHeight: 18,
              }}>
              6
            </Text>
            {ComIcons.userBlack}
            <View
              style={{
                backgroundColor: COLORS.darkGrey,
                width: 1,
                height: 16,
                marginHorizontal: 9,
              }}></View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('CustomerDashboard')}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: FONTS.bold,
                  lineHeight: 18,
                  textDecorationLine: 'underline',
                  textDecorationColor: 'red',
                  color: COLORS.red,
                }}>
                John Doe
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() => toggleModal()}>
              {ComIcons.scanBlack}
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.darkGrey,
                width: 1,
                height: 16,
                marginHorizontal: 9,
              }}></View>
            <View style={{marginRight: 3}}>{ComIcons.plusBlack}</View>
            {ComIcons.userTransparent}
          </View>
        </View>

        <View style={{marginHorizontal: -15}}>
          <SearchBar placeholder={t('common:searchHere')} />
        </View>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View style={{marginTop: 20, marginHorizontal: -16}}>
        <MyButton
          title={'DONE'}
          backColor={'red'}
          onPress={() => props.navigation.navigate('ProductConfig')}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:productSelection')}
        navigation={props.navigation}
        productSelection={true}
      />
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 38,
          marginBottom: 15,
          flex: 1,
        }}>
        <FlatList
          data={PRODUCTS}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          bounces={false}
          numColumns={3}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 16}}></View>}
          columnWrapperStyle={{justifyContent: 'space-around'}}
        />
        <Modal
          isVisible={isModalVisible}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down"
          backdropOpacity={0.7}
          backgroundColor="#FFFFFF"
          style={{
            marginBottom: 400,
            position: 'absolute',
            top: 200,
            backgroundColor: COLORS.white,
            marginHorizontal: 16,

            marginTop: 0,
          }}>
          <ScanQRModal onPressCross={() => toggleModal()} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductSelection;

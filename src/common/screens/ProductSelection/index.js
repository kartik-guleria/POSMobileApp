import {COLORS, FONTS, ComIcons, DEVICE} from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import ScanQRModal from 'components/ScanQRModal';
import SearchBar from 'components/SearchBar';
import {PRODUCTS} from 'data/dummyData';
import CheckOrderGrid from '../../../components/CheckOrderGrid';
import React, {useState} from 'react';
import DashBoardMenu from '../../../components/DashboardMenu';
import ProductSelInfo from '../../../components/ProductSelInfo';
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
import InviteGuestModal from '../../../components/InviteGuestModal';

const ProductSelection = props => {
  const {t, i18n} = useTranslation();

  const [selected, setSelected] = useState();
  const [counter, setCounter] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isInviteModalVisible, setInviteModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleInviteModal = () => {
    setInviteModalVisible(!isInviteModalVisible);
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
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => decrementCounter()}>
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
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => incrementCounter()}>
                {ComIcons.plusRed}
              </TouchableOpacity>
            </View>
          ) : null}
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
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
              activeOpacity={0.7}
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
            <TouchableOpacity activeOpacity={0.7} onPress={() => toggleModal()}>
              {ComIcons.scanBlack}
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: COLORS.darkGrey,
                width: 1,
                height: 16,
                marginHorizontal: 9,
              }}></View>
            <TouchableOpacity
              hitSlop={20}
              onPress={() => toggleInviteModal()}
              style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              {ComIcons.plusBlack}
              {ComIcons.userTransparent}
            </TouchableOpacity>
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
      <View style={{height: '100%'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          {DEVICE == 'tab' && (
            <View
              style={{
                width: '11%',
                justifyContent: 'center',
                alignContent: 'center',
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
              }}>
              <DashBoardMenu navigation={props.navigation} />
            </View>
          )}
          {DEVICE == 'tab' && (
            <View style={{width: '44%'}}>
              <CheckOrderGrid navigation={props.navigation} />
            </View>
          )}
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
              numColumns={DEVICE == 'tab' ? 4 : 3}
              ListHeaderComponent={renderHeader}
              ListFooterComponent={renderFooter}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{height: 16}}></View>}
              columnWrapperStyle={{justifyContent: 'space-between'}}
            />
            <Modal
              isVisible={isModalVisible}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="down"
              backdropOpacity={0.7}
              onBackdropPress={()=> toggleModal()}
              style={{
                width: DEVICE === 'tab' ? '30%' : '100%',
                alignSelf: 'center',
                paddingHorizontal: DEVICE === 'tab' ? 0 : 16,
              }}>
              <ScanQRModal
                onPressCross={() => toggleModal()}
                onPressProceed={() =>
                  toggleModal() & props.navigation.navigate('ScanQR')
                }
              />
            </Modal>
            <Modal
              isVisible={isInviteModalVisible}
              onSwipeComplete={() => setInviteModalVisible(false)}
              swipeDirection="down"
              backdropOpacity={0.7}
              onBackdropPress={()=> toggleInviteModal()}
              style={{
                width: DEVICE === 'tab' ? '30%' : '100%',
                alignSelf: 'center',
                paddingHorizontal: DEVICE === 'tab' ? 0 : 16,
              }}>
              <InviteGuestModal
                onPressSend={() => toggleInviteModal()}
                onPressCross={() => toggleInviteModal()}
              />
            </Modal>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductSelection;

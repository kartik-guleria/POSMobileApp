import {COLORS, FONTS, ComIcons, DEVICE} from 'assets/index';
import MyButton from 'components/MyButton';
import NavigationHeader from 'components/NavigationHeader';
import ProductConfigTab from 'components/ProductConfigTab';
import UnderlineView from 'components/underlineView';
import {
  INGRI_BASE_DATA,
  INGRI_EXTRA_DATA,
  INGRI_PROTEIN_DATA,
  INGRI_TOPPING_DATA,
} from 'data/dummyData';
import React, {useState} from 'react';
import DashBoardMenu from '../../../components/DashboardMenu';
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
import {useTranslation} from 'react-i18next';
import LeaveNoteModal from '../../../components/LeaveNoteModal';
import Modal from 'react-native-modal';

const ProductConfig = props => {
  const {t, i18n} = useTranslation();

  const [wpTypeId, setwpTypeId] = useState(1);
  const [wpType, setwpType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const onSelectSwitch = index => {
    switch (index) {
      case 2:
        setwpTypeId(2);
        setwpType('Base');
        setCurrentPage(1);
        break;
      case 3:
        setwpTypeId(3);
        setwpType('Protein');
        setCurrentPage(1);
        break;
      case 4:
        setwpTypeId(4);
        setwpType('Topping');
        setCurrentPage(1);
        break;
      default:
        setwpTypeId(1);
        setwpType('Extra');
        setCurrentPage(1);
    }
  };
  const [Ingridients, setIngridients] = useState([
    {
      id: 1,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 2,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 3,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 4,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 5,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 6,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 7,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 8,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 9,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 10,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 11,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 12,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 13,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 14,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 15,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
    {
      id: 16,
      image: require('../../../assets/images/lettuce.png'),
      title: 'Lettuce',
    },
  ]);
  const renderItem = itemData => {
    return (
      <View
        style={{
          height: 53,
          borderWidth: 1,
          borderColor: COLORS.grey,
          alignItems: 'center',
          paddingTop: 5,
        }}>
        <Image style={{height: 30, width: 36}} source={itemData.item.image} />
        <Text
          style={{
            fontSize: 10,
            fontFamily: FONTS.medium,
            color: COLORS.black,
            fontWeight: '500',
            lineHeight: 10,
            marginBottom: 2,
            marginTop: 4,
            marginHorizontal: 22,
          }}>
          {itemData.item.title}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => deleteItem(itemData)}
          style={{position: 'absolute', right: -10, top: -11}}>
          {ComIcons.crossRed}
        </TouchableOpacity>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View style={{marginHorizontal: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 23,
          }}>
          <View>
            <Text
              style={{
                fontSize: 14,
                fontFamily: FONTS.medium,
                color: COLORS.black,
                fontWeight: '500',
                lineHeight: 16,
              }}>
              Chicken Burger
            </Text>

            <Text
              style={{
                marginTop: 3,
                fontSize: 12,
                fontFamily: FONTS.medium,
                fontWeight: '400',
                lineHeight: 14,
                color: COLORS.darkGrey,
              }}>
              475 Kcal
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              fontFamily: FONTS.medium,
              color: COLORS.black,
              fontWeight: '500',
              lineHeight: 16,
            }}>
            100L
          </Text>
        </View>
        <Text
          style={{
            fontSize: 12,
            fontFamily: FONTS.medium,
            color: COLORS.black,
            fontWeight: '500',
            lineHeight: 14,
            marginBottom: 15,
          }}>
          {t('common:ingridients')}
        </Text>
      </View>
    );
  };
  const [selected, setSelected] = useState(false);
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    {
      counter === 1 ? setSelected(false) : setCounter(counter - 1);
    }
  };
  const renderIngriButton = btnData => {
    return (
      <View style={{borderWidth: 1, borderColor: COLORS.grey, height: 60}}>
        <View style={{alignItems: 'center'}}>
          {selected === btnData.item.id ? (
            <>
              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => decrementCounter()}>
                  {ComIcons.trashRed}
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: FONTS.bold,
                    fontSize: 18,
                    color: COLORS.black,
                    lineHeight: 23,
                    marginHorizontal: 9,
                  }}>
                  {counter}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => incrementCounter()}>
                  {ComIcons.plusRedSmall}
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: 10,
                  color: COLORS.black,
                  fontWeight: '400',
                  lineHeight: 10,
                }}>
                Included
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  textAlign: 'center',
                  fontFamily: FONTS.medium,
                  color: COLORS.black,
                  fontSize: 10,
                  fontWeight: '500',
                  lineHeight: 12,
                }}>
                {btnData.item.title}
              </Text>
            </>
          ) : (
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{marginHorizontal: 18, marginTop: 5}}
                onPress={() => setSelected(btnData.item.id)}>
                {ComIcons.plusRed}
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  textAlign: 'center',
                  fontFamily: FONTS.medium,
                  color: COLORS.black,
                  fontSize: 10,
                  fontWeight: '500',
                  lineHeight: 12,
                }}>
                {btnData.item.title}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const bottomButtons = (image, title, press) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          width: '50%',
          borderWidth: 1,
          borderColor: COLORS.grey,
          alignItems: 'center',
          justifyContent: 'center',
          height: 53,
          justifyContent: 'space-evenly',
        }}
        onPress={() =>
          DEVICE === 'tab' ? toggleModal() : props.navigation.navigate(press)
        }>
        <View>{image}</View>
        <Text
          style={{
            fontFamily: FONTS.medium,
            color: COLORS.black,
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 14,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderfooter = () => {
    return (
      <View style={{marginHorizontal: 16}}>
        <ProductConfigTab
          selectionMode={wpTypeId}
          option1={t('common:base')}
          option2={t('common:protein')}
          option3={t('common:topping')}
          option4={t('common:extra')}
          onSelectSwitch={onSelectSwitch}
          selectionColor={null}
        />
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: 12,
            color: COLORS.black,
            lineHeight: 13,
            marginTop: 23,
            marginBottom: 12,
          }}>
          {wpTypeId === 1
            ? `${t('common:base')}(2/4)`
            : wpTypeId === 2
            ? `${t('common:protein')}(2/4)`
            : wpTypeId === 3
            ? `${t('common:topping')}(2/4)`
            : `${t('common:extra')}(2/4)`}
        </Text>
        <FlatList
          data={
            wpTypeId === 1
              ? INGRI_BASE_DATA
              : wpTypeId === 2
              ? INGRI_PROTEIN_DATA
              : wpTypeId === 3
              ? INGRI_TOPPING_DATA
              : INGRI_EXTRA_DATA
          }
          renderItem={renderIngriButton}
          keyExtractor={item => item.id}
          bounces={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{height: 16, width: 10}}></View>
          )}
          contentContainerStyle={{marginBottom: 30}}
        />
        <UnderlineView />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          {bottomButtons(ComIcons.info, t('common:info'), 'LeaveNote')}
          <View style={{width: 5}}></View>
          {bottomButtons(ComIcons.note, t('common:leaveANote'), 'LeaveNote')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <MyButton
            width={false}
            title={t('common:cancel')}
            backColor={'grey'}
            onPress={() => props.navigation.pop()}
          />
          <MyButton
            width={false}
            title={t('common:add')}
            onPress={() => props.navigation.navigate('CheckOrder')}
          />
        </View>
      </View>
    );
  };
  const deleteItem = itemData => {
    const filteredData = Ingridients.filter(
      item => item.id !== itemData.item.id,
    );
    setIngridients(filteredData);
  };
  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:productConfig')}
        navigation={props.navigation}
      />
      <View style={{height: '100%'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          {DEVICE == 'tab' && (
            <View
              style={{
                width: '13%',
                justifyContent: 'center',
                alignContent: 'center',
                borderRightWidth: 1,
                borderRightColor: '#dddddd',
              }}>
              <DashBoardMenu navigation={props.navigation} />
            </View>
          )}
          <View
            style={{
              marginTop: 38,
              marginBottom: 15,
              flex: 1,
            }}>
            <FlatList
              data={Ingridients}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              bounces={false}
              numColumns={DEVICE == 'tab' ? 7 : 4}
              ListHeaderComponent={renderHeader}
              ListFooterComponent={renderfooter}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{height: 16}}></View>}
              columnWrapperStyle={{
                justifyContent: 'space-evenly',
                marginHorizontal: 10,
              }}
            />
            <Modal
              isVisible={isModalVisible}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="down"
              backdropOpacity={0.7}
              style={{
                width: '30%',
                alignSelf: 'center',
              }}>
              <LeaveNoteModal
                onPressCross={() => toggleModal()}
                onPressCancel={() => toggleModal()}
                onPressApply={() => toggleModal()}
              />
            </Modal>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProductConfig;

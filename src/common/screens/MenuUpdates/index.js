import React from 'react';
import {View, SafeAreaView, FlatList, Text, Image,TouchableOpacity} from 'react-native';
import NavigationHeader from 'components/NavigationHeader';
import {MENU_UPDATES} from 'data/dummyData';
import styles from './style';
import MainStyle from '../../../styleSheet/MainStyle';
import { COLORS } from 'assets/theme';
import { useTranslation } from 'react-i18next';


const MenuUpdates = props => {
  const { t, i18n } = useTranslation();

  const renderItem = itemData => {
    return (
      <View style={styles.boxView}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/johnDoe.png')}
        />
        <View style={styles.boxTextView}>
          <Text style={styles.name}>{itemData.item.name}</Text>
          <Text numberOfLines={2} style={styles.desc}>{itemData.item.desc}</Text>
        </View>
      </View>
    );
  };
  const header = () => {
    return (
      <View>
        <Text style={styles.title}>Keeping the Restaurant Fresh</Text>
        <Text style={styles.desc}>
          Changing the menu will keep the restaurant fresh, engage new
          customers, and create new interests. We have beeing following food
          trends such as the rise of a vegetarian lifestyle, locally sourced
          ingredients, and certain ingredients like avocado.
        </Text>
        <Text style={styles.title}>New in the Menu</Text>
      </View>
    );
  };
  return (
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader title={'Menu Updates'} navigation={props.navigation} />
      <View style={styles.screen}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={MENU_UPDATES}
          renderItem={renderItem}
          ListHeaderComponent={header}
          bounces={false}
          keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>
  );
};

export default MenuUpdates;

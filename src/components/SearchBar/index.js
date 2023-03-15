import React, {memo, forwardRef} from 'react';
import {
  View,
  ActivityIndicator,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import PropTypes from 'prop-types';
import Style from './style';
import {ComIcons} from 'assets/index';
import { useTranslation } from 'react-i18next';


const SearchBar = forwardRef((props, inputRef) => {
  const { t, i18n } = useTranslation();

  const {
    customContainerStyle,
    customInputStyle,
    placeholder,
    listData,
    loading,
    style,
    onPressListItem,
    ...pendingProps
  } = props;

  const renderItems = ({item}) => (
    <TouchableOpacity activeOpacity={0.7}
      style={Style.listItem}
      onPress={() => onPressListItem(item)}>
      <Text style={Style.placeTxt} numberOfLines={1}>
        {item.formatted_address}
      </Text>
    </TouchableOpacity>
  );
  const onCrossPress = () => {
    inputRef.current.clear();
  };

  return (
    <View style={[customContainerStyle, Style.inputBox]}>
      <View style={Style.searchContainer}>
        <View
          onPress={onCrossPress}
          style={{
            alignSelf: 'center',
            resizeMode: 'contain',
            marginHorizontal: 10
}}>
          {ComIcons.search}
        </View>

        <TextInput
          ref={inputRef}
          style={[Style.input, Style.cardStyle, customInputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'grey'}
          {...pendingProps}
        />
        <TouchableOpacity activeOpacity={0.7}
          onPress={onCrossPress}
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            resizeMode: 'contain',
            marginHorizontal: 10,
            height: 20,
            width: 20,
          }}>
         
        </TouchableOpacity>
      </View>
      <View style={Style.loadingCloseContainer}>
        <ActivityIndicator animating={loading} size={20} />
      </View>

      {/* <FlatList
        style={[Style.listContainer, Style.cardStyle]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={listData}
        renderItem={renderItems}
      /> */}
    </View>
  );
});

SearchBar.propTypes = {
  customContainerStyle: ViewPropTypes.style,
  customInputStyle: PropTypes.object,
  listData: PropTypes.array,
  loading: PropTypes.bool,
  onPressListItem: PropTypes.func,
};

SearchBar.defaultProps = {
  customInputStyle: Style.defaultInput,
  listData: [],
  loading: false,
  onPressListItem: () => {},
  placeholder: 'Search',
};

export default memo(SearchBar);

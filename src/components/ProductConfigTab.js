import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { COLORS, FONTS} from 'assets/index';
import { useTranslation } from 'react-i18next';


const ProductConfigTab = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch,
  selectionColor,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);
  const updatedSwitchData = val => {
    setSelectionMode(val);
    onSelectSwitch(val);
  };
  const { t, i18n } = useTranslation();

  return (
    <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <View style={{ width: '25%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(1)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 1 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option1}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 1 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '25%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(2)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 2 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option2}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 2 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>
    
      <View style={{ width: '25%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(3)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 3 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option3}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 3 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>

      <View style={{ width: '25%' }}>
        <TouchableOpacity
          style={{ width: '100%' }}
          activeOpacity={1}
          onPress={() => updatedSwitchData(4)}>
          <Text
            style={[
              styles.tab,
              { color: selectionMode == 4 ? COLORS.black : COLORS.darkGrey },
            ]}>
            {option4}
          </Text>
          <View
            style={[
              styles.line,
              { backgroundColor: selectionMode == 4 ? COLORS.red : '#F2F2F2' },
            ]}></View>
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default ProductConfigTab;

const styles = StyleSheet.create({
  tab: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 13,
    fontFamily: FONTS.normal,
    alignSelf: 'center',
  },
  line: {
    marginTop: 7,
    height: 3,
    width: '100%',
  },
});
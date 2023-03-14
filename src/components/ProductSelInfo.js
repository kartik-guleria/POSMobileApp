import { COLORS, FONTS, ComIcons, DEVICE } from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import ScanQRModal from 'components/ScanQRModal';
import SearchBar from 'components/SearchBar';
import { PRODUCTS } from 'data/dummyData';
import React, { useState } from 'react';

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
import { useTranslation } from 'react-i18next';

const ProductSelInfo = props => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
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
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
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
                    <View style={{ marginRight: 3 }}>{ComIcons.plusBlack}</View>
                    {ComIcons.userTransparent}
                </View>
            </View>
        </View>
    )
}
export default ProductSelInfo;

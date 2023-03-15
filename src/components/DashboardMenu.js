import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import MainStyle from 'styleSheet/MainStyle';
import { ComIcons, COLORS, FONTS } from 'assets/index';
import { useTranslation } from 'react-i18next';
const { height, width } = Dimensions.get('window');

const DashBoardMenu = props => {
    const { t, i18n } = useTranslation();
    const SERVICES = [
        { id: '1', title: t('common:dineIn'), image: ComIcons.dineIn },
        { id: '2', title: t('common:newOrderSmall'), image: ComIcons.newOrder },
        { id: '3', title: t('common:viewOrders'), image: ComIcons.viewOrders },
        { id: '4', title: t('common:todaySpecial'), image: ComIcons.todaySpecial },
        { id: '5', title: t('common:menuUpdates'), image: ComIcons.menuUpdates },
        { id: '6', title: t('common:orderStatus'), image: ComIcons.orderStatus },
    ];
    const renderServiceGridItem = itemData => {
        return (
            <View style={{ margin: 3, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.7} style={styles.productItem} onPress={() => {
                    if (itemData.item.id == '1') {
                        props.navigation.navigate('SelectTableScreen', {
                            serviceId: itemData.item.id,
                        });
                    }
                    else if (itemData.item.id == '2') {
                        props.navigation.navigate('ProductSelection', {
                            serviceId: itemData.item.id,
                        });
                    }
                    else if (itemData.item.id == '3') {
                        props.navigation.navigate('Orders', {
                            serviceId: itemData.item.id,
                        });
                    }
                    else if (itemData.item.id == '4') {
                        props.navigation.navigate('TodaySpecial', {
                            serviceId: itemData.item.id,
                        });
                    }
                    else if (itemData.item.id == '5') {
                        props.navigation.navigate('MenuUpdates', {
                            serviceId: itemData.item.id,
                        });
                    }
                    else if (itemData.item.id == '6') {
                        props.navigation.navigate('OrderStatus', {
                            serviceId: itemData.item.id,
                        });
                    }
                }}>
                    <View
                        style={styles.container}>{itemData.item.image}</View>
                </TouchableOpacity>
                <Text style={styles.itemText}>
                    {itemData.item.title}
                </Text>
                {itemData.item.id === '5' ? <View style={{ borderRadius: 12.5, width: 25, height: 25, backgroundColor: COLORS.red, position: 'absolute', right: 4, top: 4 }}>
                    <Text style={{ textAlign: 'center', margin: 3, fontSize: 16, fontWeight: '500', fontFamily: FONTS.normal, lineHeight: 18.75, color: COLORS.white }}>6</Text></View> : null}
            </View>
        );
    };
    return (
        <SafeAreaView style={MainStyle.safeAreaContainerLight}>
            <FlatList style={{ marginBottom: 50 }}
                bounces={false}
                numColumns={1}
                showsVerticalScrollIndicator={false}
                data={SERVICES}
                scrollEnabled={true}
                renderItem={renderServiceGridItem}
            />
        </SafeAreaView>
    );
}

export default DashBoardMenu;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        elevation: 8,
        marginBottom: Platform.OS === 'android' ? 20 : 0,
        marginHorizontal: Platform.OS === 'android' ? 16 : 0,
        // padding: 15,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },


    productItem: {
        marginTop: 16,
        marginLeft: 10,
        marginRight: 10,
        height: 100,
        width: 100,
        backgroundColor: COLORS.white,

    },
    itemImage: {
        justifyContent: 'flex-end',
        alignSelf: 'center',
        resizeMode: 'contain',
        margin: 10,
    },
    itemText: {
        alignContent: 'center',
        fontSize: 18,
        color: COLORS.black,
        fontFamily: FONTS.medium,
        fontStyle: 'normal',
        fontWeight: '500',
        paddingBottom: 15,
        marginTop: 10,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        elevation: 8,
        marginBottom: Platform.OS === 'android' ? 20 : 0,
        marginLeft: Platform.OS === 'android' ? 16 : 0,
        marginRight: Platform.OS === 'android' ? 16 : 0,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        alignItems: 'center',
    },

});

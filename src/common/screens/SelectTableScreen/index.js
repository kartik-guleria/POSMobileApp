import React, { useState } from 'react';
import { View, SafeAreaView, Image, FlatList, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { COLORS, FONTS, ComIcons } from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import MainStyle from 'styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import MyButton from 'components/MyButton';
import styles from './style';
// import { ScrollView } from 'react-n ative-gesture-handler';
import { useTranslation } from 'react-i18next';

const screenHeight = Dimensions.get('window').height
const SelectTableScreen = props => {
    const { t, i18n } = useTranslation();
    const floorArray = [{ name: t('common:mainFloor') }, { name: t('common:private1') }, { name:  t('common:private2') }, { name:  t('common:private3') }]
    const singleTableArray = [{ Table: "T1", Booked: true }, { Table: "T2", Booked: false }, { Table: "T3", Booked: true }, { Table: "T4", Booked: false }, { Table: "T5", Booked: false }, { Table: "T6", Booked: false }]
    const doubleTableArray = [{ Table: "T7", Booked: true }, { Table: "T8", Booked: false }, { Table: "T9", Booked: false }, { Table: "T10", Booked: false }, { Table: "T11", Booked: true }, { Table: "T12", Booked: false }]
    const [status, setStatus] = useState('CLOSED');
    const [selectedFloor, setSelectedFloor] = useState("Main Floor");
    const [selectedTable, setSelectedTable] = useState([]);
    function tableExists(name) {
        return selectedTable.some(function (el) {
            return el === name;
        });
    }

    // const onTableSelect = (table) => {
    //     setSelectedTable(selectedTable => [...selectedTable, table])
    //     alert(selectedTable);
    // };
    const floorItem = items => {
        return (
            <TouchableOpacity
                style={MainStyle.menuItem}
                onPress={() => {
                    setSelectedFloor(items.item.name);
                }}>
                <View
                    style={[styles.topBarView, {
                        backgroundColor: selectedFloor == items.item.name ? '#E1251B' : 'white',
                    }]}>
                    <Text
                        style={[styles.topBarText, {
                            color: selectedFloor == items.item.name ? 'white' : COLORS.black,
                        }]}>

                        {items.item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <SafeAreaView style={MainStyle.safeAreaContainer}>
                <NavigationHeader
                    title={t('common:selectTable')}
                    displayBtn={true}
                    navigation={props.navigation}
                    onPress={() => props.navigation.openDrawer()}
                />
                <View style={{
                    backgroundColor: 'white'
                }}>
                    <View>
                        <View style={{ marginTop: 30, height: 60 }}>
                            <FlatList
                                bounces={false}
                                data={floorArray}
                                horizontal
                                renderItem={floorItem}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={{ height: screenHeight - 200 }}>
                        <ScrollView>
                                <View style={{ flex: 1 }}>
                            {selectedTable.length > 0 ?
                                <View style={{ marginLeft: 16, marginRight: 16 }}>
                                    <UnderlineView />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 8, marginTop: 8, }}>
                                                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>{selectedTable.length} {ComIcons.blackMergeArrow} T9</Text>
                                        <TouchableOpacity
                                            // onPress={ }
                                            style={{ height: 41, justifyContent: 'center', backgroundColor: COLORS.grey }}>
                                            <Text style={styles.buttonStyle}>
                                            {t('common:cancel')}
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            // onPress={ }
                                            style={{ height: 41, justifyContent: 'center', backgroundColor: COLORS.red }}>
                                            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                                        <View style={{ alignSelf: 'center' }}>{ComIcons.whiteMergeArrow}</View>
                                                <Text style={[styles.buttonStyle, { marginLeft: 5 }]}>
                                                {t('common:merge')}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <UnderlineView />
                                </View>
                                : null}
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 10, marginTop: 20 }} >
                                <View style={{ width: '30%', backgroundColor: 'white' }}>
                                    <FlatList
                                        bounces={false}
                                        data={singleTableArray}
                                        Vertical
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                disabled={item.Booked}
                                                onPress={() =>
                                                    tableExists(item.Table) ? setSelectedTable(current =>
                                                        current.filter(selectedTable => {
                                                            // 👇️ remove object that has id equal to 2
                                                            return selectedTable != item.Table;
                                                        }),
                                                    ) : setSelectedTable(selectedTable => [...selectedTable, item.Table])
                                                    // alert(selectedTable)
                                                }>
                                                <View style={{ margin: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                                                    {item.Booked == true ? ComIcons.singleBookedTable : ComIcons.singleTable}
                                                    <Text style={[styles.tableName, {
                                                        left: '40%',
                                                        color: item.Booked == true ? 'white' : 'black',
                                                    }]}>{item.Table}</Text>
                                                    {item.Booked ? null :
                                                        <View style={{ top: -5, right: '17%', position: 'absolute' }}>{tableExists(item.Table) ? ComIcons.tickRedCircle : ComIcons.emptyGreyCircle}</View>
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                <View style={{ width: '32%', backgroundColor: '#dddddd', borderStyle: 'dotted', borderColor: COLORS.red, borderWidth: 1 }}></View>
                                <View style={{ width: '38%', backgroundColor: 'white' }}>
                                    <FlatList
                                        bounces={false}
                                        data={doubleTableArray}
                                        Vertical
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                disabled={item.Booked}
                                                onPress={() =>
                                                    tableExists(item.Table) ? setSelectedTable(current =>
                                                        current.filter(selectedTable => {
                                                            // 👇️ remove object that has id equal to 2
                                                            return selectedTable != item.Table;
                                                        }),
                                                    ) : setSelectedTable(selectedTable => [...selectedTable, item.Table])
                                                    // alert(selectedTable)
                                                }>
                                                <View style={{ margin: 8, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>{item.Booked == true ? ComIcons.doubleBookedTable : ComIcons.doubleTable}<Text
                                                    style={[styles.tableName, {
                                                        left: '40%',
                                                        color: item.Booked == true ? 'white' : 'black',
                                                    }]}>{item.Table}</Text>
                                                    {item.Booked ? null :
                                                        <View style={{ top: -5, right: '8%', position: 'absolute' }}>{tableExists(item.Table) ? ComIcons.tickRedCircle : ComIcons.emptyGreyCircle}</View>
                                                    }
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                    </View>
                            </View>
                            </ScrollView>
                        </View>
                    </View>
                </View >
            </SafeAreaView >
        </View >
    )
}

export default SelectTableScreen;

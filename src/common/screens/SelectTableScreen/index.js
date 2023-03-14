import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { COLORS, FONTS, ComIcons, DEVICE } from 'assets/index';
import NavigationHeader from 'components/NavigationHeader';
import MainStyle from '../../../styleSheet/MainStyle';
import UnderlineView from 'components/underlineView';
import styles from './style';
import { useTranslation } from 'react-i18next';
import DashBoardMenu from '../../../components/DashboardMenu';

const screenHeight = Dimensions.get('window').height;
const SelectTableScreen = props => {
  const {t, i18n} = useTranslation();
  const floorArray = [
    {name: t('common:mainFloor')},
    {name: t('common:private1')},
    {name: t('common:private2')},
    {name: t('common:private3')},
  ];
  const singleTableArray = [
    {Table: 'T1', Booked: true},
    {Table: 'T2', Booked: false},
    {Table: 'T3', Booked: true},
    {Table: 'T4', Booked: false},
    {Table: 'T5', Booked: false},
    { Table: 'T6', Booked: false },
    { Table: 'T7', Booked: false },
    { Table: 'T8', Booked: false },
    { Table: 'T9', Booked: false },
  ];
  const doubleTableArray = [
    {Table: 'T7', Booked: true},
    {Table: 'T8', Booked: false},
    {Table: 'T9', Booked: false},
    {Table: 'T10', Booked: false},
    {Table: 'T11', Booked: true},
    { Table: 'T12', Booked: false },
    { Table: 'T13', Booked: false },
    { Table: 'T14', Booked: false },
    { Table: 'T15', Booked: false },
  ];
  const [status, setStatus] = useState('CLOSED');
  const [selectedFloor, setSelectedFloor] = useState('Main Floor');
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
      <View>
      <TouchableOpacity
        style={[
          styles.topBarView,
            {
              marginHorizontal: DEVICE == 'mobile' ? 20 : 40,
            backgroundColor:
              selectedFloor == items.item.name ? '#E1251B' : 'white',
          },
        ]}
        onPress={() => {
          setSelectedFloor(items.item.name);
        }}>
        <Text
            style={{
              alignSelf: 'center',
              marginHorizontal: DEVICE == 'mobile' ? 20 : '20%',
            color: selectedFloor == items.item.name ? 'white' : COLORS.black,
              fontSize: DEVICE == 'tab' ? 15 : 12,
            fontWeight: '500',
            textTransform: 'uppercase',
            fontFamily: FONTS.medium,
          }}>
          {items.item.name}
        </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={MainStyle.safeAreaContainerLight}>
      <NavigationHeader
        title={t('common:selectTable')}
        displayBtn={true}
        navigation={props.navigation}
        onPress={() => props.navigation.openDrawer()}
      />
      <View style={{ flexDirection: 'row' }} >
        {DEVICE == 'tab' &&
          <View style={{ width: '13%', justifyContent: 'center', alignContent: 'center', borderRightWidth: 1, borderRightColor: '#dddddd' }}>
            <DashBoardMenu navigation={props.navigation} />
          </View>
        }
        <View>
      <View style={{marginTop: 20}}>
            <FlatList 
          bounces={false}
          data={floorArray}
          horizontal
          renderItem={floorItem}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
        />
      </View>
          {/* <ScrollView style={{ height: '100%' }}> */}
          {DEVICE == 'mobile' ?
            <View >
              {selectedTable.length > 0 ? (
                <View style={{ marginHorizontal: 16 }}>
                  <UnderlineView />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginBottom: 8,
                      marginTop: 8,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontFamily: FONTS.bold,
                        color: COLORS.black,
                        fontSize: 16,
                      }}>
                      {selectedTable.length} {ComIcons.blackMergeArrow} T9
                    </Text>
                    <TouchableOpacity
                      // onPress={ }
                      style={{
                        height: 41,
                        justifyContent: 'center',
                        backgroundColor: COLORS.grey,
                      }}>
                      <Text style={styles.buttonStyle}>{t('common:cancel')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      // onPress={ }
                      style={{
                        height: 41,
                        justifyContent: 'center',
                        backgroundColor: COLORS.red,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 10,
                          alignItems: 'center',
                        }}>
                        {ComIcons.whiteMergeArrow}
                        <Text style={[styles.buttonStyle, { marginLeft: 5 }]}>
                          {t('common:merge')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <UnderlineView />
                </View>
              ) : null}
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  margin: 10,
                  marginTop: 20,
                }}>
                <View style={{ width: '30%', backgroundColor: 'white' }}>
                  <FlatList

                    bounces={false}
                    data={singleTableArray}
                    Vertical
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        disabled={item.Booked}
                        onPress={
                          () =>
                            tableExists(item.Table)
                              ? setSelectedTable(current =>
                              current.filter(selectedTable => {
                                // 👇️ remove object that has id equal to 2
                                return selectedTable != item.Table;
                              }),
                            )
                              : setSelectedTable(selectedTable => [
                              ...selectedTable,
                              item.Table,
                            ])
                        // alert(selectedTable)
                        }>
                        <View
                          style={{
                            margin: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          {item.Booked == true
                            ? ComIcons.singleBookedTable
                            : ComIcons.singleTable}
                          <Text
                            style={[
                              styles.tableName,
                              {
                                left: '40%',
                                color: item.Booked == true ? 'white' : 'black',
                              },
                            ]}>
                            {item.Table}
                          </Text>
                          {item.Booked ? null : (
                            <View
                              style={{
                                top: -5,
                                right: '17%',
                                position: 'absolute',
                              }}>
                              {tableExists(item.Table)
                                ? ComIcons.tickRedCircle
                                : ComIcons.emptyGreyCircle}
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                <View
                  style={{
                    width: '32%',
                    backgroundColor: '#dddddd',
                    borderStyle: 'dotted',
                    borderColor: COLORS.red,
                    borderWidth: 1,
                  }}></View>
                <View style={{ width: '38%', backgroundColor: 'white' }}>
                  <FlatList
                    bounces={false}
                    data={doubleTableArray}
                    Vertical
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        disabled={item.Booked}
                        onPress={
                          () =>
                            tableExists(item.Table)
                              ? setSelectedTable(current =>
                              current.filter(selectedTable => {
                                // 👇️ remove object that has id equal to 2
                                return selectedTable != item.Table;
                              }),
                            )
                              : setSelectedTable(selectedTable => [
                              ...selectedTable,
                              item.Table,
                            ])
                        // alert(selectedTable)
                        }>
                        <View
                          style={{
                            margin: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          {item.Booked == true
                            ? ComIcons.doubleBookedTable
                            : ComIcons.doubleTable}
                          <Text
                            style={[
                              styles.tableName,
                              {
                                left: '40%',
                                color: item.Booked == true ? 'white' : 'black',
                              },
                            ]}>
                            {item.Table}
                          </Text>
                          {item.Booked ? null : (
                            <View
                              style={{
                                top: -5,
                                right: '8%',
                                position: 'absolute',
                              }}>
                              {tableExists(item.Table)
                                ? ComIcons.tickRedCircle
                                : ComIcons.emptyGreyCircle}
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
            :
            <View >
              {selectedTable.length > 0 ? (
                <View style={{ marginHorizontal: 16 }}>
                  <UnderlineView />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginBottom: 8,
                      marginTop: 8,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontFamily: FONTS.bold,
                        color: COLORS.black,
                        fontSize: 16,
                      }}>
                      {selectedTable.length} {ComIcons.blackMergeArrow} T9
                    </Text>
                    <TouchableOpacity
                      // onPress={ }
                      style={{
                        height: 41,
                        justifyContent: 'center',
                        backgroundColor: COLORS.grey,
                      }}>
                      <Text style={styles.buttonStyle}>{t('common:cancel')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      // onPress={ }
                      style={{
                        height: 41,
                        justifyContent: 'center',
                        backgroundColor: COLORS.red,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginLeft: 10,
                          alignItems: 'center',
                        }}>
                        {ComIcons.whiteMergeArrow}
                        <Text style={[styles.buttonStyle, { marginLeft: 5 }]}>
                          {t('common:merge')}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <UnderlineView />
                </View>
              ) : null}
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  margin: 50,
                  marginTop: 50,
                }}>
                <View style={{ backgroundColor: 'white' }}>
                  <FlatList
                    bounces={false}
                    data={doubleTableArray}
                    horizontal
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        disabled={item.Booked}
                        onPress={
                          () =>
                            tableExists(item.Table)
                              ? setSelectedTable(current =>
                                current.filter(selectedTable => {
                                  // 👇️ remove object that has id equal to 2
                                  return selectedTable != item.Table;
                                }),
                              )
                              : setSelectedTable(selectedTable => [
                                ...selectedTable,
                                item.Table,
                              ])
                          // alert(selectedTable)
                        }>
                        <View
                          style={{
                            margin: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          {item.Booked == true
                            ? ComIcons.tabDoubleActiveTable
                            : ComIcons.tabDoubleTable}
                          <Text
                            style={[
                              styles.tableName,
                              {
                                left: '40%',
                                color: item.Booked == true ? 'white' : 'black',
                              },
                            ]}>
                            {item.Table}
                          </Text>
                          {item.Booked ? null : (
                            <View
                              style={{
                                top: -5,
                                right: '-5%',
                                position: 'absolute',
                              }}>
                              {tableExists(item.Table)
                                ? ComIcons.tickRedCircle
                                : ComIcons.emptyGreyCircle}
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />

                </View>
                <View
                  style={{
                    height: '32%',
                    backgroundColor: '#dddddd',
                    borderStyle: 'dotted',
                    borderColor: COLORS.red,
                    borderWidth: 1,
                  }}></View>
                <View style={{ height: '42%', backgroundColor: 'white' }}>
                  <FlatList
                    bounces={false}
                    data={singleTableArray}
                    horizontal
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        disabled={item.Booked}
                        onPress={
                          () =>
                            tableExists(item.Table)
                              ? setSelectedTable(current =>
                                current.filter(selectedTable => {
                                  // 👇️ remove object that has id equal to 2
                                  return selectedTable != item.Table;
                                }),
                              )
                              : setSelectedTable(selectedTable => [
                                ...selectedTable,
                                item.Table,
                              ])
                          // alert(selectedTable)
                        }>
                        <View
                          style={{
                            margin: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                          }}>
                          {item.Booked == true
                            ? ComIcons.tabActiveSingleTable
                            : ComIcons.tabSingleTable}
                          <Text
                            style={[
                              styles.tableName,
                              {
                                left: '41%',
                                color: item.Booked == true ? 'white' : 'black',
                              },
                            ]}>
                            {item.Table}
                          </Text>
                          {item.Booked ? null : (
                            <View
                              style={{
                                top: -5,
                                right: '-5%',
                                position: 'absolute',
                              }}>
                              {tableExists(item.Table)
                                ? ComIcons.tickRedCircle
                                : ComIcons.emptyGreyCircle}
                            </View>
                          )}
                        </View>
                      </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>

            </View>
          }
          {/* </ScrollView> */}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectTableScreen;

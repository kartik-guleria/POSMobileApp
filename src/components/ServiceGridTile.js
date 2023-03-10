import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
Dimensions,
} from 'react-native';
import {COLORS, FONTS} from 'assets/index';
import {useTranslation} from 'react-i18next';

const ServiceGridTile = props => {
  return (
    <View style={{margin:3}}>
      <TouchableOpacity style={styles.productItem} onPress={props.onSelect}>
      <View
        style={styles.container}>{props.image}</View>
    </TouchableOpacity>
    <Text
      style={styles.itemText}>
        {props.title}
      </Text>
     { props.menuIndex === '5' ? <View style={{borderRadius:12.5,width:25,height:25,backgroundColor:COLORS.red,position:'absolute',right:4,top:4}}><Text style={{textAlign:'center',margin:3,fontSize:16,fontWeight:'500',fontFamily:FONTS.normal,lineHeight:18.75,color:COLORS.white}}>6</Text></View>: null}
      </View>
    // <View
    //   style={{
    //     // flex: 1,
    //     // height: Dimensions.get('window').height / 3.7,
    //     // backgroundColor: 'grey',
    //     // borderColor: 'black',
    //     // borderWidth: 1,
    //   }}>
    //   <TouchableOpacity
    //     activeOpacity={0.7}
    //     style={[styles.productItem]}
    //     onPress={props.onSelect}>
        // <View style={styles.container}>{props.image}</View>
        // {props.menuIndex === '5' ? (
        //   <View
        //     style={{
        //       borderRadius: 12.5,
        //       width: 25,
        //       height: 25,
        //       backgroundColor: COLORS.red,
        //       position: 'absolute',
        //       right: 4,
        //       top: 4,
        //     }}>
        //     <Text
    //           style={{
    //             textAlign: 'center',
    //             margin: 3,
    //             fontSize: 16,
    //             fontWeight: '500',
    //             fontFamily: FONTS.normal,
    //             lineHeight: 18.75,
    //             color: COLORS.white,
    //           }}>
    //           6
    //         </Text>
    //       </View>
    //     ) : null}
    //   </TouchableOpacity>
    //   <Text style={[styles.itemText]}>{props.title}</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  // productItem: {
  //   // flex: 1,
  //   marginVertical: 8,
  //   marginHorizontal: 10,
  //   // height: Dimensions.get('window').height / 4.3,
  //   borderRadius: 5,
  //   shadowColor: '#2B2C2D',
  //   shadowOpacity: 0.25,
  //   shadowOffset: {width: 0, height: 0},
  //   shadowRadius: 2,
  //   elevation: 4,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: 'blue',
  // },
  // itemText: {
  //   fontSize: 20,
  //   fontFamily: FONTS.normal,
  //   fontWeight: '500',
  //   marginTop: 15,
  //   textAlign: 'center',
  // },

  container: {
    flex : 1,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 8,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
    marginLeft: Platform.OS === 'android' ? 16 : 0,
    marginRight: Platform.OS === 'android' ? 16 : 0,
    padding: 15,
    justifyContent:'center',
    backgroundColor:COLORS.white,
    alignItems: 'center',
  },


  productItem: {
    marginTop: 16,
    marginLeft: 10,
    marginRight: 10,
    height:163,
    width:163,
    backgroundColor: COLORS.white,

  },
  itemImage: {
    justifyContent: 'flex-end',
    width: 85,
    height: 85,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 10,
  },
  itemText: {
    alignContent: 'center',
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.normal,
    fontStyle: 'normal',
    fontWeight: '500',
    paddingBottom: 15,
    marginTop: 10,
    textAlign:'center'
  },
  container: {
    flex : 1,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    elevation: 8,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
    marginLeft: Platform.OS === 'android' ? 16 : 0,
    marginRight: Platform.OS === 'android' ? 16 : 0,
    padding: 15,
    justifyContent:'center',
    backgroundColor:COLORS.white,
    alignItems: 'center',
  },

});

export default ServiceGridTile;

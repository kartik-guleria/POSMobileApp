import * as React from 'react';
import { COLORS, FONTS } from 'assets/theme';
import ModalHeader from 'components/ModalHeader';
import MyButton from 'components/MyButton';
import UnderlineView from 'components/underlineView';
import { MERGE_TABLE_INFO, MERGE_TABLE_OPTIONS } from 'data/dummyData';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useTranslation } from 'react-i18next';


const MergeTableModal = props => {
  const { t, i18n } = useTranslation();

 
  const renderInfo = infoData => {
    return (
      <View style={{flexDirection: 'row',marginBottom:16}}>
        <Text style={[styles.infoText,{fontWeight:'500'}]}>{infoData.item.title}</Text>
        <Text style={[styles.infoText,{fontWeight:'400'}]}>{infoData.item.info}</Text>
        {infoData.item.image}
      </View>
    );
  };
  const renderFooter = () =>{
    const renderOptions = optionData => {
      return(
        <TouchableOpacity style= {{width:'31%',marginHorizontal:5,marginTop:23,backgroundColor:COLORS.red,alignItems:'center',justifyContent:'center',height:100}}>
          <Text style={{fontSize:14,fontFamily:FONTS.normal,fontWeight:'700',lineHeight:15.47,color:COLORS.white,textAlign:'center'}}>
            {optionData.item.title}
          </Text>
        </TouchableOpacity>
      );
    };
    return(
      <View>
      <UnderlineView/>
      <FlatList
          data={MERGE_TABLE_OPTIONS}
          renderItem={renderOptions}
          keyExtractor={item => item.id}
          bounces={false}
          numColumns={3}
          contentContainerStyle={{}}
        />
        <View style={{marginHorizontal:-16,marginTop:30}}><MyButton title={'UNDO MERGE'} backColor={'white'} /></View>
      </View>
    );
  }
  return (
      <><ModalHeader title={'T3, T9'} /><View style={{}}>
      <FlatList
        data={MERGE_TABLE_INFO}
        renderItem={renderInfo}
        ListFooterComponent={renderFooter}
        keyExtractor={item => item.id}
        bounces={false}
        contentContainerStyle={{ marginTop: 17, marginHorizontal: 9 }} />
    </View></>
  );
};
export default MergeTableModal;

const styles = StyleSheet.create({
infoText:{fontSize:18,fontFamily:FONTS.normal,lineHeight:19},
});

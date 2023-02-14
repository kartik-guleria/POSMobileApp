import NavigationHeader from 'components/NavigationHeader';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TextField from 'components/TextField';
import {COLORS} from 'assets/theme';
import MyButton from 'components/MyButton';
import styles from './style';
import MainStyle from 'styleSheet/MainStyle';
import {useTranslation} from 'react-i18next';
import Modal from 'react-native-modal';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {ComIcons} from '../../../assets';
FormData.prototype[Symbol.toStringTag] = 'FormData';

const MyProfile = props => {
  const {t, i18n} = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageProfile, setImage] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [fileType, setFileType] = useState('');
  const [formData, setFormData] = useState({});
  const [paramData, setParamData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const toggleModal = () => {
    return setModalVisible(true);
  };

  const takePhoto = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert('cancelled');
      } else if (response.errorCode == 'permission') {
        Alert.alert('permission not found');
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not Found');
      }
      // else if (response.assets[0].fileSize > 2097152) {
      //   Alert.alert('MAX SIZE', [{ text: 'Ok' }]
      //   );
      // }
      else {
        setImage(response.assets[0].uri);
        setFileName(response.assets[0]);
        setFileUrl(response.assets[0].uri);
        setFileType(response.assets[0].type);
      }
    });
  };

  const uploadImage = async () => {
    launchImageLibrary(options, images => {
      console.log(images.assets[0].uri);
      console.log(images.assets[0].base64);
      const formData = new FormData();
      // formData.append('image_path', images.assets[0]);
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('image_path', {
        uri:
          Platform.OS === 'android'
            ? images.assets[0].uri
            : images.assets[0].uri.replace('file://', ''),
        type: images.assets[0].type,
        name: images.assets[0].fileName,
        base64: images.assets[0].base64,
      });
      setFormData(formData);
      setImage(images.assets[0].uri);
      // alert(images.assets[0].uri)
    });
  };

  const removeImage = () => {
    setImage('');
  };

  return (
      <SafeAreaView style={MainStyle.safeAreaContainerLight}>
        <NavigationHeader
          title={'My Profile'}
          displayBtn={'dash'}
          navigation={props.navigation}
          pop={false}
          onPress={() => props.navigation.openDrawer()}
        />
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View>
            <TouchableOpacity style={{}} onPress={() => toggleModal()}>
              <Image
                style={styles.image}
                source={require('assets/images/johnDoe.png')}
              />
            </TouchableOpacity>
            <View style={{marginTop: 10}}>
              {/* <TouchableOpacity
              style={{}}
              onPress={() => toggleModal()}>
                { userData.image_path == null ? <Image
                style={{}}
                source={{ uri: !imageProfile ? userData.avatar : imageProfile }}
              /> : <Image
                style={{}}
                source={{ uri: `${Config.BASE_URL}/uploads/${userData.image_path}` }}
                // source={{ uri: !imageProfile ? userData.image_path : imageProfile }}
              /> 
  }
            </TouchableOpacity> */}
            </View>
            <TextField
              title={'Name'}
              backgroundColor={'#0000000D'}
              placeholder={'John'}
              onChangeText={value => {
                setParamData({...paramData, firstName: value});
              }}
            />
            <TextField
              title={'Last Name'}
              backgroundColor={'#0000000D'}
              placeholder={'Doe'}
              onChangeText={value => {
                setParamData({...paramData, lastName: value});
              }}
            />
            <TextField
              title={'Email'}
              backgroundColor={'#0000000D'}
              placeholder={'Johndoe@mail.com'}
              onChangeText={value => {
                setParamData({...paramData, email: value});
              }}
            />
            <Text style={styles.title}>Change Password</Text>
            <TextField
              title={'Old Password'}
              placeholder={'**********'}
              secureText={true}
            />
            <TextField
              title={'New Password'}
              placeholder={'**********'}
              secureText={true}
            />
            <TextField
              title={'Confirm Password'}
              placeholder={'**********'}
              secureText={true}
            />
            <View style={{marginTop: 20}}>
              <MyButton title={'UPDATE'} backColor="grey" />
            </View>
            <Modal
              isVisible={isModalVisible}
              onSwipeComplete={() => setModalVisible(false)}
              swipeDirection="down"
              backdropOpacity={0.7}
              backgroundColor="#FFFFFF"
              style={{
                position: 'absolute',
                top: '72%',
                height: 189,
                backgroundColor: COLORS.white,
                marginHorizontal: 16,
                width: '100%',
                marginLeft: 0,
              }}>
              <View style={{alignSelf: 'center', marginBottom: 12}}>
                {ComIcons.flatIndicator}
              </View>
              <MyButton title={'Take Photo'} onSelect={() => takePhoto()} />
              <View style={{marginHorizontal: 16, height: 1}}></View>
              <MyButton title={'Upload Photo'} onSelect={() => uploadImage()} />
              <View style={{marginHorizontal: 16, height: 1}}></View>
              <MyButton title={'Remove Photo'} onSelect={() => removeImage()} />
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
};

export default MyProfile;

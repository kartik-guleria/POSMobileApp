import React from 'react';
import { SafeAreaView,View } from 'react-native';
import { ComIcons } from 'assets/index';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
import NavigationHeader from 'components/NavigationHeader';

const ScanQR = props => {
    const { t, i18n } = useTranslation();

    return(
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
    <NavigationHeader title={t('common:scanQR')} navigation={props.navigation}/>
    <View>
        {ComIcons.scanQR}
    </View>
</SafeAreaView>
    );
}
export default ScanQR;
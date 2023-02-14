import React from 'react';
import { SafeAreaView,View } from 'react-native';
import { ComIcons,COLORS } from 'assets/index';
import style from './style';
import MainStyle from 'styleSheet/MainStyle';
import { useTranslation } from 'react-i18next';
import NavigationHeader from 'components/NavigationHeader';

const ScanQR = props => {
    const { t, i18n } = useTranslation();

    return(
<SafeAreaView style={MainStyle.safeAreaContainerLight}>
    <NavigationHeader title={t('common:scanQR')}/>
    <View>
        {ComIcons.scanQR}
    </View>
</SafeAreaView>
    );
}
export default ScanQR;
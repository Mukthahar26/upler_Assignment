import React from 'react';
import {View, ViewStyle} from 'react-native';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../baseComponents/AppButton';
import {GoBackIcon} from '../../../utilities/iconPaths';

import {RootStackParams} from '../../../navigators/rootNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PropsType = {
  headerName?: string;
  isBackRequired?: boolean;
  headerStyle: ViewStyle;
};

const ScreenHeader = ({headerName, isBackRequired, headerStyle}: PropsType) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, headerStyle]}>
      <View style={styles.subContainer}>
        {isBackRequired && navigation.canGoBack() && (
          <AppButton onPress={goBack}>
            <GoBackIcon />
          </AppButton>
        )}
        <AppText style={styles.headerName}>{headerName}</AppText>
      </View>
    </View>
  );
};

export default ScreenHeader;

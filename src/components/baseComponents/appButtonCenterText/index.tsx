import React from 'react';
import AppButton from '../AppButton';
import AppText from '../AppText';
import styles from './styles';
import {ViewStyle} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
};

const AppButtonCenterText = ({label, onPress, buttonStyle}: Props) => {
  return (
    <AppButton
      style={[styles.button, buttonStyle] as ViewStyle}
      onPress={onPress}>
      <AppText style={styles.label}>{label}</AppText>
    </AppButton>
  );
};

export default AppButtonCenterText;

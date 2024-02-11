import React from 'react';
import AppButton from '../AppButton';
import AppText from '../AppText';
import styles from './styles';
import {TextStyle, ViewStyle} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
};

const AppButtonCenterText = ({
  label,
  onPress,
  buttonStyle,
  labelStyle,
}: Props) => {
  return (
    <AppButton
      style={[styles.button, buttonStyle] as ViewStyle}
      onPress={onPress}>
      <AppText style={[styles.label, labelStyle]}>{label}</AppText>
    </AppButton>
  );
};

export default AppButtonCenterText;

import React from 'react';
import {View} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

type HeadingWithDownTextProps = {
  heading: string;
  value: string;
};

const HeadingWithText = ({heading, value}: HeadingWithDownTextProps) => {
  return (
    <View>
      <AppText style={[styles.label, styles.title]}>{heading}</AppText>
      <AppText style={styles.label}>{value}</AppText>
    </View>
  );
};

export default HeadingWithText;

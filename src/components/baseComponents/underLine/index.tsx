import React from 'react';
import {Image, ImageSourcePropType, View, ViewStyle} from 'react-native';
import styles from './styles';

type Props = {
  style?: ViewStyle;
  uri?: string;
};
const UnderLine = ({style, uri}: Props) => {
  return (
    <>
      <View style={[styles.underline, style]}>
        {uri && (
          <Image source={uri as ImageSourcePropType} style={styles.icon} />
        )}
      </View>
    </>
  );
};

export default UnderLine;

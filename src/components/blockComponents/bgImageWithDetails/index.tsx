import React from 'react';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import AppText from '../../baseComponents/AppText';

type Props = {
  url: string;
  heading: string;
  description: string;
};

const BGImageWithDetails = ({url, heading, description}: Props) => {
  return (
    <ImageBackground source={{uri: url}} style={styles.container}>
      <View style={styles.overlay}>
        <AppText style={styles.heading}>{heading}</AppText>
        <AppText style={styles.desc}>{description}</AppText>
      </View>
    </ImageBackground>
  );
};

export default BGImageWithDetails;

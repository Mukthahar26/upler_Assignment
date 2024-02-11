import {ActivityIndicator} from 'react-native';
import React from 'react';
import colorThemes from '../../../themes/colorsThemes';

type Props = {
  color?: string;
};
const Loader = ({color}: Props) => {
  return <ActivityIndicator color={color} size={'large'} />;
};

Loader.defaultProps = {
  color: colorThemes.brandColor,
};

export default Loader;

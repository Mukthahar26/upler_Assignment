import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(40),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: colorThemes.brandColor,
  },
  label: {
    color: colorThemes.brandColor,
  },
});

export default styles;

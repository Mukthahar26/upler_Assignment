import {StyleSheet} from 'react-native';
import colorThemes from '../../../themes/colorsThemes';
import measureValues from '../../../themes/measureValues';

const styles = StyleSheet.create({
  textStyle: {
    color: colorThemes.black,
    fontSize: measureValues.fontRegular,
    includeFontPadding: false,
    fontFamily: 'poppins_regular',
    letterSpacing: 1,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';

const styles = StyleSheet.create({
  textField: {
    color: colorThemes.black,
    height: scale(45),
    padding: scale(10),
  },
  inputView: {
    paddingLeft: scale(28),
    height: scale(45),
    padding: scale(10),
    borderColor: colorThemes.brandColor,
    backgroundColor: colorThemes.white,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

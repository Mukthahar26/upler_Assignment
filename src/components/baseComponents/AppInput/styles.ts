import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';

const styles = StyleSheet.create({
  textField: {
    color: colorThemes.black,
    height: scale(45),
    padding: scale(10),
    width: '100%',
  },
  inputView: {
    paddingLeft: scale(4),
    height: scale(45),
    borderBottomWidth: 1,
    borderBottomColor: colorThemes.lightGray,
    backgroundColor: colorThemes.white,
    borderRadius: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;

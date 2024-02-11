import {StyleSheet} from 'react-native';
import measureValues from '../../../themes/measureValues';
import colorThemes from '../../../themes/colorsThemes';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  box: {
    marginTop: measureValues.size16,
    padding: measureValues.size16,
    marginBottom: scale(50),
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: scale(4),
  },
  inputContainers: {
    marginTop: measureValues.size16,
  },
  labelBox: {
    backgroundColor: colorThemes.lightGray,
    padding: measureValues.size10,
    borderRadius: scale(4),
  },
  label: {
    fontSize: measureValues.fontSmall,
    fontStyle: 'italic',
    textAlign: 'justify',
  },
  button: {
    marginTop: scale(10),
    backgroundColor: colorThemes.brandColor,
  },
  labelStyle: {
    color: colorThemes.white,
  },
  error: {
    borderWidth: 1,
    borderColor: colorThemes.red,
  },
  input: {
    marginBottom: measureValues.size10,
    borderWidth: 0,
  },
});

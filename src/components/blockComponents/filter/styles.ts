import {StyleSheet} from 'react-native';
import measureValues from '../../../themes/measureValues';
import colorThemes from '../../../themes/colorsThemes';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  card: {
    marginTop: measureValues.size16,
    padding: measureValues.size16,
  },
  filterLabel: {
    marginBottom: measureValues.size10,
    fontWeight: '700',
    fontSize: measureValues.fontMedium,
  },
  airlinesLabel: {
    padding: scale(5),
    marginBottom: scale(5),
    borderRadius: scale(4),
  },
  checkBox: {
    marginTop: measureValues.size10,
  },
  underline: {
    marginTop: measureValues.size10,
  },
  highlight: {
    backgroundColor: colorThemes.lightGray,
  },
});

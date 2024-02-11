import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import measureValues from '../../../themes/measureValues';
import colorThemes from '../../../themes/colorsThemes';

export default StyleSheet.create({
  container: {
    height: scale(170),
    width: measureValues.screenWidth,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  heading: {
    color: colorThemes.white,
    fontSize: scale(26),
    fontWeight: '800',
    marginBottom: scale(12),
  },
  desc: {
    color: colorThemes.white,
    fontSize: measureValues.fontRegular,
    marginBottom: scale(16),
  },
});

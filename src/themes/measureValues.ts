import {scale} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const measureValues = {
  fontSmall: scale(10),
  fontRegular: scale(12),
  fontMedium: scale(14),
  fontLarge: scale(16),
  size16: scale(16),
  size10: scale(10),
  screenWidth: width,
};

export default measureValues;

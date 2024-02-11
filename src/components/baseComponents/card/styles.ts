import {scale, ScaledSheet} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';
import measureValues from '../../../themes/measureValues';

const styles = ScaledSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    minHeight: scale(50),
    backgroundColor: colorThemes.white,
    borderRadius: scale(4),
    elevation: scale(3),
    padding: measureValues.size10,
  },
});

export default styles;

import {scale, ScaledSheet} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';

const styles = ScaledSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    minHeight: scale(50),
    backgroundColor: colorThemes.white,
    borderRadius: scale(10),
    elevation: scale(3),
  },
});

export default styles;

import {scale, ScaledSheet} from 'react-native-size-matters';
import colorThemes from '../../../themes/colorsThemes';
import measureValues from '../../../themes/measureValues';

const styles = ScaledSheet.create({
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colorThemes.white,
    zIndex: -1,
  },
  container: {
    flex: 1,
  },
  padding16: {
    padding: measureValues.size16,
  },
  loadingView: {
    width: '100%',
    height: '100%',
  },
  back: {
    height: scale(50),
    justifyContent: 'center',
    backgroundColor: colorThemes.white,
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
  ovalStyle: {
    position: 'absolute',
    bottom: scale(50),
  },
  navigationHeader: {
    padding: measureValues.size16,
  },
});

export default styles;

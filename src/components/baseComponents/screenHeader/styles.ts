import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import measureValues from '../../../themes/measureValues';
import colorThemes from '../../../themes/colorsThemes';

export default StyleSheet.create({
  container: {
    height: scale(60),
    justifyContent: 'flex-end',
    paddingRight: measureValues.size16,
    paddingLeft: measureValues.size16,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topContainer: {
    backgroundColor: colorThemes.brandColor,
    paddingLeft: measureValues.size16,
    paddingRight: measureValues.size16,
    paddingBottom: scale(12),
  },
  headerContainer: {
    marginTop: scale(40),
  },
  nameLabel: {
    color: colorThemes.white,
    fontSize: scale(22),
  },
  headerName: {
    fontSize: measureValues.fontRegular,
    fontWeight: '300',
    marginLeft: scale(10),
  },
});

import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import measureValues from '../../../themes/measureValues';

export default StyleSheet.create({
  container: {
    paddingTop: measureValues.size10,
    paddingBottom: measureValues.size10,
    marginBottom: scale(20),
  },
  image: {
    height: scale(150),
    resizeMode: 'contain',
    borderRadius: scale(4),
    marginTop: 0,
  },
  details: {
    paddingTop: measureValues.size10,
  },
  padding3: {
    paddingTop: scale(3),
    paddingBottom: scale(3),
  },
  price: {
    fontSize: measureValues.fontMedium,
    fontWeight: '700',
    marginBottom: measureValues.size10,
  },
  locationInfo: {
    fontStyle: 'italic',
  },
  stopsInfo: {
    marginTop: measureValues.size10,
  },
  button: {
    marginTop: measureValues.size16,
  },
});

import {StyleSheet} from 'react-native';
import measureValues from '../../themes/measureValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  price: {
    fontSize: measureValues.fontMedium,
    fontWeight: '700',
    marginTop: measureValues.size16,
    marginBottom: measureValues.size10,
  },
  locationInfo: {
    fontStyle: 'italic',
  },
  stopInfo: {
    alignItems: 'center',
    marginBottom: measureValues.size10,
  },
  underline1: {
    width: '25%',
    marginTop: scale(5),
    marginBottom: scale(5),
  },
  card: {
    width: '99%',
  },
  TravelDetails: {
    flexDirection: 'row',
    marginTop: measureValues.size16,
  },
  col1: {
    flex: 40,
  },
  col2: {
    alignItems: 'flex-end',
  },
  underline: {
    flex: 20,
    marginLeft: scale(5),
    marginRight: scale(5),
    alignSelf: 'center',
  },
  rightLabel: {
    textAlign: 'right',
  },
  date: {
    marginBottom: measureValues.size16,
  },
  airlinesDetails: {
    width: '99%',
    marginTop: measureValues.size16,
    marginBottom: scale(10),
  },
  airlinesLabel: {
    fontSize: measureValues.fontMedium,
  },
  airline: {
    marginTop: measureValues.size10,
  },
  italic: {
    fontStyle: 'italic',
  },
});

export default styles;

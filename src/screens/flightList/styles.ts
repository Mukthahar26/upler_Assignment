import {StyleSheet} from 'react-native';
import measureValues from '../../themes/measureValues';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    elevation: 5,
    width: measureValues.screenWidth - 20,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: scale(4),
  },
});

export default styles;

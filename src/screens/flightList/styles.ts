import {StyleSheet} from 'react-native';
import measureValues from '../../themes/measureValues';

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
    borderRadius: 8,
  },
});

export default styles;

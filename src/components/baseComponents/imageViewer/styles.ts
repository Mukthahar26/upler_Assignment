import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  thumbnail: {
    height: scale(180),
    resizeMode: 'contain',
    borderRadius: 8,
    marginTop: 0,
  },
  imageIcon: {
    marginTop: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

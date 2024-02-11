import {scale, ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  underline: {
    width: '100%',
    height: scale(1),
    backgroundColor: '#e6e5e3',
    alignSelf: 'center',
  },
  icon: {
    height: scale(20),
    marginTop: -scale(20 / 2),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default styles;

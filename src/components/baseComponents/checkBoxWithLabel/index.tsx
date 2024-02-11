import {ViewStyle} from 'react-native';
import CheckBox from 'react-native-check-box';
import colorThemes from '../../../themes/colorsThemes';
import {checkList} from '../../blockComponents/filter/props';
import styles from './styles';

type Props = {
  label: string;
  isChecked: boolean;
  onToggle: (check: checkList) => void;
  style?: ViewStyle;
};

const CheckboxWithLabel = (props: Props) => {
  const {label, isChecked, onToggle, style} = props;
  return (
    <CheckBox
      style={style}
      rightTextStyle={styles.rightText}
      checkedCheckBoxColor={colorThemes.brandColor}
      uncheckedCheckBoxColor={colorThemes.brandColor}
      onClick={() => onToggle(props)}
      isChecked={isChecked}
      rightText={label}
    />
  );
};

export default CheckboxWithLabel;

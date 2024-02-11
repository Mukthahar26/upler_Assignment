import {ViewStyle} from 'react-native';
import CheckBox from 'react-native-check-box';
import colorThemes from '../../../themes/colorsThemes';
import {checkList} from '../../blockComponents/filter/props';
import styles from './styles';

type Props = {
  checkItem: checkList;
  onToggle: (check: checkList) => void;
  style?: ViewStyle;
};

const CheckboxWithLabel = (props: Props) => {
  const {checkItem, onToggle, style} = props;
  const {count, isChecked, label} = checkItem;
  return (
    <CheckBox
      style={style}
      rightTextStyle={styles.rightText}
      checkedCheckBoxColor={colorThemes.brandColor}
      uncheckedCheckBoxColor={colorThemes.brandColor}
      onClick={() => onToggle(checkItem)}
      isChecked={isChecked}
      rightText={`${label} (${count})`}
    />
  );
};

export default CheckboxWithLabel;

import React from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';
import colorThemes from '../../../themes/colorsThemes';

type Props = {
  onChangeText: any;
  placeholder?: string;
  multiline?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: 'numeric' | 'default' | 'phone-pad';
  autoFocus?: boolean;
  value?: string;
  limit?: number;
};
const AppInput = ({
  onChangeText,
  placeholder,
  multiline,
  style,
  inputStyle,
  keyboardType,
  autoFocus,
  value,
  limit,
}: Props) => {
  return (
    <View style={[styles.inputView, style]}>
      <TextInput
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colorThemes.placeHolderBlueTextColor}
        multiline={multiline}
        maxLength={limit}
        onChangeText={e => onChangeText(e)}
        style={[styles.textField, inputStyle]}
      />
    </View>
  );
};

AppInput.defaultProps = {
  placeholder: 'Please enter Text',
  onChangeText: () => {},
  multiline: false,
  keyboardType: 'default',
  autoFocus: false,
};

export default AppInput;

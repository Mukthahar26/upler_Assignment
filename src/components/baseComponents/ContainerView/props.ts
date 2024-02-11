import {ViewStyle} from 'react-native';

export type Props = {
  children: any;
  containerStyle?: ViewStyle;
  headerName?: string;
  isBackRequired?: boolean;
  mainContainerStyle?: ViewStyle;
  isScrollRequired: boolean;
  isHeaderRequired?: boolean;
  loading?: boolean;
  headerStyle?: ViewStyle;
  isBorderPaddingRequired?: boolean;
};

import React, {useState} from 'react';
import {View} from 'react-native';
import AppText from '../AppText';

type Props = {
  children: React.ReactNode;
};

const ErrorBoundaries = ({children}: Props) => {
  const [hasError, setHasError] = useState(false);

  const handlePress = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <View>
        <AppText onPress={handlePress}>
          App Crashed due to some error. Please Try after sometime.
        </AppText>
      </View>
    );
  }

  return children;
};

export default ErrorBoundaries;

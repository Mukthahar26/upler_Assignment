import React from 'react';
import {View, FlatList, ViewStyle} from 'react-native';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Loader from '../loader';
import {Props} from './props';
import ScreenHeader from '../screenHeader';

const ContainerView = ({
  children,
  containerStyle,
  mainContainerStyle,
  headerName,
  isBackRequired,
  isHeaderRequired,
  isScrollRequired,
  loading,
  headerStyle,
  isBorderPaddingRequired,
}: Props) => {
  const renderContent = () => <View>{children}</View>;

  const renderLoader = () => {
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loader />
        </View>
      );
    } else {
      return (
        <>
          {isHeaderRequired && (
            <ScreenHeader
              headerStyle={headerStyle as ViewStyle}
              isBackRequired={isBackRequired}
              headerName={headerName}
            />
          )}
          {isScrollRequired ? (
            <FlatList
              data={[{}]}
              style={[isBorderPaddingRequired && styles.padding16]}
              contentContainerStyle={[styles.container, containerStyle]}
              showsVerticalScrollIndicator={false}
              renderItem={renderContent}
              keyExtractor={(_, index) => index.toString()}
            />
          ) : (
            <View style={[styles.container, styles.padding16, containerStyle]}>
              {children}
            </View>
          )}
        </>
      );
    }
  };
  return (
    <SafeAreaView style={[styles.mainContainerStyle, mainContainerStyle]}>
      {renderLoader()}
    </SafeAreaView>
  );
};

ContainerView.defaultProps = {
  headerName: '',
  isScrollRequired: true,
  isBackRequired: true,
  isHeaderRequired: true,
  loading: false,
  isBorderPaddingRequired: true,
};

export default ContainerView;

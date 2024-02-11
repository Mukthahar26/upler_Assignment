import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/rootNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ErrorBoundaries from './components/baseComponents/errorBoundaries';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <ErrorBoundaries>
            <RootNavigator />
          </ErrorBoundaries>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

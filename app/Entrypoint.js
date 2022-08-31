import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../app/navigation/RootNavigation';
import RootStackScreen from '../app/navigation/NavigationStack';
import configureStore from '../app/store/configureStore';
const {persistor, store} = configureStore();
export default function Entrypoint() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootStackScreen />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

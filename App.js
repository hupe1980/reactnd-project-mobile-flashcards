import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { AppLoading } from 'expo';

import RootNavigation from './navigation/RootNavigation';
import StatusBar from './components/StatusBar';
import { primary } from './utils/colors';
import { setLocalNotification } from './utils/helpers';
import configureStore from './configureStore';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<AppLoading />}
          persistor={persistor}
        >
          <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={primary} barStyle="light-content" />
            <RootNavigation />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

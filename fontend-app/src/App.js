import {NativeBaseProvider} from 'native-base';
import RootNavigator from 'navigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'store';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config}>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

import {NativeBaseProvider} from 'native-base';
import RootNavigator from 'navigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

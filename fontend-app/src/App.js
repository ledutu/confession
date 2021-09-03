import {extendTheme, NativeBaseProvider} from 'native-base';
import RootNavigator from 'navigator';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'store';
import {colors} from 'utils';

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const theme = extendTheme({
  colors: {brand: colors},
});

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider config={config} theme={theme}>
        <RootNavigator />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

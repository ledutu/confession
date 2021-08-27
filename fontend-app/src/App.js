import {NativeBaseProvider} from 'native-base';
import RootNavigator from 'navigator';
import React from 'react';

const App = () => {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
};

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {routes} from 'utils';
import Bottom from './Bottom';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={Bottom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {auth} from 'screens';
import {routes} from 'utils';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.SIGN_IN_SCREEN}
        component={auth[routes.SIGN_IN_SCREEN]}
      />
      <Stack.Screen
        name={routes.SIGN_UP_SCREEN}
        component={auth[routes.SIGN_UP_SCREEN]}
      />
      <Stack.Screen
        name={routes.FORGET_PASS_SCREEN}
        component={auth[routes.FORGET_PASS_SCREEN]}
      />
      <Stack.Screen
        name={routes.RE_SIGN_IN_SCREEN}
        component={auth[routes.RE_SIGN_IN_SCREEN]}
      />
    </Stack.Navigator>
  );
};

export default Auth;

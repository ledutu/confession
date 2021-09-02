import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {common} from 'screens';
import {routes} from 'utils';

const Stack = createNativeStackNavigator();

const Common = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routes.SETTING_PROFILE_SCREEN}
        component={common[routes.SETTING_PROFILE_SCREEN]}
      />
      <Stack.Screen
        name={routes.ADD_QUESTION_SCREEN}
        component={common[routes.ADD_QUESTION_SCREEN]}
      />
      <Stack.Screen
        name={routes.RATE_QUESTION_SCREEN}
        component={common[routes.RATE_QUESTION_SCREEN]}
      />
    </Stack.Navigator>
  );
};

export default Common;

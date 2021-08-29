import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import actions, {_onSuccess} from 'store/actions';
import {routes, storage, storageKey} from 'utils';
import Auth from './Auth';
import Bottom from './Bottom';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    storage.getItem(storageKey.TOKEN_BEARER).then(access_token => {
      storage.getItem(storageKey.TOKEN_USER).then(user => {
        if (access_token && user) {
          dispatch({
            type: _onSuccess(actions.LOGIN_ACCOUNT),
            data: {
              access_token,
              user,
            },
          });
        }
      });
    });
  }, [dispatch]);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={Bottom} />
        <Stack.Screen name={routes.AUTH_CONTAINER} component={Auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Modal, Spinner} from 'native-base';
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions, {_onSuccess} from 'store/actions';
import {colors, routes, storage, storageKey} from 'utils';
import Auth from './Auth';
import Bottom from './Bottom';
import Common from './Common';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();
  const modalLoad = useSelector(state => state.modalLoad);

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
          dispatch({type: actions.GET_USER_INFORMATION});
        }
      });
    });
  }, [dispatch]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{colors: {background: colors.darkPrimary}}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.BOTTOM_TAB} component={Bottom} />
        <Stack.Screen name={routes.AUTH_CONTAINER} component={Auth} />
        <Stack.Screen name={routes.COMMON_CONTAINER} component={Common} />
      </Stack.Navigator>
      <Modal isOpen={modalLoad}>
        <Spinner />
      </Modal>
    </NavigationContainer>
  );
};

export default RootNavigator;

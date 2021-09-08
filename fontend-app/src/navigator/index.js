import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Modal, Spinner} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {common} from 'screens';
import {colors, routes} from 'utils';
import Auth from './Auth';
import Bottom from './Bottom';
import Common from './Common';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [isReady, setIsReady] = useState(false);
  const modalLoad = useSelector(state => state.modalLoad);

  useEffect(() => {
    setIsReady(true);
    SplashScreen.hide();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{colors: {background: colors.darkPrimary}}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.ON_BOARD_SCREEN}
          component={common[routes.ON_BOARD_SCREEN]}
        />
        <Stack.Screen name={routes.BOTTOM_TAB} component={Bottom} />
        <Stack.Screen name={routes.AUTH_CONTAINER} component={Auth} />
        <Stack.Screen name={routes.COMMON_CONTAINER} component={Common} />
      </Stack.Navigator>
      {/* <Image style={StyleSheet.absoluteFill} source={images.bg} zIndex={-10} /> */}
      <Modal isOpen={modalLoad}>
        <Spinner />
      </Modal>
    </NavigationContainer>
  );
};

export default RootNavigator;

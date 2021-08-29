/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from 'assets';
import {Image} from 'native-base';
import * as React from 'react';
import {bottom} from 'screens';
import {colors, routes} from 'utils';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.tomato,
        tabBarInactiveTintColor: colors.primaryText,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1.5,
          height: 60,
          backgroundColor: colors.primary,
          borderTopColor: colors.primaryText,
        },
        tabBarIcon: ({focused, color}) => {
          const icon = {
            [routes.HOME_SCREEN]: icons.home,
            [routes.NOTIFICATION_SCREEN]: icons.bell,
            [routes.PROFILE_SCREEN]: icons.user,
          };
          const icon_filled = {
            [routes.HOME_SCREEN]: icons.home_filled,
            [routes.NOTIFICATION_SCREEN]: icons.bell_filled,
            [routes.PROFILE_SCREEN]: icons.user_filled,
          };
          return (
            <Image
              size={7}
              style={{tintColor: focused ? null : color}}
              source={focused ? icon_filled[route.name] : icon[route.name]}
            />
          );
        },
      })}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom[routes.HOME_SCREEN]}
      />
      <Tab.Screen
        name={routes.NOTIFICATION_SCREEN}
        component={bottom[routes.NOTIFICATION_SCREEN]}
      />
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={bottom[routes.PROFILE_SCREEN]}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

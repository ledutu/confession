import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'native-base';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bottom} from 'screens';
import {colors, routes} from 'utils';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.tomato,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabel: ({color}) => {
          const labels = {
            [routes.HOME_SCREEN]: 'Trang chủ',
            [routes.NOTIFICATION_SCREEN]: 'Thông báo',
            [routes.PROFILE_SCREEN]: 'Tài khoản',
          };
          return (
            <Text fontSize="xs" color={color}>
              {labels[route.name]}
            </Text>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          const icons = {
            [routes.HOME_SCREEN]: 'home',
            [routes.NOTIFICATION_SCREEN]: 'notifications',
            [routes.PROFILE_SCREEN]: 'person',
          };
          iconName = `${icons[route.name]}${focused ? '' : '-outline'}`;
          return <Ionicons name={iconName} size={size} color={color} />;
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

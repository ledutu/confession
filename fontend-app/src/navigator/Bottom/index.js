import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from 'assets';
import {HStack, Image, Text} from 'native-base';
import * as React from 'react';
import {bottom} from 'screens';
import {colors, routes} from 'utils';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1.5,
          height: 70,
          backgroundColor: colors.primary,
          borderTopColor: colors.primaryText,
        },
        tabBarIcon: ({focused}) => {
          const icon_filled = {
            [routes.HOME_SCREEN]: icons.home_filled,
            [routes.NOTIFICATION_SCREEN]: icons.bell_filled,
            [routes.PROFILE_SCREEN]: icons.user_filled,
          };
          const label = {
            [routes.HOME_SCREEN]: 'Trang chủ',
            [routes.NOTIFICATION_SCREEN]: 'Thông báo',
            [routes.PROFILE_SCREEN]: 'Tài khoản',
          };

          return (
            <HStack
              alignItems="center"
              space={1}
              py={2}
              px={3}
              rounded="lg"
              bg={
                focused
                  ? {
                      linearGradient: {
                        colors: colors.gradient,
                        start: [0, 0],
                        end: [1, 0],
                      },
                    }
                  : 'transparent'
              }>
              <Image
                size={5}
                style={{tintColor: focused ? colors.white : colors.primaryText}}
                source={icon_filled[route.name]}
              />
              {focused && (
                <Text fontSize="xs" color={colors.white}>
                  {label[route.name]}
                </Text>
              )}
            </HStack>
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

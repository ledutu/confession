import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons} from 'assets';
import {Button, HStack, Image, Text} from 'native-base';
import React from 'react';
import {LayoutAnimation, Platform, UIManager} from 'react-native';
import {bottom} from 'screens';
import {colors, routes} from 'utils';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          paddingHorizontal: 12,
          backgroundColor: colors.primary,
        },
        tabBarButton: ({accessibilityState, onPress}) => {
          const focused = accessibilityState.selected;
          const icon_filled = {
            [routes.HOME_SCREEN]: icons.home_filled,
            [routes.QUESTION_SCREEN]: icons.question_filled,
            [routes.NOTIFICATION_SCREEN]: icons.bell_filled,
            [routes.PROFILE_SCREEN]: icons.user_filled,
          };
          const label = {
            [routes.HOME_SCREEN]: 'Trang chủ',
            [routes.QUESTION_SCREEN]: 'Câu Hỏi',
            [routes.NOTIFICATION_SCREEN]: 'Thông báo',
            [routes.PROFILE_SCREEN]: 'Tài khoản',
          };

          const _onPress = () => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            onPress();
          };

          return (
            <Button
              onPress={_onPress}
              flexGrow={1}
              bg={colors.transparent}
              _pressed={{bg: colors.transparent}}>
              <HStack
                p={3}
                rounded="lg"
                alignItems="center"
                space={1}
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
                  style={{
                    tintColor: focused ? colors.white : colors.primaryText,
                  }}
                  source={icon_filled[route.name]}
                />
                {focused && (
                  <Text fontSize="xs" color={colors.white}>
                    {label[route.name]}
                  </Text>
                )}
              </HStack>
            </Button>
          );
        },
      })}>
      <Tab.Screen
        name={routes.HOME_SCREEN}
        component={bottom[routes.HOME_SCREEN]}
      />
      <Tab.Screen
        name={routes.QUESTION_SCREEN}
        component={bottom[routes.QUESTION_SCREEN]}
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

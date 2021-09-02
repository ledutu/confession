import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from '@react-navigation/material-top-tabs';
import {Container} from 'components';
import {Box, Pressable, Text} from 'native-base';
import React from 'react';
import {colors} from 'utils';
import AddQuestion from './screens/AddQuestion';
import RateQuestion from './screens/RateQuestion';

const Tab = createMaterialTopTabNavigator();

const Question = () => {
  const _renderTabBarItem = ({route, navigationState, onPress}) => {
    const tabIndex = navigationState.routes.indexOf(route);
    const focused = navigationState.index === tabIndex;

    return (
      <Pressable flex={1} onPress={onPress}>
        <Box
          flex={1}
          padding={3}
          justifyContent="center"
          alignItems="center"
          bg={
            focused
              ? {
                  linearGradient: {
                    colors: colors.gradient,
                    start: [0, 0],
                    end: [1, 0],
                  },
                }
              : colors.primary
          }>
          <Text
            fontSize="md"
            color={focused ? colors.white : colors.primaryText}>
            {route.name}
          </Text>
        </Box>
      </Pressable>
    );
  };

  const _renderTabBar = props => (
    <MaterialTopTabBar {...props} renderTabBarItem={_renderTabBarItem} />
  );

  return (
    <Container title="Câu hỏi" canGoBack={false} px={0} py={0}>
      <Tab.Navigator
        tabBar={_renderTabBar}
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: colors.transparent,
          },
          tabBarStyle: {
            marginHorizontal: 12,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            overflow: 'hidden',
            backgroundColor: colors.darkPrimary,
          },
        }}>
        <Tab.Screen name="AddQuestion" component={AddQuestion} />
        <Tab.Screen name="RateQuestion" component={RateQuestion} />
      </Tab.Navigator>
    </Container>
  );
};

export default Question;

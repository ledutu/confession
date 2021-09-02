import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Container} from 'components';
import React from 'react';
import AddQuestion from './screens/AddQuestion';
import RateQuestion from './screens/RateQuestion';

const Tab = createMaterialTopTabNavigator();

const Question = () => {
  return (
    <Container title="Câu hỏi" canGoBack={false}>
      <Tab.Navigator>
        <Tab.Screen name="AddQuestion" component={AddQuestion} />
        <Tab.Screen name="RateQuestion" component={RateQuestion} />
      </Tab.Navigator>
    </Container>
  );
};

export default Question;

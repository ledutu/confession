import {Box, ScrollView} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {sizes} from 'utils';
import Slider from './components/Slider';

export const ITEM_HEIGHT = sizes.HEIGHT * 0.61;

const OnBoard = () => {
  return (
    <Box flex={1} bg="white">
      <Box
        bg="brand.blue"
        borderBottomRightRadius={60}
        style={{height: ITEM_HEIGHT}}>
        <ScrollView
          horizontal
          bounces={false}
          decelerationRate="fast"
          snapToInterval={sizes.WIDTH}
          showsHorizontalScrollIndicator={false}>
          <Slider label="DEMO 1" />
          <Slider label="DEMO 2" right={true} />
          <Slider label="DEMO 3" />
          <Slider label="DEMO 4" right={true} />
        </ScrollView>
      </Box>
      <Box flex={1} bg="brand.blue">
        <Box
          bg="brand.white"
          borderTopLeftRadius={60}
          style={StyleSheet.absoluteFill}
        />
      </Box>
    </Box>
  );
};

export default OnBoard;

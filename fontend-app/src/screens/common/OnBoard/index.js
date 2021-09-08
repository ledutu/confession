import {Box} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {sizes} from 'utils';

const ITEM_HEIGHT = sizes.HEIGHT * 0.61;

const OnBoard = () => {
  return (
    <Box flex={1} bg="white">
      <Box
        bg="brand.blue"
        borderBottomRightRadius={60}
        style={{height: ITEM_HEIGHT}}
      />
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

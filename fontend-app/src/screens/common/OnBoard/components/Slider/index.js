import {Box, Text} from 'native-base';
import React from 'react';
import {sizes} from 'utils';
import {ITEM_HEIGHT} from '../..';

const Slider = ({label, right}) => {
  return (
    <Box style={{width: sizes.WIDTH}}>
      <Box
        height={20}
        justifyContent="center"
        style={{
          transform: [
            {translateY: ITEM_HEIGHT / 2 - 40},
            {translateX: right ? sizes.WIDTH / 2 - 40 : -sizes.WIDTH / 2 + 40},
            {rotate: right ? '-90deg' : '90deg'},
          ],
        }}>
        <Text textAlign="center" fontSize="3xl" bold color="white">
          {label}
        </Text>
      </Box>
    </Box>
  );
};

export default Slider;

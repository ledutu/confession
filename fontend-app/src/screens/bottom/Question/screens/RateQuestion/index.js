import {Box, Text} from 'native-base';
import React from 'react';
import {colors} from 'utils';

const RateQuestion = () => {
  return (
    <Box flex={1} bg={colors.darkPrimary} p={3}>
      <Text>Rate</Text>
    </Box>
  );
};

export default RateQuestion;

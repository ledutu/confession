import {Box, Text} from 'native-base';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from 'utils';

const Header = ({title = 'Header'}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Box pb={5} px={5} pt={top + 5} bg={colors.tomato} alignItems="center">
      <Text fontSize="lg" color="white">
        {title}
      </Text>
    </Box>
  );
};

export default Header;

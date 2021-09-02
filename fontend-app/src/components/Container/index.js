import {Header} from 'components';
import {Box} from 'native-base';
import React from 'react';
import {colors} from 'utils';

const Container = ({
  children,
  bg = colors.darkPrimary,
  px = 3,
  py = 3,
  ...rest
}) => {
  return (
    <Box flex={1}>
      <Header {...rest} />
      <Box safeAreaBottom bg={bg} flex={1} py={py} px={px}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;

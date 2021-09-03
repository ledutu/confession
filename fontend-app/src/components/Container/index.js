import {Header} from 'components';
import {Box} from 'native-base';
import React from 'react';

const Container = ({
  children,
  bg = 'brand.transparent',
  px = 3,
  py = 3,
  ...rest
}) => {
  return (
    <Box flex={1}>
      <Header {...rest} />
      <Box safeAreaBottom bg={bg} flex={1} py={py} px={px} zIndex={10}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;

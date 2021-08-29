import {Header} from 'components';
import {Box} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from 'utils';

const Container = ({children, bg = colors.primary, px = 3, ...rest}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Box flex={1}>
      <Header {...rest} />
      <Box
        bg={bg}
        flex={1}
        pt={3}
        px={px}
        paddingBottom={Platform.OS === 'ios' ? bottom : 3}>
        {children}
      </Box>
    </Box>
  );
};

export default Container;

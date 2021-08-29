import {icons} from 'assets';
import {Box, Button, HStack, Image} from 'native-base';
import React from 'react';
import {colors} from 'utils';

const LoginSocial = () => {
  return (
    <Box>
      <HStack marginBottom={3}>
        <Button
          flex={1}
          borderRadius={15}
          borderWidth={2}
          variant="outline"
          borderColor={colors.primaryText}
          _pressed={{bg: 'transparent'}}
          _text={{color: colors.lightBlue}}
          startIcon={<Image source={icons.facebook} width={5} height={5} />}>
          FACEBOOK
        </Button>
        <Box width={3} />
        <Button
          flex={1}
          borderRadius={15}
          borderWidth={2}
          variant="outline"
          borderColor={colors.primaryText}
          _pressed={{bg: 'transparent'}}
          _text={{color: colors.white}}
          startIcon={<Image source={icons.google} width={5} height={5} />}>
          GOOGLE
        </Button>
      </HStack>
    </Box>
  );
};

export default LoginSocial;

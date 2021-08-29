import {Box, Input, Text} from 'native-base';
import React from 'react';
import {colors} from 'utils';

const InputLabel = ({label, value, isPass = false}) => {
  return (
    <Box mt={3}>
      <Text fontSize="md" color={colors.primaryText} mb={1}>
        {label}
      </Text>
      <Input
        _focus={{borderColor: colors.blue}}
        type={isPass ? 'password' : 'text'}
        borderWidth={2}
        borderColor={colors.primaryText}
        color={colors.white}
        borderRadius={15}
        value={value}
      />
    </Box>
  );
};

export default InputLabel;

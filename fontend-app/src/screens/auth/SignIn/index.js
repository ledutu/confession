import {Container} from 'components';
import {Box, Button, Text} from 'native-base';
import React from 'react';
import {colors} from 'utils';
import FormSignIn from './components/FormSignIn';
import LoginSocial from './components/LoginSocial';

const SignIn = () => {
  return (
    <Container title="Đăng nhập">
      <Box flex={1}>
        <FormSignIn />
        <Button
          mt={6}
          bg="transparent"
          _pressed={{bg: 'transparent'}}
          _text={{color: colors.blue, fontWeight: '700'}}>
          QUÊN MẬT KHẨU
        </Button>
      </Box>
      <Box>
        <LoginSocial />
        <Text fontSize="sm" color={colors.primaryText} lineHeight={6}>
          Khi đăng ký trên confession, bạn đã đồng ý{' '}
          <Text bold fontSize="sm" color={colors.primaryText}>
            Các chính sách
          </Text>{' '}
          và{' '}
          <Text bold fontSize="sm" color={colors.primaryText}>
            Chính sách bảo mật
          </Text>{' '}
          của chúng tôi.
        </Text>
      </Box>
    </Container>
  );
};

export default SignIn;

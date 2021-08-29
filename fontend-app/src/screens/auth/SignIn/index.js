import {Container} from 'components';
import {Box, Button, KeyboardAvoidingView, ScrollView, Text} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {colors} from 'utils';
import FormSignIn from './components/FormSignIn';
import LoginSocial from './components/LoginSocial';

const SignIn = () => {
  return (
    <Container title="Đăng nhập">
      <Box flex={1}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FormSignIn />
            <Button
              mt={6}
              bg="transparent"
              _pressed={{bg: 'transparent'}}
              _text={{color: colors.blue, fontWeight: '700'}}>
              QUÊN MẬT KHẨU
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
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

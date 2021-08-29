import {icons} from 'assets';
import {Container} from 'components';
import {Box, Button, HStack, Icon, Image, Input, Text} from 'native-base';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'utils';

const INIT_STATE = {email: '', password: ''};

const SignIn = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [form, setForm] = useState(INIT_STATE);

  const disabled = !form.email || !form.password;

  const _onShowPass = () => {
    if (form.password) {
      setIsShowPass(!isShowPass);
    }
  };

  const _onTextEmail = text => {
    setForm({...form, email: text});
  };

  const _onTextPassword = text => {
    setForm({...form, password: text});
  };

  const _onConfirm = () => {
    console.log('confirm');
  };

  return (
    <Container title="Đăng nhập">
      <Box flex={1}>
        <Box borderWidth={2} borderRadius={15} borderColor={colors.primaryText}>
          <Input
            placeholder="Tên đăng nhập hoặc email"
            borderWidth={0}
            borderRadius={0}
            borderBottomWidth={2}
            color={colors.white}
            borderBottomColor={colors.primaryText}
            placeholderTextColor={colors.primaryText}
            onChangeText={_onTextEmail}
          />
          <Input
            type={isShowPass ? 'text' : 'password'}
            placeholder="Mật khẩu"
            borderWidth={0}
            borderRadius={0}
            color={colors.white}
            placeholderTextColor={colors.primaryText}
            onChangeText={_onTextPassword}
            InputRightElement={
              <Button
                backgroundColor="transparent"
                onPress={_onShowPass}
                startIcon={
                  <Icon
                    as={Ionicons}
                    name={isShowPass ? 'eye-off' : 'eye'}
                    size={6}
                    color={colors.primaryText}
                  />
                }
              />
            }
          />
        </Box>
        <Button
          onPress={_onConfirm}
          isDisabled={disabled}
          isLoading={false}
          mt={6}
          borderRadius={15}
          bg={disabled ? colors.lightPrimary : colors.blue}
          _pressed={{bg: colors.blue}}
          _text={{color: disabled ? colors.primaryText : colors.black}}>
          ĐĂNG NHẬP
        </Button>
        <Button
          mt={6}
          bg="transparent"
          _pressed={{bg: 'transparent'}}
          _text={{color: colors.blue, fontWeight: '700'}}>
          QUÊN MẬT KHẨU
        </Button>
      </Box>
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

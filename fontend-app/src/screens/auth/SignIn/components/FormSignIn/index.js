import {Box, Button, Icon, Input} from 'native-base';
import React, {useState} from 'react';
import {colors} from 'utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

const INIT_STATE = {email: '', password: ''};

const FormSignIn = () => {
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
    <Box>
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
    </Box>
  );
};

export default FormSignIn;

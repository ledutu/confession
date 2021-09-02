import {Box, Button, Icon, Input} from 'native-base';
import React, {useState} from 'react';
import {colors} from 'utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'store/actions';

const INIT_STATE = {email: '', password: ''};

const FormSignIn = () => {
  const dispatch = useDispatch();
  const [isShowPass, setIsShowPass] = useState(false);
  const [form, setForm] = useState(INIT_STATE);
  const rLogin = useSelector(state => state.login);

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
    dispatch({
      type: actions.LOGIN_ACCOUNT,
      body: {
        email: form.email,
        password: form.password,
      },
    });
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
        mt={6}
        borderRadius={15}
        onPress={_onConfirm}
        isDisabled={disabled}
        isLoading={rLogin.isLoading}
        _disabled={{bg: colors.primaryText}}
        _pressed={{bg: colors.blue}}
        _text={{color: colors.white}}>
        ĐĂNG NHẬP
      </Button>
    </Box>
  );
};

export default FormSignIn;

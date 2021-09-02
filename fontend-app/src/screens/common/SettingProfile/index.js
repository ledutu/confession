import {ChooseAvatar, Container} from 'components';
import {Button, KeyboardAvoidingView, ScrollView, Text} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'store/actions';
import {colors} from 'utils';
import InputLabel from './components/InputLabel';

const SettingProfile = () => {
  const dispatch = useDispatch();
  const dInformation = useSelector(state => state.userInfo.data);
  const iLogout = useSelector(state => state.logout.isLoading);

  const {email, profile} = dInformation || {};

  const _onLogout = () => {
    dispatch({type: actions.LOGOUT_ACCOUNT});
  };

  return (
    <Container
      title="Cài đặt"
      nameIcon="close"
      renderRight={() => (
        <Text bold fontSize="md" color={colors.white}>
          Hoàn tất
        </Text>
      )}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text fontSize="lg" bold color={colors.white}>
            Hồ sơ của bạn
          </Text>
          <ChooseAvatar mt={5} />
          <InputLabel label="Tên" value={profile?.full_name} />
          <InputLabel label="Email" value={email} />
          <InputLabel label="Mật khẩu" value="dvlcodervn" isPass />
          <Button
            isLoading={iLogout}
            onPress={_onLogout}
            borderWidth={2}
            borderColor={colors.primaryText}
            borderRadius={15}
            mt={6}
            variant="outline"
            _text={{color: colors.white}}
            _pressed={{bg: colors.transparent}}>
            ĐĂNG XUẤT
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SettingProfile;

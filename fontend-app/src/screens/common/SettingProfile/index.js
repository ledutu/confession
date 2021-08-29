import {Container} from 'components';
import {
  Avatar,
  Box,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'native-base';
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
        <Text bold fontSize="md" color={colors.blue}>
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
          <Button my={5} p={0} bg="transparent" _pressed={{bg: 'transparent'}}>
            <Box alignItems="center">
              <Avatar
                size="lg"
                source={
                  profile?.image
                    ? {
                        uri: profile?.image,
                      }
                    : undefined
                }>
                <Text fontSize="xl" bold color={colors.white}>
                  {!profile?.image && profile?.full_name?.substring(0, 1)}
                </Text>
              </Avatar>
              <Text fontSize="md" bold color={colors.blue} mt={2}>
                Thay đổi ảnh đại diện
              </Text>
            </Box>
          </Button>
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
            _pressed={{bg: 'transparent'}}>
            ĐĂNG XUẤT
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SettingProfile;

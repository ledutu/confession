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
import {colors} from 'utils';
import InputLabel from './components/InputLabel';

const SettingProfile = () => {
  return (
    <Container title="Cài đặt" nameIcon="close" rightTitle="Hoàn tất">
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
                source={{
                  uri: 'https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg',
                }}>
                <Text fontSize="xl" bold color={colors.white}>
                  V
                </Text>
              </Avatar>
              <Text fontSize="md" bold color={colors.blue} mt={2}>
                Thay đổi ảnh đại diện
              </Text>
            </Box>
          </Button>
          <InputLabel label="Tên" value="Van loi" />
          <InputLabel label="Tên đăng nhập" value="vanloi11" />
          <InputLabel label="Email" value="dvl.codervn@gmail.com" />
          <InputLabel label="Mật khẩu" value="dvlcodervn" isPass />
          <Button
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

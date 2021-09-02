import {Container} from 'components';
import {
  Avatar,
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {colors, routes} from 'utils';
import {STATISTICAL} from './data';

const ProfileScreen = ({navigation}) => {
  const rInformation = useSelector(state => state.userInfo.data);

  const {email, profile} = rInformation || {};

  const _onSetting = () => {
    navigation.navigate(routes.COMMON_CONTAINER, {
      screen: routes.SETTING_PROFILE_SCREEN,
    });
  };

  const _onLogin = () => {
    navigation.navigate(routes.AUTH_CONTAINER, {
      screen: routes.SIGN_IN_SCREEN,
    });
  };

  return (
    <Container
      title="Hồ sơ"
      canGoBack={false}
      isLineBottom
      isSetting
      px={0}
      renderRight={() =>
        rInformation && (
          <Icon as={AntDesign} name="setting" size={7} color={colors.white} />
        )
      }
      onButtonRight={_onSetting}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {rInformation ? (
          <HStack
            px={3}
            pb={5}
            mb={5}
            borderBottomWidth={2}
            borderColor={colors.primaryText}>
            <Box flex={1}>
              <Text fontSize="lg" bold color={colors.white}>
                {profile?.full_name}
              </Text>
              <Text my={1} fontSize="sm" color={colors.primaryText}>
                {email}
              </Text>
              <HStack alignItems="center">
                <Icon
                  as={AntDesign}
                  name="clockcircle"
                  size="xs"
                  color={colors.white}
                />
                <Text ml={1} fontSize="xs" color={colors.white}>
                  Đã tham gia 12/10/2021
                </Text>
              </HStack>
            </Box>
            <Button p={0} bg="transparent" _pressed={{bg: 'transparent'}}>
              <Avatar
                borderWidth={1}
                borderColor={colors.white}
                size="xl"
                source={{
                  uri: profile?.image,
                }}
              />
              <Center
                position="absolute"
                top={0}
                left={0}
                width={8}
                height={8}
                borderRadius={20}
                borderWidth={1}
                borderColor={colors.white}
                backgroundColor={colors.darkPrimary}>
                <Icon
                  as={Feather}
                  name="camera"
                  size={4}
                  color={colors.white}
                />
              </Center>
            </Button>
          </HStack>
        ) : (
          <Button mx={3} my={5} onPress={_onLogin}>
            ĐĂNG NHẬP
          </Button>
        )}
        <Box px={3}>
          <Text fontSize="lg" bold color={colors.white}>
            Thống kê
          </Text>
          <Box
            mt={3}
            flexDirection="row"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-between">
            {STATISTICAL.map(({label, icon, value}) => (
              <Button
                _pressed={{bg: 'transparent'}}
                justifyContent="flex-start"
                borderRadius={15}
                borderWidth={2}
                borderColor={colors.primaryText}
                variant="outline"
                width="49%"
                mb={2}>
                <Box flexDirection="row">
                  <Image size={5} source={icon} mr={2} mt={1} />
                  <Box>
                    <Text fontSize="md" color={colors.white}>
                      {value}
                    </Text>
                    <Text fontSize="sm" color={colors.primaryText}>
                      {label}
                    </Text>
                  </Box>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
        <Box px={3} mt={5}>
          <Text fontSize="lg" bold color={colors.white}>
            Bạn bè
          </Text>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

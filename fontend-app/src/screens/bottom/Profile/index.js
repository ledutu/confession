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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
          <Icon as={AntDesign} name="setting" size={7} color={colors.blue} />
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
            borderColor={colors.primaryText}
            alignItems="center">
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
                size="lg"
                source={
                  profile?.image
                    ? {
                        uri: profile?.image,
                      }
                    : undefined
                }>
                {!profile?.image && profile?.full_name?.substring(0, 1)}
                <Center
                  position="absolute"
                  top={0}
                  right={-3}
                  width={5}
                  height={5}
                  borderRadius={20}
                  backgroundColor={colors.blue}>
                  <Icon
                    as={MaterialCommunityIcons}
                    name="pencil"
                    size={3}
                    color={colors.black}
                  />
                </Center>
              </Avatar>
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

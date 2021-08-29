import {Box, Button, Icon, Text} from 'native-base';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, routes} from 'utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title = 'Header',
  canGoBack = true,
  isLineBottom = false,
  isSetting = false,
  nameIcon = 'arrowleft',
  rightTitle,
  onGoBack,
}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _onGoBack = () => {
    onGoBack ? onGoBack() : navigation.goBack();
  };

  const _onSetting = () => {
    navigation.navigate(routes.COMMON_CONTAINER, {
      screen: routes.SETTING_PROFILE_SCREEN,
    });
  };

  return (
    <Box
      pt={top}
      bg={colors.primary}
      borderBottomWidth={isLineBottom ? 2 : 0}
      borderColor={colors.primaryText}>
      {canGoBack && (
        <Button
          top={top}
          left={0}
          bottom={0}
          px={3}
          position="absolute"
          backgroundColor="transparent"
          startIcon={
            <Icon
              as={AntDesign}
              name={nameIcon}
              size={6}
              color={colors.primaryText}
            />
          }
          onPress={_onGoBack}
        />
      )}
      <Box mx={12} py={3} justifyContent="center" alignItems="center">
        <Text bold numberOfLines={1} fontSize="lg" color={colors.primaryText}>
          {title}
        </Text>
      </Box>
      {(isSetting || rightTitle) && (
        <Button
          top={top}
          right={0}
          bottom={0}
          px={3}
          position="absolute"
          backgroundColor="transparent"
          startIcon={
            isSetting && (
              <Icon
                as={AntDesign}
                name="setting"
                size={7}
                color={colors.blue}
              />
            )
          }
          onPress={_onSetting}>
          {rightTitle && (
            <Text bold fontSize="md" color={colors.blue}>
              {rightTitle}
            </Text>
          )}
        </Button>
      )}
    </Box>
  );
};

export default Header;

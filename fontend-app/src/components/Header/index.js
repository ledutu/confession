import {Box, Button, Icon, Text} from 'native-base';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from 'utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title = 'Header',
  canGoBack = true,
  isLineBottom = false,
  isSetting = false,
  onGoBack,
}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _onGoBack = () => {
    onGoBack ? onGoBack() : navigation.goBack();
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
              name="arrowleft"
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
      {isSetting && (
        <Button
          top={top}
          right={0}
          bottom={0}
          px={3}
          position="absolute"
          backgroundColor="transparent"
          startIcon={
            <Icon as={AntDesign} name="setting" size={7} color={colors.blue} />
          }
          onPress={_onGoBack}
        />
      )}
    </Box>
  );
};

export default Header;

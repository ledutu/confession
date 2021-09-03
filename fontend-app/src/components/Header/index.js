import {useNavigation} from '@react-navigation/native';
import {Box, Button, Icon, Text} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from 'utils';

const Header = ({
  title = 'Header',
  canGoBack = true,
  nameIcon = 'arrowleft',
  renderRight,
  onButtonRight,
  onGoBack,
}) => {
  const navigation = useNavigation();

  const _onGoBack = () => {
    onGoBack ? onGoBack() : navigation.goBack();
  };

  const _renderRight = () => {
    return (
      <Button
        onPress={onButtonRight}
        safeAreaTop
        right={0}
        bottom={0}
        px={3}
        position="absolute"
        backgroundColor="transparent">
        {renderRight()}
      </Button>
    );
  };

  return (
    <Box safeAreaTop py={3} bg="brand.transparent" zIndex={10}>
      {canGoBack && (
        <Button
          safeAreaTop
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
              color={colors.white}
            />
          }
          onPress={_onGoBack}
        />
      )}
      <Box mx={12} justifyContent="center" alignItems="center">
        <Text bold numberOfLines={1} fontSize="lg" color={colors.white}>
          {title}
        </Text>
      </Box>
      {renderRight && _renderRight()}
    </Box>
  );
};

export default Header;

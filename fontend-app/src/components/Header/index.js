import {useNavigation} from '@react-navigation/native';
import {Box, Button, Icon, Text} from 'native-base';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from 'utils';

const Header = ({
  title = 'Header',
  canGoBack = true,
  isLineBottom = false,
  nameIcon = 'arrowleft',
  renderRight,
  onButtonRight,
  onGoBack,
}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  const _onGoBack = () => {
    onGoBack ? onGoBack() : navigation.goBack();
  };

  const _renderRight = () => {
    return (
      <Button
        onPress={onButtonRight}
        top={top}
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
      {renderRight && _renderRight()}
    </Box>
  );
};

export default Header;

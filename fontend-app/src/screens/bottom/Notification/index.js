import {Container} from 'components';
import {Avatar, Box, FlatList, HStack, Text, VStack} from 'native-base';
import React from 'react';

const NotificationScreen = () => {
  const _renderSeparator = () => <Box height={5} />;
  const _keyExtractor = (_, index) => String(index);

  const _renderItem = ({}) => {
    return (
      <HStack p={3} rounded={15} space={3} bg="brand.primary">
        <Avatar
          size="md"
          rounded={10}
          borderWidth={2}
          borderColor="brand.primaryText"
        />
        <VStack space={1} flex={1}>
          <Text color="white" fontSize="md">
            Title
          </Text>
          <Text color="brand.primaryText" fontSize="sm">
            Content
          </Text>
        </VStack>
        <Text color="brand.primaryText" fontSize="xs">
          12/21/2021
        </Text>
      </HStack>
    );
  };

  return (
    <Container title="Thông báo" canGoBack={false}>
      <FlatList
        data={[1, 1, 1, 1, 1, 1]}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default NotificationScreen;

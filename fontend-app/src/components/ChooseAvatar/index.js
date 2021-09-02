/* eslint-disable react-native/no-inline-styles */
import {
  Avatar,
  Box,
  Button,
  Center,
  FlatList,
  Icon,
  IconButton,
  Modal,
  Pressable,
  Text,
  useDisclose,
} from 'native-base';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {colors} from 'utils';
import {avatars} from './data';

const ChooseAvatar = props => {
  const [avatar, setAvatar] = useState('');
  const {isOpen, onOpen, onClose} = useDisclose();
  const rInformation = useSelector(state => state.userInfo.data);
  const {profile} = rInformation || {};

  const _renderSeparator = () => <Box h={5} />;

  const _renderItem = ({item, index}) => {
    const _onChoose = () => {
      onClose();
      setAvatar(item);
    };

    return (
      <Pressable key={index} onPress={_onChoose}>
        <Avatar
          borderWidth={2}
          borderColor={colors.white}
          size="xl"
          source={item}
        />
        {index === 0 && (
          <IconButton
            borderWidth={2}
            borderColor={colors.white}
            position="absolute"
            top={0}
            left={0}
            bottom={0}
            right={0}
            bg={colors.primary}
            rounded="full"
            _pressed={{bg: colors.primary}}
            icon={
              <Icon as={AntDesign} name="plus" size={8} color={colors.white} />
            }
          />
        )}
      </Pressable>
    );
  };

  return (
    <Box>
      <Button
        {...props}
        p={0}
        bg="transparent"
        _pressed={{bg: 'transparent'}}
        onPress={onOpen}>
        <Avatar
          borderWidth={2}
          borderColor={colors.white}
          size="xl"
          source={
            avatar || {
              uri: profile?.image,
            }
          }
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
          <Icon as={Feather} name="camera" size={4} color={colors.white} />
        </Center>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} justifyContent="flex-end">
        <Modal.Content
          w="100%"
          h={96}
          rounded={0}
          p={0}
          bg={colors.darkPrimary}>
          <Box py={3} alignItems="center" bg={colors.primary}>
            <Text fontSize="lg" color={colors.white}>
              Chọn ảnh đại diện
            </Text>
            <Box
              position="absolute"
              top={0}
              right={0}
              bottom={0}
              pr={3}
              justifyContent="center"
              alignItems="center">
              <IconButton
                onPress={onClose}
                bg={colors.primaryText}
                rounded="full"
                icon={
                  <Icon
                    as={AntDesign}
                    name="close"
                    size={4}
                    color={colors.white}
                  />
                }
              />
            </Box>
          </Box>
          <FlatList
            safeAreaBottom
            flex={1}
            mt={3}
            numColumns={3}
            data={avatars}
            showsVerticalScrollIndicator={false}
            renderItem={_renderItem}
            ItemSeparatorComponent={_renderSeparator}
            contentContainerStyle={{paddingBottom: 12}}
            columnWrapperStyle={{justifyContent: 'space-around'}}
          />
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default ChooseAvatar;

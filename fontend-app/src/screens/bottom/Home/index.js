import {Container} from 'components';
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Icon,
  Pressable,
  Text,
} from 'native-base';
import React, {useEffect} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import actions from 'store/actions';
import {colors} from 'utils';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const rQuestion = useSelector(state => state.question);
  const rLogin = useSelector(state => state.login.data);

  useEffect(() => {
    if (rLogin?.access_token) {
      dispatch({
        type: actions.GET_QUESTION,
      });
    }
  }, [dispatch, rLogin]);

  const _renderSeparator = () => <Box height={5} />;

  const _keyExtractor = item => item?._id;

  const _renderItem = ({item}) => {
    return (
      <Box
        p={3}
        rounded={15}
        bg="brand.primary"
        borderWidth={4}
        borderColor="brand.primaryText">
        <HStack alignItems="center" space={3}>
          <Avatar
            flex={1 / 4}
            size={20}
            borderWidth={8}
            rounded={20}
            borderColor="brand.primaryText"
            alt="Alternate Text"
          />
          <Text
            flex={1}
            fontSize="lg"
            color="white"
            textTransform="uppercase"
            numberOfLines={2}>
            Câu hỏi về tình yêu
          </Text>
        </HStack>
        <HStack justifyContent="space-between" mt={3} space={1}>
          <HStack
            flex={1 / 3}
            space={1}
            justifyContent="center"
            alignItems="center">
            <Icon as={Ionicons} name="eye" size={4} color="brand.primaryText" />
            <Text fontSize="sm" color="brand.primaryText" numberOfLines={1}>
              200
            </Text>
          </HStack>
          <Pressable flex={1}>
            <Box
              p={3}
              rounded="lg"
              justifyContent="center"
              alignItems="center"
              bg={{
                linearGradient: {
                  colors: colors.gradient,
                  start: [0, 0],
                  end: [1, 0],
                },
              }}>
              <Text color="white">Trả lời</Text>
            </Box>
          </Pressable>
        </HStack>
      </Box>
    );
  };

  return (
    <Container title="Trang chủ" canGoBack={false}>
      <FlatList
        data={rQuestion.data}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        ItemSeparatorComponent={_renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;

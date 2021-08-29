import {Box} from 'native-base';
import React from 'react';
import {ActivityIndicator, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from 'utils';

const Loading = () => {
  const modalLoad = useSelector(state => state.modalLoad);

  return (
    <Modal visible={modalLoad} transparent={true}>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        bg={colors.lightBlack}>
        <ActivityIndicator size="large" color={colors.white} />
      </Box>
    </Modal>
  );
};

export default Loading;

import {Modal, Spinner} from 'native-base';
import React from 'react';
import {useSelector} from 'react-redux';

const Loading = () => {
  const modalLoad = useSelector(state => state.modalLoad);

  return (
    <Modal isOpen={modalLoad}>
      <Spinner />
    </Modal>
  );
};

export default Loading;

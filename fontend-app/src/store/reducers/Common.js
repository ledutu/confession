import actions from 'store/actions';

const modalLoad = (state = false, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL_LOAD:
      return true;

    case actions.CLOSE_MODAL_LOAD:
      return false;

    default:
      return state;
  }
};

export default {modalLoad};

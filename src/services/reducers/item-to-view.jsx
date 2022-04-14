import { OPEN_MODAL, CLOSE_MODAL } from "../actions/item-to-view";

const initialState = {
  modal: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modal: action.modal,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modal: action.modal,
      };
    }
    default: {
      return state;
    }
  }
};

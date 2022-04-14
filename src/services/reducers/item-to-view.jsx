import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL_ORDER,
  CLOSE_MODAL_ORDER,
} from "../actions/item-to-view";

const initialState = {
  modal: false,
  modalOrder: false,
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modal: action.modal,
        id: action.id,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modal: action.modal,
      };
    }

    case OPEN_MODAL_ORDER: {
      return {
        ...state,
        modalOrder: action.modalOrder,
      };
    }
    case CLOSE_MODAL_ORDER: {
      return {
        ...state,
        modalOrder: action.modalOrder,
      };
    }
    default: {
      return state;
    }
  }
};

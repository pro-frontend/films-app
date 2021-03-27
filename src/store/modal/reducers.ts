import { Tmode } from "../../components/Modal/Modal.types";
import { MODAL_CLOSE, MODAL_OPEN } from "./actions";

const initialState = {
  modalActive: false,
  mode: Tmode.CREATE,
};

export const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        modalActive: true,
        mode: payload,
      };

    case MODAL_CLOSE:
      return {
        ...state,
        modalActive: false,
      };

    default:
      return state;
  }
};

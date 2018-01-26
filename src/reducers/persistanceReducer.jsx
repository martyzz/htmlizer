import {
  LOADING_UPDATE,
  NOT_FOUND_UPDATE,
  SAVING_UPDATE
} from "../types/persistanceTypes";

export default (
  state = {
    isLoading: true,
    isSaving: false,
    notFound: false
  },
  action
) => {
  switch (action.type) {
    case LOADING_UPDATE:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case SAVING_UPDATE:
      return {
        ...state,
        isSaving: action.isSaving
      };

    case NOT_FOUND_UPDATE:
      return {
        ...state,
        notFound: action.notFound
      };

    default:
      return state;
  }
};

import { UPDATE_FILTER_TEXT } from "../types/elementsTypes";

import templates from "../templates";

export default (
  state = {
    items: templates,
    filterText: ""
  },
  action
) => {
  switch (action.type) {
    case UPDATE_FILTER_TEXT:
      return {
        ...state,
        filterText: action.filterText
      };

    default:
      return state;
  }
};

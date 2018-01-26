import { UPDATE_FILTER_TEXT } from "../types/elementsTypes";

export const elementsFilterTextUpdate = filterText => {
  return {
    type: UPDATE_FILTER_TEXT,
    filterText
  };
};

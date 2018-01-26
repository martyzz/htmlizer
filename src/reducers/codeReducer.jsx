import { UPDATE } from "../types/codeTypes";

export default (state = "", action) => {
  switch (action.type) {
    case UPDATE:
      return action.code;

    default:
      return state;
  }
};

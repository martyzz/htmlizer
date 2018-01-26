import { UPDATE } from "../types/codeTypes";
import branchesToCode from "../utilities/converters/branchesToCode";

export const codeUpdate = code => {
  return {
    type: UPDATE,
    code
  };
};

export const codeUpdateFromBranches = branches => {
  const code = branchesToCode(branches);
  return codeUpdate(code);
};

import { stringify } from "himalaya";
import pretty from "pretty";

import { detachEmptyAttributes } from "../branches/emptyAttributes";

import _ from "lodash";

const branchesToCode = branches => {
  const clonedBranches = _.cloneDeep(branches);
  const detachedBranches = detachEmptyAttributes(clonedBranches);
  const code = stringify(detachedBranches);
  const prettyCode = pretty(code, { ocd: true });

  return prettyCode;
};

export default branchesToCode;

import uuidv1 from "uuid/v1";
import _ from "lodash";

const asignIdentifiers = (branches, isFirst = true) => {
  const handler = branch => {
    branch.id = uuidv1();
    if (branch.children)
      branch.children = asignIdentifiers(branch.children, false);
  };

  if (isFirst) handler(branches);
  else branches.forEach(handler);

  return branches;
};

const branchCopy = (branches, branchId) => {
  const clonedBranches = _.cloneDeep(branches);

  const walk = branches => {
    const target = { index: -1, branch: null, exists: false };

    branches.forEach((branch, index) => {
      if (branch.id === branchId) {
        target.index = index + 1;
        target.branch = branch;
        target.exists = true;
      }

      if (branch.children) branch.children = walk(branch.children);
    });

    if (target.exists) {
      const copiedBranch = _.cloneDeep(target.branch);
      const asignedBranch = asignIdentifiers(copiedBranch);

      branches.splice(target.index, 0, asignedBranch);
    }

    return branches;
  };

  const newBranches = walk(clonedBranches);
  return newBranches;
};

export default branchCopy;

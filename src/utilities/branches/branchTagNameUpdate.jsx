import _ from "lodash";

const branchContentUpdate = (branches, branchId, updatedTagName) => {
  const clonedBranches = _.cloneDeep(branches);

  const walk = branches => {
    branches.forEach(branch => {
      if (branch.id === branchId) {
        branch.tagName = updatedTagName;
      }

      if (branch.children) branch.children = walk(branch.children);
    });

    return branches;
  };

  const newBranches = walk(clonedBranches);
  return newBranches;
};

export default branchContentUpdate;

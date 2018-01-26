import _ from "lodash";

const branchRemove = (branches, branchId) => {
  const clonedBranches = _.cloneDeep(branches);

  const walk = branches => {
    const indicies = [];

    branches.forEach((branch, index) => {
      if (branch.id === branchId) {
        indicies.push(index);
      }

      if (branch.children) branch.children = walk(branch.children);
    });

    for (let i = indicies.length - 1; i >= 0; i--) {
      branches.splice(indicies[i], 1);
    }

    return branches;
  };

  const newBranches = walk(clonedBranches);
  return newBranches;
};

export default branchRemove;

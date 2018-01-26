import _ from "lodash";

import getBranchAttributeLengthSum from "./getBranchAttributeLengthSum";

const branchAttributeUpdate = (
  branches,
  branchId,
  attributeIndex,
  updatedAttribute
) => {
  const clonedBranches = _.cloneDeep(branches);

  const operation =
    getBranchAttributeLengthSum(updatedAttribute) > 0 ? "update" : "remove";

  const walk = branches => {
    branches.forEach((branch, index) => {
      if (branch.id === branchId) {
        switch (operation) {
          case "update":
            branch.attributes[attributeIndex] = updatedAttribute;
            break;
          case "remove":
            branch.attributes.splice(attributeIndex, 1);
            break;
          default:
            break;
        }
      }

      if (branch.children) branch.children = walk(branch.children);
    });

    return branches;
  };

  const newBranches = walk(clonedBranches);
  return newBranches;
};

export default branchAttributeUpdate;

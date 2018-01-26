import { parse } from "himalaya";
import uuidv1 from "uuid/v1";
import _ from "lodash";

const cleanBranches = branches => {
  const walk = branches => {
    const indicies = [];

    branches.forEach((branch, index) => {
      if (branch.type === "text" && /^\s*$/.test(branch.content))
        indicies.push(index);

      if (branch.children) {
        branch.expanded = true;
        branch.children = walk(branch.children);
      }
    });

    for (let i = indicies.length - 1; i >= 0; i--)
      branches.splice(indicies[i], 1);

    return branches;
  };

  const walkedBranches = walk(branches);
  return walkedBranches;
};

const reasignBranches = (branches, oldBranches) => {
  const walk = (branches, oldBranches) => {
    branches.forEach((branch, index) => {
      const oldBranch = oldBranches[index];

      if (!oldBranch) branch.id = uuidv1();
      else branch.id = oldBranch.id;

      if (branch.children) {
        branch.children = walk(
          branch.children,
          oldBranch ? oldBranch.children || [] : []
        );
      }
    });

    return branches;
  };

  const walkedBranches = walk(branches, oldBranches);
  return walkedBranches;
};

const codeToBranches = (code, oldBranches) => {
  const branches = parse(code);
  const clonedBranches = _.cloneDeep(branches);
  const cleanedBranches = cleanBranches(clonedBranches);
  const reasignedBranches = reasignBranches(cleanedBranches, oldBranches);

  return reasignedBranches;
};

export default codeToBranches;

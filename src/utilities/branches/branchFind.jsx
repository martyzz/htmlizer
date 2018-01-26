const branchFind = (branches, branchId) => {
  let matchedBranch = null;

  const walk = branches => {
    branches.forEach(branch => {
      if (branch.id === branchId) matchedBranch = branch;
      if (branch.children) walk(branch.children);
    });

    return branches;
  };

  walk(branches);

  return matchedBranch;
};

export default branchFind;

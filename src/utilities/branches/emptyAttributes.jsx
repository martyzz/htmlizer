import getBranchAttributeLengthSum from "./getBranchAttributeLengthSum";

const walk = (branches, method) => {
  branches.forEach(branch => {
    if (!branch.attributes) branch.attributes = [];
    branch.attributes = method(branch.attributes);
    if (branch.children) branch.children = walk(branch.children, method);
  });

  return branches;
};

export const appendEmptyAttributes = branches => {
  return walk(branches, attributes => {
    const emptyAttribute = {
      key: "",
      value: ""
    };

    if (attributes.length > 0) {
      const lastAttribute = attributes[attributes.length - 1];
      const lastLength = getBranchAttributeLengthSum(lastAttribute);

      if (lastLength !== 0) {
        attributes.push(emptyAttribute);
      }
    } else {
      attributes.push(emptyAttribute);
    }

    return attributes;
  });
};

export const detachEmptyAttributes = branches => {
  return walk(branches, attributes => {
    for (let i = attributes.length - 1; i >= 0; i--) {
      const attribute = attributes[i];
      const length = getBranchAttributeLengthSum(attribute);

      if (length === 0) {
        attributes.splice(i, 1);
      }

      if (typeof attribute.value === "string" && attribute.value.length === 0) {
        attribute.value = null;
      }
    }

    return attributes;
  });
};

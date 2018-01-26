const getBranchAttributeLengthSum = attribute => {
  let sum = 0;

  if (attribute) {
    if (attribute.key) sum += attribute.key.length;
    if (attribute.value) sum += attribute.value.length;
  }

  return sum;
};

export default getBranchAttributeLengthSum;
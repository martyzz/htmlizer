import getBranchAttributeLengthSum from "../../../utilities/branches/getBranchAttributeLengthSum";

describe("getBranchAttributeLengthSum", () => {
  it("should correctly compute attribute lenght", () => {
    const inputAttribute = { key: "123", value: "456" };
    const expectedLength = 6;
    const resultLength = getBranchAttributeLengthSum(inputAttribute);
    expect(resultLength).toBe(expectedLength);
  });

  it("should be able to work with null values", () => {
    const inputAttribute = { key: null, value: "456" };
    const expectedLength = 3;
    const resultLength = getBranchAttributeLengthSum(inputAttribute);
    expect(resultLength).toBe(expectedLength);
  });

  it("should be able to work with undefined values", () => {
    const inputAttribute = { key: "", value: undefined };
    const expectedLength = 0;
    const resultLength = getBranchAttributeLengthSum(inputAttribute);
    expect(resultLength).toBe(expectedLength);
  });
});

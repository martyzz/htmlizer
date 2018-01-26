import branchTagNameUpdate from "../../../utilities/branches/branchTagNameUpdate";

describe("branchTagNameUpdate", () => {
  it("should successfully update tag name of a branch", () => {
    const inputBranches = [
      {
        id: "1234",
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "cs" }]
      }
    ];
    const expectedBranches = [
      {
        id: "1234",
        type: "element",
        tagName: "body",
        attributes: [{ key: "lang", value: "cs" }]
      }
    ];
    const resultBranches = branchTagNameUpdate(inputBranches, "1234", "body");
    expect(resultBranches).toEqual(expectedBranches);
  });
});

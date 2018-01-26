import branchAttributeUpdate from "../../../utilities/branches/branchAttributeUpdate";

describe("branchAttributeUpdate", () => {
  it("should successfully update attribute of a branch", () => {
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
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }]
      }
    ];
    const resultBranches = branchAttributeUpdate(inputBranches, "1234", 0, {
      key: "lang",
      value: "en"
    });

    expect(resultBranches).toEqual(expectedBranches);
  });

  it("should successfully remove attribute of a branch", () => {
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
        tagName: "html",
        attributes: []
      }
    ];
    const resultBranches = branchAttributeUpdate(inputBranches, "1234", 0, {
      key: "",
      value: ""
    });

    expect(resultBranches).toEqual(expectedBranches);
  });
});

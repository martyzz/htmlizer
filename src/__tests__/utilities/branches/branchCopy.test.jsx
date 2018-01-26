import branchCopy from "../../../utilities/branches/branchCopy";

describe("branchCopy", () => {
  let inputBranches;

  beforeEach(() => {
    inputBranches = [
      {
        id: "1234",
        type: "element",
        tagName: "html",
        attributes: [],
        children: [
          {
            id: "5678",
            type: "text",
            content: "example content"
          }
        ]
      }
    ];
  });

  it("should successfully copy a branch and place it after coppied one", () => {
    const resultBranches = branchCopy(inputBranches, "5678");
    expect(resultBranches[0].children[1]).toBeDefined();
    expect(resultBranches[0].children[1].content).toBe("example content");
  });

  it("should generate new identifier for copied branch", () => {
    const resultBranches = branchCopy(inputBranches, "5678");
    expect(resultBranches[0].children[1].id).toBeDefined();
    expect(resultBranches[0].children[1].id).not.toBe("5678");
  });
});

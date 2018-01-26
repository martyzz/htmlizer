import branchContentUpdate from "../../../utilities/branches/branchContentUpdate";

describe("branchContentUpdate", () => {
  it("should successfully update content of a branch", () => {
    const inputBranches = [
      {
        id: "1234",
        type: "text",
        content: "initial content"
      }
    ];
    const expectedBranches = [
      {
        id: "1234",
        type: "text",
        content: "changed content"
      }
    ];
    const resultBranches = branchContentUpdate(
      inputBranches,
      "1234",
      "changed content"
    );
    expect(resultBranches).toEqual(expectedBranches);
  });
});

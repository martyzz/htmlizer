import branchRemove from "../../../utilities/branches/branchRemove";
import uuidv1 from "uuid/v1";

describe("branchRemove", () => {
  let expectedIdentifier;
  let expectedBranches;
  let inputBranches;

  beforeEach(() => {
    expectedIdentifier = uuidv1();
    const testIdentifier1 = uuidv1();
    const testIdentifier2 = uuidv1();

    inputBranches = [
      {
        id: testIdentifier1,
        type: "element",
        tagName: "!doctype",
        attributes: [{ key: "html", value: "" }],
        children: [],
        expanded: true
      },
      {
        id: testIdentifier2,
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }],
        children: [
          {
            id: expectedIdentifier,
            type: "element",
            tagName: "body",
            attributes: [],
            children: [
              { id: uuidv1(), type: "text", content: "Welcome to htmlizer..." }
            ],
            expanded: true
          }
        ],
        expanded: true
      }
    ];

    expectedBranches = [
      {
        id: testIdentifier1,
        type: "element",
        tagName: "!doctype",
        attributes: [{ key: "html", value: "" }],
        children: [],
        expanded: true
      },
      {
        id: testIdentifier2,
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }],
        children: [],
        expanded: true
      }
    ];
  });

  it("should successfully remove a branch for an identifier", () => {
    const resultBranches = branchRemove(inputBranches, expectedIdentifier);
    expect(resultBranches).toEqual(expectedBranches);
  });
});

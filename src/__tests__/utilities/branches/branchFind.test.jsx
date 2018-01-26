import branchFind from "../../../utilities/branches/branchFind";
import uuidv1 from "uuid/v1";

describe("branchFind", () => {
  let expectedIdentifier;
  let expectedBranch;
  let inputBranches;

  beforeEach(() => {
    expectedIdentifier = uuidv1();

    expectedBranch = {
      id: expectedIdentifier,
      type: "element",
      tagName: "meta",
      attributes: [{ key: "charset", value: "UTF-8" }],
      children: [],
      expanded: true
    };

    inputBranches = [
      {
        id: uuidv1(),
        type: "element",
        tagName: "!doctype",
        attributes: [{ key: "html", value: "" }],
        children: [],
        expanded: true
      },
      {
        id: uuidv1(),
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }],
        children: [
          {
            id: uuidv1(),
            type: "element",
            tagName: "head",
            attributes: [],
            children: [
              { ...expectedBranch },
              {
                id: uuidv1(),
                type: "element",
                tagName: "title",
                attributes: [],
                children: [{ id: uuidv1(), type: "text", content: "htmlizer" }],
                expanded: true
              }
            ],
            expanded: true
          },
          {
            id: uuidv1(),
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
  });

  it("should successfully find a branch for an identifier", () => {
    const resultBranch = branchFind(inputBranches, expectedIdentifier);
    expect(resultBranch).toEqual(expectedBranch);
  });

  it("should result in null if it does not found an identifier", () => {
    const resultBranch = branchFind(inputBranches, uuidv1());
    expect(resultBranch).toBeNull();
  });
});

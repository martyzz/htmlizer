import elementFilter from "../../../utilities/filters/elementsFilter";
import elements from "../../../templates";

describe("elementFilter", () => {
  it("should successfully filter elements", () => {
    const inputQuery = "are";

    const expectedElements = [
      {
        type: "element",
        tagName: "area",
        attributes: [
          { key: "alt", value: "" },
          { key: "coords", value: "" },
          { key: "shape", value: "" },
          { key: "href", value: "" },
          { key: "target", value: "" },
          { key: "ping", value: "" },
          { key: "rel", value: "" },
          { key: "media", value: "" },
          { key: "hreflang", value: "" },
          { key: "type", value: "" }
        ],
        children: [],
        expanded: true
      },
      {
        type: "element",
        tagName: "textarea",
        attributes: [
          { key: "cols", value: "" },
          { key: "name", value: "" },
          { key: "placeholder", value: "" },
          { key: "rows", value: "" }
        ],
        children: [],
        expanded: true
      }
    ];

    const resultElements = elementFilter(elements, inputQuery);
    expect(resultElements).toEqual(expectedElements);
  });
});

import {
  appendEmptyAttributes,
  detachEmptyAttributes
} from "../../../utilities/branches/emptyAttributes";

describe("emptyAttributes", () => {
  describe("appendEmptyAttributes", () => {
    it("should append an empty attribute (it not present) to all attribute arrays", () => {
      const inputBranches = [
        {
          id: "1234",
          attributes: [{ key: "key", value: "value" }],
          children: [
            {
              id: "5678",
              attributes: [{ key: "key2", value: "value2" }]
            }
          ]
        }
      ];

      const expectedBranches = [
        {
          id: "1234",
          attributes: [{ key: "key", value: "value" }, { key: "", value: "" }],
          children: [
            {
              id: "5678",
              attributes: [
                { key: "key2", value: "value2" },
                { key: "", value: "" }
              ]
            }
          ]
        }
      ];

      const resultBranches = appendEmptyAttributes(inputBranches);
      expect(resultBranches).toEqual(expectedBranches);
    });

    it("should append an empty attribute to all empty attribute arrays", () => {
      const inputBranches = [
        {
          id: "1234",
          attributes: [],
          children: [
            {
              id: "5678",
              attributes: []
            }
          ]
        }
      ];

      const expectedBranches = [
        {
          id: "1234",
          attributes: [{ key: "", value: "" }],
          children: [
            {
              id: "5678",
              attributes: [{ key: "", value: "" }]
            }
          ]
        }
      ];

      const resultBranches = appendEmptyAttributes(inputBranches);
      expect(resultBranches).toEqual(expectedBranches);
    });
  });

  describe("detachEmptyAttributes", () => {
    it("should detach all empty attributes from all attribute arrays", () => {
      const inputBranches = [
        {
          id: "1234",
          attributes: [{ key: "", value: "" }, { key: "key", value: "value" }],
          children: [
            {
              id: "5678",
              attributes: [
                { key: "key2", value: "value2" },
                { key: "", value: "" }
              ]
            }
          ]
        }
      ];

      const expectedBranches = [
        {
          id: "1234",
          attributes: [{ key: "key", value: "value" }],
          children: [
            {
              id: "5678",
              attributes: [{ key: "key2", value: "value2" }]
            }
          ]
        }
      ];

      const resultBranches = detachEmptyAttributes(inputBranches);
      expect(resultBranches).toEqual(expectedBranches);
    });

    it("should set attribute value to null if attribute value is empty", () => {
      const inputBranches = [
        {
          id: "1234",
          attributes: [
            { key: "key", value: "" },
            { key: "key2", value: "value2" }
          ],
          children: [
            {
              id: "5678",
              attributes: [
                { key: "key3", value: "value3" },
                { key: "key4", value: "" }
              ]
            }
          ]
        }
      ];

      const expectedBranches = [
        {
          id: "1234",
          attributes: [
            { key: "key", value: null },
            { key: "key2", value: "value2" }
          ],
          children: [
            {
              id: "5678",
              attributes: [
                { key: "key3", value: "value3" },
                { key: "key4", value: null }
              ]
            }
          ]
        }
      ];

      const resultBranches = detachEmptyAttributes(inputBranches);
      expect(resultBranches).toEqual(expectedBranches);
    });
  });
});

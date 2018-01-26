import codeToBranches from "../../../utilities/converters/codeToBranches";

describe("codeToBranches", () => {
  it("should be able to successfully convert code to branches and persist ids", () => {
    const inputOldBranches = [
      {
        id: "1",
        children: []
      },
      {
        id: "2",
        children: [
          {
            id: "3",
            children: [
              {
                id: "4",
                children: []
              },
              {
                id: "5",
                children: [{ id: "6" }]
              }
            ]
          },
          {
            id: "6",
            children: [
              {
                id: "7"
              }
            ]
          }
        ]
      }
    ];

    const inputCode = [
      "<!doctype html>",
      "<html lang='en'>",
      "  <head>",
      "    <meta charset='UTF-8'>",
      "    <title>htmlizer</title>",
      "  </head>",
      "  <body>Welcome to htmlizer...</body>",
      "</html>"
    ].join("\n");

    const expectedBranches = [
      {
        id: "1",
        type: "element",
        tagName: "!doctype",
        attributes: [{ key: "html", value: null }],
        expanded: true,
        children: []
      },
      {
        id: "2",
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }],
        expanded: true,
        children: [
          {
            id: "3",
            type: "element",
            tagName: "head",
            attributes: [],
            expanded: true,
            children: [
              {
                id: "4",
                type: "element",
                tagName: "meta",
                attributes: [{ key: "charset", value: "UTF-8" }],
                expanded: true,
                children: []
              },
              {
                id: "5",
                type: "element",
                tagName: "title",
                attributes: [],
                expanded: true,
                children: [{ id: "6", type: "text", content: "htmlizer" }]
              }
            ]
          },
          {
            id: "6",
            type: "element",
            tagName: "body",
            attributes: [],
            expanded: true,
            children: [
              {
                id: "7",
                type: "text",
                content: "Welcome to htmlizer..."
              }
            ]
          }
        ]
      }
    ];

    const resultBranches = codeToBranches(inputCode, inputOldBranches);
    expect(resultBranches).toEqual(expectedBranches);
  });
});

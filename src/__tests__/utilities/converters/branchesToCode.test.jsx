import branchesToCode from "../../../utilities/converters/branchesToCode";

describe("branchesToCode", () => {
  it("should be able to successfully convert branches to code", () => {
    const inputBranches = [
      {
        type: "element",
        tagName: "!doctype",
        attributes: [{ key: "html", value: "" }],
        children: []
      },
      {
        type: "element",
        tagName: "html",
        attributes: [{ key: "lang", value: "en" }],
        children: [
          {
            type: "element",
            tagName: "head",
            attributes: [],
            children: [
              {
                type: "element",
                tagName: "meta",
                attributes: [{ key: "charset", value: "UTF-8" }],
                children: []
              },
              {
                type: "element",
                tagName: "title",
                attributes: [],
                children: [{ type: "text", content: "htmlizer" }]
              }
            ]
          },
          {
            type: "element",
            tagName: "body",
            attributes: [],
            children: [{ type: "text", content: "Welcome to htmlizer..." }]
          }
        ]
      }
    ];

    const expectedCode = [
      "<!doctype html>",
      "<html lang='en'>",
      "  <head>",
      "    <meta charset='UTF-8'>",
      "    <title>htmlizer</title>",
      "  </head>",
      "  <body>Welcome to htmlizer...</body>",
      "</html>"
    ].join("\n");

    const resultCode = branchesToCode(inputBranches);
    expect(resultCode).toEqual(expectedCode);
  });
});

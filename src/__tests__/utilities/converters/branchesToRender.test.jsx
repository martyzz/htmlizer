import branchesToRender from "../../../utilities/converters/branchesToRender";

describe("branchesToRender", () => {
  it("should be able to successfully convert branches to render code", () => {
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

    const expectedDecodedUri = [
      "<!doctype html><html lang='en'><head><meta charset='UTF-8'><title>htmlizer</title><style>",
      "  body {",
      "    color: white;",
      "  }",
      "</style></head><body>Welcome to htmlizer...<script>",
      '  document.addEventListener("DOMContentLoaded", function(event) {',
      "    var scrollHeight = document.body.scrollHeight;",
      "    parent.postMessage(",
      '      { type: "htmlizer/RENDER_SCROLL_HEIGHT", value: scrollHeight },',
      '      "http://localhost"',
      "    );",
      "  });",
      "</script></body></html>"
    ].join("\n");

    const resutlRenderCode = branchesToRender(inputBranches);
    const resultUri = resutlRenderCode.split(/,(.+)/)[1];
    const resultDecodedUri = decodeURI(resultUri);
    expect(resultDecodedUri).toEqual(expectedDecodedUri);
  });
});

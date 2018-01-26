import formatAttributes from "../../utilities/formatters/formatAttributes";
import formatContent from "../../utilities/formatters/formatContent";

describe("formatters", () => {
  describe("formatAttributes", () => {
    it("should successfully return formated string with shortening", () => {
      const inputAttributes = [
        { key: "html", value: null },
        { key: "charset", value: "utf-8" },
        { key: "title", value: "my title" }
      ];

      const expectedString = "html charset=utf-8 title=my...";

      const resultString = formatAttributes(inputAttributes, 30);
      expect(resultString).toBe(expectedString);
    });

    it("should successfully return formated string without shortening", () => {
      const inputAttributes = [
        { key: "html", value: null },
        { key: "charset", value: "utf-8" },
        { key: "title", value: "my title" }
      ];

      const expectedString = "html charset=utf-8 title=my title";

      const resultString = formatAttributes(inputAttributes, 50);
      expect(resultString).toBe(expectedString);
    });
  });

  describe("formatContent", () => {
    it("should successfully return shortened string", () => {
      const inputContent = "this is some example content";
      const expectedContent = "this is some...";

      const resultContent = formatContent(inputContent, 15);
      expect(resultContent).toBe(expectedContent);
    });

    it("should successfully return full string", () => {
      const content = "this is some example content";

      const resultContent = formatContent(content, 100);
      expect(resultContent).toBe(content);
    });
  });
});

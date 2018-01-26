import { stringify } from "himalaya";
import _ from "lodash";

import { detachEmptyAttributes } from "../branches/emptyAttributes";

export const RENDER_SCROLL_HEIGHT = "htmlizer/RENDER_SCROLL_HEIGHT";
const { location: { origin } } = window;

const scriptText = `
  document.addEventListener("DOMContentLoaded", function(event) {
    var scrollHeight = document.body.scrollHeight;
    parent.postMessage(
      { type: "${RENDER_SCROLL_HEIGHT}", value: scrollHeight },
      "${origin}"
    );
  });
`;

const styleText = `
  body {
    color: white;
  }
`;

const scriptBranch = {
  type: "element",
  tagName: "script",
  attributes: [],
  children: [{ type: "text", content: scriptText }]
};

const styleBranch = {
  type: "element",
  tagName: "style",
  attributes: [],
  children: [{ type: "text", content: styleText }]
};

const appendHierarchyBranch = (branches, targetBranch, succession) => {
  let branchFound = false;

  const walk = (branches, tagName) => {
    if (branchFound) return branches;

    branches.forEach(branch => {
      if (branch.type === "element" && branch.tagName === tagName) {
        if (!branch.children) branch.children = [];
        branch.children.push(targetBranch);
        branchFound = true;
        return branches;
      }

      if (branch.children) {
        branch.children = walk(branch.children, tagName);
      }
    });

    return branches;
  };

  let resultBranches;

  for (let tagName of succession) {
    resultBranches = walk(branches, tagName);
    if (branchFound) return resultBranches;
  }

  resultBranches = [...branches, targetBranch];

  return resultBranches;
};

const branchesToRender = branches => {
  const clonedBranches = _.cloneDeep(branches);
  const detachedBranches = detachEmptyAttributes(clonedBranches);

  const branchesWithScript = appendHierarchyBranch(
    detachedBranches,
    scriptBranch,
    ["body", "head"]
  );
  const branchesWithScriptAndStyle = appendHierarchyBranch(
    branchesWithScript,
    styleBranch,
    ["head"]
  );

  const code = stringify(branchesWithScriptAndStyle);
  return "data:text/html;charset=utf-8," + encodeURI(code);
};

export default branchesToRender;

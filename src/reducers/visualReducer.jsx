import { UPDATE_BRANCHES, UPDATE_SELECTED_ID } from "../types/visualTypes";
import uuidv1 from "uuid/v1";

export default (
  state = {
    selectedId: null,
    branches: [
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
              {
                id: uuidv1(),
                type: "element",
                tagName: "meta",
                attributes: [{ key: "charset", value: "UTF-8" }],
                children: [],
                expanded: true
              },
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
    ]
  },
  action
) => {
  switch (action.type) {
    case UPDATE_BRANCHES:
      return {
        ...state,
        branches: action.branches
      };

    case UPDATE_SELECTED_ID:
      return {
        ...state,
        selectedId: action.selectedId
      };

    default:
      return state;
  }
};

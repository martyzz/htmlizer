import { combineReducers } from "redux";

import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import visualReducer from "./visualReducer";
import codeReducer from "./codeReducer";
import elementsReducer from "./elementsReducer";
import persistanceReducer from "./persistanceReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  form: formReducer,
  visual: visualReducer,
  code: codeReducer,
  elements: elementsReducer,
  persistance: persistanceReducer
});

export default rootReducer;

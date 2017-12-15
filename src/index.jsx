import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

import App from "./components/App";
import registerServiceWorker from "./utilities/registerServiceWorker";
import rootReducer from "./reducers";

import "./assets/sass/index.sass";

const history = createHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(routerMiddleware(history), reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.querySelector("#root")
);

registerServiceWorker();

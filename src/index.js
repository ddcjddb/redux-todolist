import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { createStore } from "redux";
import todoApp from "./Reducers";
import App from "./components/App";

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

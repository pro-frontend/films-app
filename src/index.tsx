import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/AppRoot";
import ErrorBoundary from "./components/ErrorBoundary";
import { store } from "./store";
import "./style.scss";

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <AppRoot />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));

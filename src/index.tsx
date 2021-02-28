import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";
import ErrorBoundary from "./components/ErrorBoundary";
import "./style.scss";

const Root = () => (
  <StrictMode>
    <ErrorBoundary>
      <AppRoot />
    </ErrorBoundary>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));

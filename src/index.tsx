import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import RecoilizeDebugger from "recoilize";
import AppRoot from "./components/AppRoot";
import ErrorBoundary from "./components/ErrorBoundary";
import { atomNodes } from "./store";
import "./style.scss";

const rootComponent = document.getElementById("root");

const Root = () => (
  <StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <RecoilizeDebugger nodes={atomNodes} root={rootComponent} />
        <AppRoot />
      </RecoilRoot>
    </ErrorBoundary>
  </StrictMode>
);

ReactDOM.render(<Root />, rootComponent);

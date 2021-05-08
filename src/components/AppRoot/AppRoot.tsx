import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import RecoilizeDebugger from "recoilize";
import { atomNodes } from "../../store";
import "../../styles/index.scss";
import ErrorBoundary from "../ErrorBoundary";
import { AppRouter } from "../Routes";

const rootComponent = document.getElementById("root");

const AppRoot = () => (
  <StrictMode>
    <ErrorBoundary>
      <RecoilRoot>
        <RecoilizeDebugger nodes={atomNodes} root={rootComponent} />
        <AppRouter />
      </RecoilRoot>
    </ErrorBoundary>
  </StrictMode>
);

export { AppRoot, rootComponent };

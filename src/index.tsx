import "@fontsource/roboto";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Paper } from "./components/Animated";
import AppRoot from "./components/AppRoot";
import ErrorBoundary from "./components/ErrorBoundary";
import "./style.scss";

const Root = () => (
  <StrictMode>
    <ErrorBoundary>
      <Paper
        whileHover={{
          y: 100,
          transition: { duration: 0.3 },
        }}
        drag
        dragConstraints={{ left: 0, right: 300 }}
        dragElastic={0.2}
      >
        Box
        <AppRoot>Children.{console.log(Paper)}</AppRoot>
      </Paper>
    </ErrorBoundary>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));

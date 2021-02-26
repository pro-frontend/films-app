import React, { ReactElement } from "react";
import { IAppProps } from "./App.types";

const App = ({ title = "Hello", children }: IAppProps): ReactElement => (
  <h1>
    {title}. You are here! <p>{children}</p>
  </h1>
);

export default App;

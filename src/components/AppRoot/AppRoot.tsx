import React, { ReactElement } from "react";
import { IAppRootProps } from "./AppRoot.types";

const AppRoot = ({
  title = "Hello",
  children,
}: IAppRootProps): ReactElement => (
  <h1>
    {title}. You are here! <p>{children}</p>
  </h1>
);

export default AppRoot;

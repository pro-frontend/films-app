import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

export const store = configureStore({
  reducer,
  middleware: [logger, thunk],
  devTools: process.env.NODE_ENV !== "production",
});

import { combineReducers } from "redux";
import { modalReducer } from "./store/modal/reducers";
import { sharedReducer } from "./store/shared/reducers";
// import { filterReducer } from "./store/filters/reducers";

export const reducer = combineReducers({
  shared: sharedReducer,
  modal: modalReducer,
});

import { atom } from "recoil";

export const atomState = atom({
  key: "atomState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

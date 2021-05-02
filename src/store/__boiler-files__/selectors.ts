import { selector } from "recoil";
import { atomState } from "./atoms";

export const charAtomState = selector({
  key: "charAtomState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(atomState);

    return text.length;
  },
});

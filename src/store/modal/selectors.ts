import { selector } from "recoil";

export const charAtomState = selector({
  key: "charAtomState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    // const text = get(atomState);
    // return text.length;
  },
});

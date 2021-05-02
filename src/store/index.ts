import { modalAtoms } from "./modal/atoms";
import { moviesAtoms } from "./movies/atoms";

export { recoilFilmsSelector } from "./movies/selectors";

export const atomNodes = {
  ...moviesAtoms,
  ...modalAtoms,
};

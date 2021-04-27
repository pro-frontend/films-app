import { atom } from "recoil";
import { Tmode } from "../../components/Modal/Modal.types";

export const modalActiveAtom = atom<boolean>({
  key: "modalActive",
  default: false,
});

export const modalModeAtom = atom<Tmode>({
  key: "modalMode",
  default: Tmode.CREATE,
});

export const modalCreationFormAtom = atom({
  key: "modalCreationForm",
  default: [],
});
export const modalModificationFormAtom = atom({
  key: "modalModificationForm",
  default: [],
});

export const modalAtoms = {
  modalActiveAtom,
  modalModeAtom,
  modalCreationFormAtom,
  modalModificationFormAtom,
};

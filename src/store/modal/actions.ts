export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";

export const getModalActive = (store) => store.modal.modalActive;
export const getModalMode = (store) => store.modal.mode;

export const openModal = (mode) => ({
  type: MODAL_OPEN,
  payload: mode,
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
});

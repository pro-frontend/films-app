import { useCallback } from "react";

export const useOnDefaultModalClose = () => {
  const onModalClose = useCallback(() => {}, []);

  return onModalClose;
};
export const useOnDefaultModalSubmit = () => {
  const onModalSubmit = useCallback(() => {}, []);

  return onModalSubmit;
};
export const useOnDefaultModalReset = () => {
  const onModalReset = useCallback((): void => {}, []);

  return onModalReset;
};

import React, { memo, useEffect, useState } from "react";
import { ModalBody, ModalFooter, ModalHeader } from ".";
import { ModalGrid, ModalPaper } from "../_StyledComponents";
import { IModalProps, Tmode } from "./Modal.types";
import {
  useOnDefaultModalClose,
  useOnDefaultModalReset,
  useOnDefaultModalSubmit,
} from "./Modal.utils";

const Modal = memo(
  ({
    active,
    mode = Tmode.CREATE,
    filmId = 999_999_999,
    onModalClose = useOnDefaultModalClose,
    onModalSubmit = useOnDefaultModalSubmit,
    onModalReset = useOnDefaultModalReset,
  }: IModalProps) => {
    const [headerTitle, setHeaderTitle] = useState("");

    useEffect(() => {
      const headerConfig = {
        CREATE: {
          title: "ADD MOVIE",
        },
        EDIT: {
          title: "EDIT MOVIE",
        },
        DELETE: {
          title: "DELETE MOVIE",
        },
      };

      setHeaderTitle(headerConfig[mode].title);
      // eslint-disable-next-line
    }, [mode]);

    return active ? (
      <ModalGrid container justify="center" alignItems="center">
        <ModalPaper variant="outlined">
          <ModalHeader onModalClose={onModalClose} headerTitle={headerTitle} />
          <ModalBody mode={mode} />
          <ModalFooter
            onModalSubmit={onModalSubmit}
            onModalReset={onModalReset}
            filmId={filmId}
            mode={mode}
          />
        </ModalPaper>
      </ModalGrid>
    ) : null;
  }
);

export { Modal };

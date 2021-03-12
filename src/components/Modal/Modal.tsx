import React, { useEffect, useState } from "react";
import { ModalBody, ModalFooter, ModalHeader } from ".";
import { ModalGrid, ModalPaper } from "../_StyledComponents";
import { IModalProps } from "./Modal.types";

const Modal = ({
  active = false,
  mode = "CREATE",
  filmId = 0,
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
  }, [mode]);

  const handleClose = () => {};

  return active ? (
    <ModalGrid
      onClick={handleClose}
      container
      justify="center"
      alignItems="center"
    >
      <ModalPaper variant="outlined">
        <ModalHeader headerTitle={headerTitle} />
        <ModalBody mode={mode} />
        <ModalFooter mode={mode} />
      </ModalPaper>
    </ModalGrid>
  ) : null;
};

export { Modal };

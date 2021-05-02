import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { addMovie, deleteMovie, updateMovie } from "../../utils/requests";

export const ModalResetButton = () => {
  return (
    <Button variant="outlined" color="secondary">
      RESET
    </Button>
  );
};
export const ModalCreateConfirmButton = ({ body }: any) => {
  useEffect(() => {
    return () => {
      addMovie(body);
    };
  });

  return (
    <Button variant="contained" color="secondary">
      SUBMIT
    </Button>
  );
};

export const ModalEditConfirmButton = ({ id, body }: any) => {
  useEffect(() => {
    return () => {
      updateMovie(id, body);
    };
  });

  return (
    <Button variant="contained" color="secondary">
      SAVE
    </Button>
  );
};

export const ModalRemoveConfirmButton = ({ id }: { id: number }) => {
  useEffect(() => {
    return () => {
      deleteMovie(id);
    };
  });

  return (
    <Button variant="contained" color="secondary">
      CONFIRM
    </Button>
  );
};

import { Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { Paper } from "../../_StyledComponents";
import { IModalHeaderProps } from "../Modal.types";

const ModalHeader = ({ headerTitle, onModalClose }: IModalHeaderProps) => {
  return (
    <Paper square variant="outlined">
      <Grid container justify="space-between">
        <p>{headerTitle}</p>
        <CloseIcon onClick={onModalClose} />
      </Grid>
    </Paper>
  );
};

export { ModalHeader };

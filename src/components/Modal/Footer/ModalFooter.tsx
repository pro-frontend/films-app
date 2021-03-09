import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  ModalCreateConfirmButton,
  ModalEditConfirmButton,
  ModalRemoveConfirmButton,
  ModalResetButton,
} from "../../Button";
import { Paper } from "../../_StyledComponents";
import { IModalFooterProps, Tmode } from "../Modal.types";

const FooterCreate = () => (
  <Grid container justify="space-between">
    <ModalResetButton />
    <ModalCreateConfirmButton />
  </Grid>
);
const FooterEdit = () => (
  <Grid container justify="space-between">
    <ModalResetButton />
    <ModalEditConfirmButton />
  </Grid>
);
const FooterRemove = () => <ModalRemoveConfirmButton />;

const CurrentFooter = (mode: Tmode) => {
  const footer = {
    CREATE: <FooterCreate />,
    EDIT: <FooterEdit />,
    DELETE: <FooterRemove />,
  };
  return footer[mode];
};

const ModalFooter = ({ mode }: IModalFooterProps) => {
  const [footer, setFooter] = useState(<p></p>);

  useEffect(() => {
    setFooter(CurrentFooter(mode));
  }, [mode]);
  return (
    <Paper square variant="outlined">
      <Grid container justify="flex-end">
        {footer}
      </Grid>
    </Paper>
  );
};

export { ModalFooter };

import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedMovieIdAtom } from "../../../store/movies/atoms";
import {
  ModalCreateConfirmButton,
  ModalEditConfirmButton,
  ModalRemoveConfirmButton,
} from "../../Button";
import { Paper } from "../../_StyledComponents";
import { IModalFooterProps, Tmode } from "../Modal.types";

const FooterCreate = () => (
  <Grid container justify="space-between">
    <ModalCreateConfirmButton />
  </Grid>
);

const FooterEdit = () => {
  const [selectedMovieId] = useRecoilState(selectedMovieIdAtom);

  return (
    <Grid container justify="space-between">
      <ModalEditConfirmButton id={selectedMovieId} />
    </Grid>
  );
};
const FooterRemove = () => {
  const [selectedMovieId] = useRecoilState(selectedMovieIdAtom);

  return <ModalRemoveConfirmButton id={selectedMovieId} />;
};

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

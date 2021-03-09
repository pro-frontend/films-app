import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { genres } from "../../../utils/mockData/";
import { Paper, Paragraph } from "../../_StyledComponents";
import { IModalBodyProps, Tmode } from "../Modal.types";

const BodyCreate = () => {
  const [genre, setGenre] = useState(genres[0]);

  const handleChange = (currentGenre: string) => {
    setGenre(currentGenre);
  };
  return (
    <Grid container direction="column">
      <TextField label="TITLE" />
      <TextField label="RELEASE DATE" type="date" />
      <TextField label="MOVIE URL" />
      <FormControl>
        <InputLabel>{genre}</InputLabel>
        <Select value={genre}>
          {genres.map((genre) => (
            <MenuItem
              onClick={() => handleChange(genre)}
              value={genre}
              key={genre}
            >
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField label="OVERVIEW" />
      <TextField label="RUNTIME" />
    </Grid>
  );
};

const BodyEdit = () => {
  const [genre, setGenre] = useState(genres[0]);

  const handleChange = (currentGenre: string) => {
    setGenre(currentGenre);
  };
  return (
    <Grid container direction="column">
      <TextField label="MOVIE ID" disabled />
      <TextField label="TITLE" />
      <TextField label="RELEASE DATE" type="date" />
      <TextField label="MOVIE URL" />
      <FormControl>
        <InputLabel>{genre}</InputLabel>
        <Select value={genre}>
          {genres.map((genre) => (
            <MenuItem
              onClick={() => handleChange(genre)}
              value={genre}
              key={genre}
            >
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField label="OVERVIEW" />
      <TextField label="RUNTIME" />
    </Grid>
  );
};

const BodyDelete = () => (
  <Paragraph>Are you sure you want to delete this movie?</Paragraph>
);

const CurrentBody = (mode: Tmode) => {
  const body = {
    CREATE: <BodyCreate />,
    EDIT: <BodyEdit />,
    DELETE: <BodyDelete />,
  };
  return body[mode];
};

const ModalBody = ({ mode }: IModalBodyProps) => {
  const [body, setBody] = useState(<p></p>);

  useEffect(() => {
    setBody(CurrentBody(mode));
  }, [mode]);
  return (
    <Paper square variant="outlined">
      <Grid container alignItems="center" direction="column">
        {body}
      </Grid>
    </Paper>
  );
};

export { ModalBody };

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import * as yup from "yup";
import { genres } from "../../../utils/mockData/";
import { addMovie } from "../../../utils/requests";
import { Paper, Paragraph } from "../../_StyledComponents";
import { IModalBodyForm, IModalBodyProps, Tmode } from "../Modal.types";

const BodyCreate = () => {
  const [genre, setGenre] = useState(genres[0]);

  const handleGenreChange = useCallback((currentGenre: string) => {
    setGenre(currentGenre);
  }, []);

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required(),
    releaseDate: yup.string().required(),
    movieUrl: yup.string().required(),
    genre: yup.string().required(),
    overView: yup.string().required(),
    runTime: yup.string().required(),
  });

  const formik = useFormik<IModalBodyForm>({
    initialValues: {
      title: "",
      releaseDate: "",
      movieUrl: "",
      genre: "",
      overView: "",
      runTime: "",
    },
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      const res = JSON.stringify(formik.handleSubmit, null, 2);
      console.log(res);
      addMovie(values);
    },
  });

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
              onClick={() => handleGenreChange(genre)}
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

  const validationSchema = yup.object({
    title: yup
      .string()
      .min(3, "Must be at least 3 characters")
      .max(15, "Must be 15 characters or less")
      .required(),
    releaseDate: yup.string().required(),
    movieUrl: yup.string().required(),
    genre: yup.string().required(),
    overView: yup.string().required(),
    runTime: yup.string().required(),
  });

  const formik = useFormik<IModalBodyForm>({
    initialValues: {
      title: "",
      releaseDate: "",
      movieUrl: "",
      genre: "",
      overView: "",
      runTime: "",
    },
    validateOnChange: true,
    validationSchema,
    onSubmit: (values) => {
      const res = JSON.stringify(formik.handleSubmit, null, 2);
      console.log(res);
      addMovie(values);
    },
  });

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
  const [body, setBody] = useState(<p />);

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

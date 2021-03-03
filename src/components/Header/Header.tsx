import { Grid } from "@material-ui/core";
import React from "react";
import { AddMovieButton } from "../Button";
import { Logo } from "../Logo";

const Header = () => (
  <Grid container alignItems="center" justify="space-between">
    <Logo />
    <AddMovieButton />
  </Grid>
);

export default Header;

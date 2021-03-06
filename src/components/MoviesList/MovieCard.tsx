import { Chip, Grid } from "@material-ui/core";
import React, { useState } from "react";
// import styled from "styled-components";
import { MenuMovieCard } from "../Menu/MenuMovieCard";
import { GridRelative, Image, Paper } from "../_StyledComponents";
import { IMovieCardProps } from "./MovieCard.types";

const MovieCard = ({
  id = Math.floor(Math.random() * 100000),
  name = "Yesterday",
  description = "romantic movie",
  urlImage = "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/Yesterday_PosterArt_191329104590.png",
  date = "2009",
}: IMovieCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => setShowMenu(!showMenu);

  return (
    <GridRelative
      onMouseEnter={toggleShowMenu}
      onMouseLeave={toggleShowMenu}
      item
      xs={3}
    >
      {showMenu ? <MenuMovieCard id={id} /> : null}
      <Paper>
        <Image src={urlImage} alt={`the ${name} movie`} />
        <Grid container direction="column">
          <p>{name}</p>
          <Grid container justify="space-between" alignItems="center">
            <p>{description}</p>
            <Chip label={date} variant="outlined" />
          </Grid>
        </Grid>
      </Paper>
    </GridRelative>
  );
};

export { MovieCard };

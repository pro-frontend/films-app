import { Chip, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { MenuMovieCard } from "../Menu/MenuMovieCard";
import { GridRelative, Image, Paper } from "../_StyledComponents";
import { IMovieCardProps } from "./MovieCard.types";

const MovieCard = ({
  id = Math.floor(Math.random() * 100000),
  title = "Yesterday",
  tagline = "romantic movie",
  poster_path = "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/Yesterday_PosterArt_191329104590.png",
  release_date = "2009-09-08",
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
        <Image src={poster_path} alt={`the ${title} movie`} />
        <Grid container direction="column">
          <p>{title}</p>
          <Grid container justify="space-between" alignItems="center">
            <p>{tagline}</p>
            <Chip label={release_date} variant="outlined" />
          </Grid>
        </Grid>
      </Paper>
    </GridRelative>
  );
};

export { MovieCard };

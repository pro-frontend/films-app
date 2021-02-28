import { Chip, Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Movie = () => (
  <Grid item xs={3}>
    <StyledPaper>
      <img src="" alt="" />
      <Grid container direction="column">
        <p>Movie title</p>
        <Grid container justify="space-between">
          <p>Movie genre</p>
          <Chip label="2004" variant="outlined" />
        </Grid>
      </Grid>
    </StyledPaper>
  </Grid>
);

const StyledPaper = styled(Paper)`
  padding: var(--margins-small);
`;

export { Movie };

import { Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback, useEffect, useState } from "react";
import { movieDetailsById } from "../../utils/mockData";
import { ImovieDetails } from "../../utils/mockData/movieDetailsById.types";
import { Chip, Image, Paragraph, WrapperLarge } from "../_StyledComponents";

const MovieInfo = () => {
  const [movieDetails, setMovieDetails] = useState<ImovieDetails>(
    movieDetailsById
  );

  useEffect(() => setMovieDetails(movieDetailsById), []);

  const handleReturnToHome = useCallback(() => {
    window.location.replace("/");
  }, []);

  return (
    <>
      <WrapperLarge container justify="flex-end">
        <SearchIcon color="secondary" onClick={handleReturnToHome} />
      </WrapperLarge>
      <Container maxWidth="lg">
        <WrapperLarge container spacing={3}>
          <Grid item xs={3}>
            <Image
              // src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qth9hOnQctaJbyzmAau4DZaUyUG.jpg"
              src={`https://www.themoviedb.org/3${movieDetails.backdrop_path}`}
              alt={`${movieDetails.original_title} logo`}
            />
          </Grid>
          <Grid item xs={9}>
            <Paragraph>{movieDetails.original_title},</Paragraph>
            <Paragraph>
              {movieDetails.release_date.slice(0, 4)}
              <Chip
                margins="10px"
                marginLeft="30px"
                label={`${movieDetails.runtime} min`}
              />
            </Paragraph>
            <Chip
              marginLeft="0"
              margins="10px"
              color="secondary"
              label={movieDetails.vote_average}
            />
            {movieDetails.genres.map(({ name }) => (
              <Chip margins="10px" color="primary" label={name} />
            ))}

            <Paragraph>{movieDetails.overview}</Paragraph>
          </Grid>
        </WrapperLarge>
      </Container>
    </>
  );
};

export { MovieInfo };

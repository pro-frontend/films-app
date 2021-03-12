import { Container, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback } from "react";
import { Chip, Image, Paragraph, WrapperLarge } from "../_StyledComponents";

const MovieInfo = () => {
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
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qth9hOnQctaJbyzmAau4DZaUyUG.jpg"
              alt=""
            />
          </Grid>
          <Grid item xs={9}>
            <Paragraph>Fight Club,</Paragraph>
            <Paragraph>
              {"1999-10-12".slice(0, 4)}
              <Chip margins="10px" marginLeft="30px" label="139 min" />
            </Paragraph>
            <Chip marginLeft="0" margins="10px" color="secondary" label="7.8" />
            <Chip margins="10px" color="primary" label="Drama" />
            <Paragraph>
              A ticking-time-bomb insomniac and a slippery soap salesman channel
              primal male aggression into a shocking new form of therapy. Their
              concept catches on, with underground "fight clubs" forming in
              every town, until an eccentric gets in the way and ignites an
              out-of-control spiral toward oblivion.
            </Paragraph>
          </Grid>
        </WrapperLarge>
      </Container>
    </>
  );
};

export { MovieInfo };

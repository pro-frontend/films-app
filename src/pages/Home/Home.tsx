import { Grid } from "@material-ui/core";
import React from "react";
import { Filter } from "../../components/Filter";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { MoviesList } from "../../components/MoviesList";
import SearchPanel from "../../components/SearchPanel";
import { Sort } from "../../components/Sort";
import { WrapperGiant, WrapperLarge } from "../../components/_StyledComponents";

const Home = () => (
  <>
    <WrapperLarge className="content_minus_footer_height">
      <Header />
      <SearchPanel />
      <WrapperGiant container justify="space-between" alignItems="center">
        <Filter />
        <Sort />
      </WrapperGiant>
      <Grid container>
        <p>39 movies found</p>
      </Grid>
      <MoviesList />
    </WrapperLarge>
    <Footer />
  </>
);
export default Home;

import React from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { MovieInfo } from "../../components/MovieInfo";
import { MoviesList } from "../../components/MoviesList";
import { Paragraph, WrapperLarge } from "../../components/_StyledComponents";

const MovieDetails = () => (
  <>
    <WrapperLarge className="content_minus_footer_height">
      <Header />
      <MovieInfo />
      <Paragraph align="center">39 movies found</Paragraph>
      <MoviesList />
    </WrapperLarge>
    <Footer />
    {/* <Modal filmId={0} active={true} mode="CREATE" /> */}
    {/* <Modal filmId={0} active={true} mode="EDIT" /> */}
    {/* <Modal filmId={0} active={true} mode="DELETE" /> */}
  </>
);
export { MovieDetails };

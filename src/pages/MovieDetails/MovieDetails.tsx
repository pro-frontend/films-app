import React from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Tmode } from "../../components/Modal/Modal.types";
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
    <Modal filmId={0} active={false} mode={Tmode.CREATE} />
    <Modal filmId={0} active={false} mode={Tmode.EDIT} />
    <Modal filmId={0} active={false} mode={Tmode.DELETE} />
  </>
);
export { MovieDetails };

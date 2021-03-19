import React from "react";
import { Filter } from "../../components/Filter";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Tmode } from "../../components/Modal/Modal.types";
import { MoviesList } from "../../components/MoviesList";
import SearchPanel from "../../components/SearchPanel";
import { Sort } from "../../components/Sort";
import {
  Paragraph,
  WrapperGiant,
  WrapperLarge,
} from "../../components/_StyledComponents";

const Home = () => (
  <>
    <WrapperLarge className="content_minus_footer_height">
      <Header />
      <SearchPanel />
      <WrapperGiant container justify="space-between" alignItems="center">
        <Filter />
        <Sort />
      </WrapperGiant>
      <Paragraph align="center">39 movies found</Paragraph>
      <MoviesList />
    </WrapperLarge>
    <Footer />
    <Modal filmId={0} active={false} mode={Tmode.CREATE} />
    <Modal filmId={0} active={false} mode={Tmode.EDIT} />
    <Modal filmId={0} active={false} mode={Tmode.DELETE} />
  </>
);
export { Home };

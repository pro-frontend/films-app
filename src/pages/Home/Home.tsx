import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Filter } from "../../components/Filter";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { MoviesList } from "../../components/MoviesList";
import SearchPanel from "../../components/SearchPanel";
import { Sort } from "../../components/Sort";
import { WrapperGiant, WrapperLarge } from "../../components/_StyledComponents";
import { modalActiveAtom, modalModeAtom } from "../../store/modal/atoms";
import { selectedMovieIdAtom } from "../../store/movies/atoms";

const Home = () => {
  const [movieId] = useRecoilState(selectedMovieIdAtom);
  const [modalActive, setModalActive] = useRecoilState(modalActiveAtom);
  const [modalMode] = useRecoilState(modalModeAtom);

  const onModalClose = useCallback(() => {
    setModalActive(false);
  }, [setModalActive]);

  return (
    <>
      <WrapperLarge className="content_minus_footer_height">
        <Header />
        <SearchPanel />
        <WrapperGiant container justify="space-between" alignItems="center">
          <Filter />
          <Sort />
        </WrapperGiant>
        <MoviesList />
      </WrapperLarge>
      <Footer />
      <Modal
        filmId={movieId}
        active={modalActive}
        mode={modalMode}
        onModalClose={onModalClose}
      />
    </>
  );
};
export { Home };

import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Modal } from "../../components/Modal";
import { MovieInfo } from "../../components/MovieInfo";
import { MoviesList } from "../../components/MoviesList";
import { WrapperLarge } from "../../components/_StyledComponents";
import { modalActiveAtom, modalModeAtom } from "../../store/modal/atoms";
import { selectedMovieIdAtom } from "../../store/movies/atoms";

const MovieDetails = () => {
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
        <MovieInfo />
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
export { MovieDetails };

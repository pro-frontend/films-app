import { CardContent } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { modalActiveAtom, modalModeAtom } from "../../../store/modal/atoms";
import { selectedMovieIdAtom } from "../../../store/movies/atoms";
import { Link } from "../../Button";
import { Tmode } from "../../Modal/Modal.types";
import { Card } from "../../_StyledComponents";
import { IMenuMovieCardProps } from "./MenuMovieCard.types";
import { MenuMovieCardButton } from "./MenuMovieCardButton";

const MenuMovieCard = ({ id }: IMenuMovieCardProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [, setMovieId] = useRecoilState(selectedMovieIdAtom);
  const [, setModalActive] = useRecoilState(modalActiveAtom);
  const [, setModalMode] = useRecoilState(modalModeAtom);

  const sortSwitch = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const handleChangeMoviesList = useCallback(
    (callback: Function): void => {
      setMovieId(id);
      callback();
      sortSwitch();
    },
    [id, setMovieId, sortSwitch]
  );

  const handleEdit = () => {
    console.log(`Edit film with id: ${id}`);
    handleChangeMoviesList(() => {
      setModalMode(Tmode.EDIT);
      setModalActive(true);
    });
  };

  const handleDelete = () => {
    console.log(`Delete film with id: ${id}`);
    handleChangeMoviesList(() => {
      setModalMode(Tmode.DELETE);
      setModalActive(true);
    });
  };

  return (
    <>
      <MenuMovieCardButton
        aria-controls="movie-menu"
        aria-haspopup="true"
        onClick={sortSwitch}
      >
        <MoreVertIcon />
      </MenuMovieCardButton>

      {showMenu ? (
        <Card>
          <CardContent>
            <Link onClick={handleEdit}>Edit</Link>
            <Link onClick={handleDelete}>Delete</Link>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};

export { MenuMovieCard };

import { CardContent } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useCallback, useState } from "react";
import { Link } from "../../Button";
import { Card } from "../../_StyledComponents";
import { IMenuMovieCardProps } from "./MenuMovieCard.types";
import { MenuMovieCardButton } from "./MenuMovieCardButton";

const MenuMovieCard = ({ id }: IMenuMovieCardProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const sortSwitch = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu]);

  const handleEdit = () => {
    console.log(`Edit film with id: ${id}`);
    sortSwitch();
  };

  const handleDelete = () => {
    console.log(`Delete film with id: ${id}`);
    sortSwitch();
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
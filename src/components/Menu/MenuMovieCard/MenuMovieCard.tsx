// import { IMenuMovieCardProps } from "./MenuMovieCard.types";
import { Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import { IMenuMovieCardProps } from "./MenuMovieCard.types";
import { MenuMovieCardButton } from "./MenuMovieCardButton";

const MenuMovieCard = ({ id }: IMenuMovieCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log(`Edit film with id: ${id}`);
    handleClose();
  };

  const handleDelete = () => {
    console.log(`Delete film with id: ${id}`);
    handleClose();
  };

  return (
    <>
      <MenuMovieCardButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </MenuMovieCardButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export { MenuMovieCard };

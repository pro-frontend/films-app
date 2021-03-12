import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { genres } from "../../utils/mockData";

const Filter = () => {
  const [genre, setGenre] = useState(0);

  const handleChange = (currentGenre: number) => {
    setGenre(currentGenre);
  };
  return (
    <Tabs value={genre} aria-label="movies genres">
      {genres.map((genre, id) => (
        <Tab key={genre} label={genre} onClick={() => handleChange(id)} />
      ))}
    </Tabs>
  );
};

export { Filter };

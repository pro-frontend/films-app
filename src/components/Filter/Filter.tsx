import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { genres } from "../../utils/mockData";

const Filter = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} aria-label="movies genres">
      {genres.map((genre) => (
        <Tab label={genre} />
      ))}
    </Tabs>
  );
};

export { Filter };

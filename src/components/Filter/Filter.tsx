import { Tab, Tabs } from "@material-ui/core";
import React from "react";

const Filter = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="ALL" />
        <Tab label="DOCUMENTARY" />
        <Tab label="COMEDY" />
        <Tab label="HORROR" />
        <Tab label="CRIME" />
      </Tabs>
    </>
  );
};

export { Filter };

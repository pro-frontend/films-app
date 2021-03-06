import { CardContent, Grid } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { Button, Link } from "../Button";
import { Card, GridRelative, Paragraph } from "../_StyledComponents";

const options = [
  "RELEASE DATE Up",
  "RELEASE DATE Down",
  "POPULARITY Up",
  "POPULARITY Down",
  "RATING Up",
  "RATING Down",
];

const Sort = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const memoizedClick = useCallback(
    (index) => {
      if (index) {
        setSelectedIndex(index);
      }
      console.log(selectedIndex, index);
      setShowMenu(!showMenu);
    },
    [showMenu, selectedIndex]
  );

  return (
    <GridRelative>
      <Button onClick={memoizedClick}>
        <Grid container alignItems="flex-end" direction="column">
          <Paragraph>Sort by:</Paragraph>
          <Paragraph color="var(--color-white)">
            {options[selectedIndex]}
          </Paragraph>
        </Grid>
      </Button>

      {showMenu ? (
        <Card>
          <CardContent>
            {options.map((option, index) => (
              <Link key={option} onClick={() => memoizedClick(index)}>
                {option}
              </Link>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </GridRelative>
  );
};

export { Sort };

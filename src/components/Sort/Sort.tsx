import { Grid } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { color } from "../../common";
import { selectedSortAtom } from "../../store/movies/atoms";
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
  const [selectedOption, setSelectedOption] = useState<string>(
    "RELEASE DATE Up"
  );

  const [, setSelectedSort] = useRecoilState<string>(selectedSortAtom);

  const sortSwitch = useCallback(
    (option) => {
      if (showMenu) {
        setSelectedOption(option);
      }

      setShowMenu(!showMenu);
    },
    [showMenu]
  );

  useEffect(() => {
    setSelectedSort(selectedOption);
  }, [selectedOption, setSelectedSort]);

  return (
    <GridRelative>
      <Button onClick={() => sortSwitch(options[0])}>
        <Grid container alignItems="flex-end" direction="column">
          <Paragraph>Sort by:</Paragraph>
          <Paragraph color={color.white}>{selectedOption}</Paragraph>
        </Grid>
      </Button>

      {showMenu ? (
        <Card>
          {options.map((option) => (
            <Link key={option} onClick={() => sortSwitch(option)}>
              {option}
            </Link>
          ))}
        </Card>
      ) : null}
    </GridRelative>
  );
};

export { Sort };

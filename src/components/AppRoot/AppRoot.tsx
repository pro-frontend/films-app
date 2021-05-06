import React, { ReactElement } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Home, InvalidUrl } from "../../pages";
import { selectedMovieIdAtom } from "../../store/movies/atoms";

const AppRoot = (): ReactElement => {
  const [id] = useRecoilState(selectedMovieIdAtom);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={`/${id}`} exact component={Home} />
        <Route path="*" component={InvalidUrl} />
      </Switch>
    </Router>
  );
};

export default AppRoot;

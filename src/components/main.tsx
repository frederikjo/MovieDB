import React, { useState } from "react";
import { Grid, Input } from "@material-ui/core";
import Axios from "axios";
import { Results } from "./grid/results";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "0 auto",
    cursor: "pointer",
  },
});

export const Main = () => {
  const [state, setState] = useState({
    param: "",
    results: [],
    selected: {},
    right: false,
    open: false,
  });
  const classes = useStyles();

  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=190662844a8d5ebae36f36f11b014f0b";

  const search = () => {
    Axios(url + "&query=" + state.param).then(({ data }) => {
      let result = data.results;

      setState((prevState) => {
        return { ...prevState, results: result };
      });
    });
  };

  const handleInput = (e: any) => {
    let param = e.target.value;

    setState((prevState) => {
      return { ...prevState, param: param };
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Input
          placeholder="Search"
          autoFocus
          onChange={handleInput}
          onKeyDown={search}
          fullWidth={true}
        />
        <Results results={state.results} />
      </Grid>
    </div>
  );
};

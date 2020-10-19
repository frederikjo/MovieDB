import { Grid } from "@material-ui/core";
import React from "react";
import { Result } from "./result";

interface ResultsProps {
  results: any;
}

export const Results = ({ results }: ResultsProps) => {
  return (
    <>
      {results.map((results: any) => (
        <Grid item key={results.id} xs={12} sm={5} md={4}>
          <Result key={results.id} result={results} />
        </Grid>
      ))}
    </>
  );
};

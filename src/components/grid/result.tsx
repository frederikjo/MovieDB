import React from "react";
import { Card, CardHeader, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface ResultProps {
  result: any;
}

const useStyles = makeStyles({
  root: {
    height: 300,
    cursor: "pointer",
  },
  header: {
    height: 70,
    whiteSpace: "nowrap",
    width: 120,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const Result = ({ result }: ResultProps) => {
  const posterUrl = "https://image.tmdb.org/t/p/w185";
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader className={classes.header} title={result.original_title} />
      <CardMedia
        component="img"
        image={
          result.poster_path
            ? posterUrl + result.poster_path
            : "https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available-240x240.jpg"
        }
        alt={result.original_title}
        height="140"
      />
    </Card>
  );
};

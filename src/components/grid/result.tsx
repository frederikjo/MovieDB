import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";

interface ResultProps {
  result: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  header: {
    height: 95,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    margin: "0 auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const Result = ({ result }: ResultProps) => {
  const posterUrl = "https://image.tmdb.org/t/p/w185";
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      variant="outlined"
      className={classes.root}
      onClick={handleExpandClick}
    >
      <CardContent>
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMore />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>{result.overview}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

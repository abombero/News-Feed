import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    height: "100%"
  },
  media: {
    height: 140
  }
});

export default function CardNews({news}) {
  const classes = useStyles();
  const {title, img_url, source_name, url} = news

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img_url} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h6">{title}</Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {source_name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Ver más
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

import {
  Card, CardActionArea, CardMedia, CardContent,
  Typography, CardActions, Button, makeStyles} 
from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function EventCard(props)  {
  const classes = useStyles();
  const name = Object.keys(props.event);
  const data = Object.entries(props.event)[0][1];

return (
  <Card className={classes.root}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={data.poster}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {Object.keys(props.event)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Register
      </Button>
      <Button size="small" color="primary">
        Details
      </Button>
    </CardActions>
  </Card>
);}
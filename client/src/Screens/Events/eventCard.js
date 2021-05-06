import {
  Card, CardActionArea, CardMedia, CardContent,
  Typography, CardActions, Button} 
from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStyles } from './cardStyles';

export default function EventCard(props)  {
  const classes = useStyles();
  const name = Object.keys(props.event);
  const data = Object.entries(props.event)[0][1];
  const history = useHistory();

return (
  <div className={classes.holder}>
  <Card className={classes.root}>
    <CardMedia
      className={classes.media}
      image={data.poster}
      title={name}
    />
    <CardContent>
      <Typography className={classes.heading} variant="h6" component="h2">
        {Object.keys(props.event)}
      </Typography>
      <Typography className={classes.desc} variant="body2" color="textSecondary" component="p">
        {data.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button className={classes.details} size="small" color="primary" onClick = {() => history.push(`/events/${name}`)}>
        Details
      </Button>
    </CardActions>
  </Card>
  </div>
);}
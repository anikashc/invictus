import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { GridListTileBar } from '@material-ui/core';

const useStyles1 = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));


  function EventCard()  {
    const classes = useStyles1();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.techslang.com/wp-content/uploads/2020/08/image-from-rawpixel-id-593171-jpeg-1024x536.jpg"
          title="CODING"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CODING
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
  );
}



  function SpacingGrid() {

    const classes = useStyles();
  
    return (

          <Grid container justify="center" spacing={3}>
            
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                  <EventCard></EventCard>
              </Grid>
            ))}

          </Grid>
    );
  }




const Events = () => {

  return (
      <div>
          <br></br>
          <SpacingGrid></SpacingGrid>
          <br></br>
      </div>
  );
}

export default Events


  
  
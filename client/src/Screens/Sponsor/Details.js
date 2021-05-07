import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SponsorData from './SponsorData'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(16, 0, 6),
    color: '#ffffff',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

}));



export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        {/* Hero unit */}
        <div className={classes.heroContent} 
        style={{backgroundColor:"transparent", position:"relative"}}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h2" align="center" color="white" gutterBottom>
              Sponsor Us
            </Typography>
            <Typography variant="h5" align="center"  paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
              <Grid item>
                  <Typography variant="h6" align="center">Contact Us</Typography>
                </Grid>
                <Grid item>
                  <Button href="mailto:invictus.dtu.ac.in" variant="contained" color="primary">
                    invictus.dtu.ac.in
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          {props.children}
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {SponsorData.map(sponsor => (
              <Grid item key={sponsor} xs={12} sm={6} md={4}>
                <Card className={classes.card} key={sponsor.id}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={sponsor.imgsrc}
                    title="Image title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
    </React.Fragment>
  );
}
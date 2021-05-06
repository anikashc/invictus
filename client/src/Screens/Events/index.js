import React from 'react'
import eventData from '../../Assets/EventsData.js';
import {Button, Grid} from '@material-ui/core';
import EventCard from './eventCard';
import { useStyles } from './eventStyles';

const Events = () => {

  const [selected, setSelected] = React.useState('coding');      
  let coding = [], electronics = [], games = [], informative = [];
  const classes = useStyles();

  Object.entries(eventData).forEach(e => {
    let obj = {}
    obj[e[0]] = e[1]
    if      (e[1].type.toLowerCase() === 'coding')   coding.push(obj)
    else if (e[1].type.toLowerCase() === 'electronics') electronics.push(obj)
    else if (e[1].type.toLowerCase() === 'games')    games.push(obj)
    else if (e[1].type.toLowerCase() === 'informative')    informative.push(obj)
  })

  let toPrint;
  if (selected === 'coding') {
    toPrint = coding.map((event, index) => (
    <Grid item xs={12} sm={4} md={3} key = {'grid'+index}>
      <EventCard event = {event} key = {'card'+index}/>
    </Grid>
    ))
  }
  else if (selected === 'electronics') {
    toPrint = electronics.map((event, index) => (
      <Grid item xs={12} sm={4} md={3} key = {'grid'+index}>
        <EventCard event = {event} key = {'card'+index}/>
      </Grid>
    ))
  }
  else if (selected === 'games') {
    toPrint = games.map((event, index) => (
      <Grid item xs={12} sm={4} md={3} key = {'grid'+index}>
        <EventCard event = {event} key = {'card'+index}/>
      </Grid>
    ))
  }
  else if (selected === 'informative') {
    toPrint = informative.map((event, index) => (
      <Grid item xs={12} sm={4} md={3} key = {'grid'+index}>
        <EventCard event = {event} key = {'card'+index}/>
      </Grid>
    ))
  }

  return (
    <div className={classes.root}>
      <Grid container align = 'center' justify = 'center'  className={classes.buttons}>
        <Grid item xs={12} sm={3}>
          <Button
          className = {classes.button}
          onClick = {() => setSelected('coding')}
          >
            Coding
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button
          className = {classes.button}
          onClick = {() => setSelected('electronics')}
          >
            Electronics
          </Button>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Button
          className = {classes.button}
          onClick = {() => setSelected('games')}
          >
            Games
          </Button>
        </Grid>
        
        <Grid item xs={12} sm={3}>
          <Button
          className = {classes.button}
          onClick = {() => setSelected('informative')}
          >
            Informative
          </Button>
        </Grid>
        
      </Grid>

      <Grid container align = 'center'>
        {toPrint}
      </Grid>

    </div>
  );
}

export default Events
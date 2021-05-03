import React from 'react'
import eventData from './eventData.js';
import {Button} from '@material-ui/core';
import EventCard from './eventCard';

const Events = () => {

  const [selected, setSelected] = React.useState('coding');      
  let coding = [], robotics = [], games = [];

  Object.entries(eventData).forEach(e => {
    let obj = {}
    obj[e[0]] = e[1]
    if      (e[1].type === 'coding')   coding.push(obj)
    else if (e[1].type === 'robotics') robotics.push(obj)
    else if (e[1].type === 'games')    games.push(obj)
  })

  let toPrint;
  if (selected === 'coding') {
    toPrint = coding.map((event, index) => (
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }
  else if (selected === 'robotics') {
    toPrint = robotics.map((event, index) => (
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }
  else if (selected === 'games') {
    toPrint = games.map((event, index) => (
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }

  return (
    <div>
      <Button
      onClick = {() => setSelected('coding')}
      >
        Coding
      </Button>

      <Button
      onClick = {() => setSelected('robotics')}
      >
        Robotics
      </Button>
      
      <Button
      onClick = {() => setSelected('games')}
      >
        Games
      </Button>

      {toPrint}

    </div>
  );
}

export default Events
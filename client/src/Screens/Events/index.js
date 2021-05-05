import React from 'react'
import eventData from '../../Assets/EventsData.js';
import {Button} from '@material-ui/core';
import EventCard from './eventCard';

const Events = () => {

  const [selected, setSelected] = React.useState('coding');      
  let coding = [], electronics = [], games = [], informative = [];

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
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }
  else if (selected === 'electronics') {
    toPrint = electronics.map((event, index) => (
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }
  else if (selected === 'games') {
    toPrint = games.map((event, index) => (
    <EventCard event = {event} key = {'card'+index}/>
    ))
  }
  else if (selected === 'informative') {
    toPrint = informative.map((event, index) => (
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
      onClick = {() => setSelected('electronics')}
      >
        Electronics
      </Button>
      
      <Button
      onClick = {() => setSelected('games')}
      >
        Games
      </Button>
      
      <Button
      onClick = {() => setSelected('informative')}
      >
        Informative
      </Button>

      {toPrint}

    </div>
  );
}

export default Events
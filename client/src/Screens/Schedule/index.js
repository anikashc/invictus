import * as React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useStyles } from './ScheduleStyles';
import { Typography } from '@material-ui/core';
import './temp.css'

var gapi = window.gapi
var CLIENT_ID = "330193745873-b5lbss2q1259qat4ja36ti4m497395ij.apps.googleusercontent.com"
var API_KEY = "AIzaSyCso4ndaDt5vQKH9kz_m5lwCMVkw3jLKi8"
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.events"

const handleClick = (i) => {
  gapi.load('client:auth2', () => {
    console.log('Loaded Client')
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })

    gapi.client.load('calendar', 'v3', () => console.log('Loaded Calendar'))
    gapi.auth2.getAuthInstance().signIn()
    .then(() => {
      
      var event = [
      {
        'summary': 'Coding Event 1',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-06T15:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-06T17:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '4',
      },
      {
        'summary': 'Coding Event 2',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-07T14:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-07T16:30:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '4',
      },
      {
        'summary': 'Gaming Event 1',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-07T12:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-07T13:30:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '1',
      },
      {
        'summary': 'Gaming Event 2',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-08T13:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-08T15:30:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '1',
      },
      {
        'summary': 'Robotics Event 1',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-06T12:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-06T13:30:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '2',
      },
      {
        'summary': 'Robotics Event 2',
        'description': 'Hello',
        'start': {
          'dateTime': '2021-05-08T16:00:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'end': {
          'dateTime': '2021-05-08T17:30:00+05:30',
          'timeZone': 'Asia/Kolkata'
        },
        'colorId': '2',
      },
    ]

      var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event[i],
      })

      request.execute(event => {
        console.log(event)
        window.open(event.htmlLink)
      })
    })
  })
}

function App () {
  const schedulerData = [
    { 
      startDate: '2021-05-06T15:00', 
      endDate: '2021-05-06T17:00', 
      title: 'Coding Event 1', 
      type: 'Coding',
      button: 'Coding Event 1',
    },
    { 
      startDate: '2021-05-07T14:00', 
      endDate: '2021-05-07T16:30',
      title: 'Coding Event 2', 
      type:'Coding',
      button: 'Coding Event 2', 
    },
    { 
      startDate: '2021-05-07T12:00', 
      endDate: '2021-05-07T13:30', 
      title: 'Gaming Event 1',
      type: 'Gaming',
      button: 'Gaming Event 1',
    },
    { 
      startDate: '2021-05-08T13:00', 
      endDate: '2021-05-08T15:30', 
      title: 'Gaming Event 2',
      type: 'Gaming',
      button: 'Gaming Event 2',
    },
    { 
      startDate: '2021-05-06T12:00', 
      endDate: '2021-05-06T13:30', 
      title: 'Robotics Event 1',
      type: 'Robotics',
      button: 'Robotics Event 1',
    },
    { 
      startDate: '2021-05-08T16:00', 
      endDate: '2021-05-08T17:30', 
      title: 'Robotics Event 2',
      type: 'Robotics',
      button: 'Robotics Event 2',
    },
  ];

  const resources = [
    {
      fieldName: 'type',
      title: 'Type',
      instances: [
        { id: 'Coding', text: 'Coding', color: '#E67C73'}, //Google API Colour = Flamingo 
        { id: 'Gaming', text: 'Gaming', color: '#7986CB'}, //Google API Colour = Lavendar
        { id: 'Robotics', text: 'Robotics', color: '#33B679'}, //Google API Colour = Sage 
      ],
    },
    {
      fieldName: 'button',
      title: 'Button',
      instances: [
        { id: 'Coding Event 1', text: <Button variant="contained" color='primary' onClick={() => handleClick(0)}>Add event to Google Calendar</Button>, color: '#E67C73'},
        { id: 'Coding Event 2', text: <Button variant="contained" color='primary' onClick={() => handleClick(1)}>Add event to Google Calendar</Button>, color: '#E67C73'},
        { id: 'Gaming Event 1', text: <Button variant="contained" color='primary' onClick={() => handleClick(2)}>Add event to Google Calendar</Button>, color: '#7986CB'},
        { id: 'Gaming Event 2', text: <Button variant="contained" color='primary' onClick={() => handleClick(3)}>Add event to Google Calendar</Button>, color: '#7986CB'},
        { id: 'Robotics Event 1', text: <Button variant="contained" color='primary' onClick={() => handleClick(4)}>Add event to Google Calendar</Button>, color: '#33B679'},
        { id: 'Robotics Event 2', text: <Button variant="contained" color='primary' onClick={() => handleClick(5)}>Add event to Google Calendar</Button>, color: '#33B679'},
      ],
    }
  ];
  
  const classes = useStyles();
  
  return (
    <div className={classes.holder}>
    <Grid container justify='center' align='center' style = {{minHeight:'100vh'}}>

      <Grid item xs={12}>
        <Typography
          className = {classes.header}
          variant='h5'
          gutterBottom
        >
          Schedule
        </Typography>
      </Grid>

      <Grid item xs={1} md={2}></Grid>
      <Grid item xs={10} md={8}>
      <Paper>
        <Scheduler
          data={schedulerData}
          height= '500'
        >
          <ViewState
            currentDate = {'2021-05-03'}
          />
          <WeekView
            excludedDays={[0, 1, 2, 3]}
            startDayHour={12}
            endDayHour={20}
          />
          <Appointments/>
          <Resources
            data={resources}
          />
          <AppointmentTooltip />
        </Scheduler>
      </Paper>
      </Grid>
      <Grid item xs={1} md={2}></Grid>
    </Grid>
    </div>
  );
}
export default App;
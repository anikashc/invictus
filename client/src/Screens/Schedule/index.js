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
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
  
/*var event = [
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
]*/

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
        { id: 'Coding Event 1', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=NGdocjNoY2xpZDBtYXVscHVtM3Y5Y2FrdDMgaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#E67C73'},
        { id: 'Coding Event 2', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=MDdkbnBxNzNucHFoczM3NWRuazVkMThrZ2ogaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#E67C73'},
        { id: 'Gaming Event 1', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=MDE1MXBobzlkb2ZydGtkN3M2anFqaWpjbzggaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#7986CB'},
        { id: 'Gaming Event 2', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=MzJvOG1ta2p1ZHRoZ25vYmI3azM2NmJ1cGwgaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#7986CB'},
        { id: 'Robotics Event 1', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=NHAxN3Q3OWkxOHF1Z2tydDU3NGtjNmY3MmIgaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#33B679'},
        { id: 'Robotics Event 2', text: <Button variant="contained" color='primary' onClick={() => window.open("https://calendar.google.com/event?action=TEMPLATE&tmeid=M3AxanBnbzNiMzBua2ZqbnVkNTRkY2EyamggaW52aWN0dXMyazIxZHR1QG0&tmsrc=invictus2k21dtu%40gmail.com")}>Add event to Google Calendar</Button>, color: '#33B679'},
      ],
    }
  ];
  
  const classes = useStyles();
  
  return (
    <div className={classes.holder}>
    <Grid container justify='center' align='center' style = {{minHeight:'100vh'}}>

      <Grid item xs={12} data-aos="zoom-in">
        <Typography
          className = {classes.header}
          variant='h5'
          gutterBottom
        >
          SCHEDULE
        </Typography>
        <Typography
          className = {classes.caption}
          variant='body1'
          gutterBottom
        >
          (Click on an event to add it to your Google Calendar)
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
import { makeStyles } from '@material-ui/core'
import React from 'react'
import ParticipantStats from './ParticipantsStats'
import EventStats from './EventStats'
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        padding: '20px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    subtext: {
      paddingTop: '20px',  
      color: '#D66496', 
      fontSize: '2rem',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Rajdhani',
      fontStyle: 'normal',
      fontWeight: '700',
    }
})

const Stats = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
          
          <Box className={classes.subtext}>
            <div><ParticipantStats /></div> 
          </Box>
          <Box className={classes.subtext}>
            <div><EventStats /></div> 
          </Box>
        </div>
    )
}

export default Stats

import { makeStyles } from '@material-ui/core'
import React from 'react'
import ParticipantStats from './ParticipantsStats'
import EventStats from './EventStats'
import Box from '@material-ui/core/Box';
const useStyles= makeStyles({
    root:{
        height: '100vh',
        width: '100%',
    },
    header:{  
      paddingTop: '20px',  
    color: '#FFFFFF', 
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    }
})

const Stats = () => {
    // const { countUp, start, reset} = useCountUp({
    //   start: 0,
    //   end: 2000,
    //   delay: 0,
    //   duration: 5,
    //   onReset: () => {
    //     start()
    //   },
    // });
    const classes= useStyles();
    return (
        <div className={classes.root}>
          
          <Box className={classes.header}>PREVIOUS STATS</Box>

          
          <Box className={classes.header}>
            <div><ParticipantStats /></div> 
          </Box>
          <Box className={classes.header}>
            <div><EventStats /></div> 
          </Box>
        </div>
    )
}

export default Stats

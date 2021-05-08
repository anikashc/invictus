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
        background: '#FFFFFF',
        border: 'solid 10px #D66496',
        '@media: (max-width: 900px)':{
          border: 'solid 8px #D66496'
        },
        
        '@media: (max-width: 600px)':{
          border: 'solid 6px #D66496'
        },
        '@media: (max-width: 425px)':{
          border: 'solid 4px #D66496'
        },
    },
    header:{  
      paddingTop: '20px',  
    color: '#1B1430', 
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
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

import { makeStyles } from '@material-ui/core'
import React from 'react'
import { useCountUp } from 'react-countup';
import stats_bg from '../../Assets/Backgrounds/stats_bg.jpg'
import Box from '@material-ui/core/Box';

const useStyles= makeStyles({
    root:{
        height: '60vh',
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
    const { countUp, start, reset} = useCountUp({
      start: 0,
      end: 2000,
      delay: 0,
      duration: 5,
      onReset: () => {
        start()
      },
      onUpdate: () => console.log('Updated!'),
      onPauseResume: () => console.log('Paused or resumed!'),
    });
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>PREVIOUS STATS</Box>
          <Box className={classes.header}>
            <div>{countUp} </div>
            <br />
            <button onClick={reset}>Reset</button>            
          </Box>
          <Box className={classes.header}>
            <div>{countUp} </div>
            <br />
            <button onClick={reset}>Reset</button>            
          </Box>
          
        </div>
    )
}

export default Stats

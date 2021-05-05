import { makeStyles } from '@material-ui/core'
import React from 'react'

import stats_bg from '../../Assets/Backgrounds/stats_bg.jpg'
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
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>PREVIOUS STATS</Box>
        </div>
    )
}

export default Stats

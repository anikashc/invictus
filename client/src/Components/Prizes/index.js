import { makeStyles } from '@material-ui/core'
import React from 'react'

import Box from '@material-ui/core/Box';
import prizes_bg from '../../Assets/Backgrounds/prizes_bg.jpg'

import LottieAnimation from './../../Screens/Lottie';

import prize from '../../Assets/Animations/prize.json';

const useStyles= makeStyles({
    root:{
        height: '100vh',
        width: '100%',
        opacity: '0.3',
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

const Prizes = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>PRIZES</Box>

          
          <LottieAnimation lotti={prize} height={500} width={600} />
        </div>
    )
}

export default Prizes

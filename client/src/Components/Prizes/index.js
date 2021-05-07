import { makeStyles } from '@material-ui/core'
import React from 'react'

import Box from '@material-ui/core/Box';

import LottieAnimation from './../../Screens/Lottie';

import prize from '../../Assets/Animations/prize.json';

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
      },
      animation: {
          height: '500px',
          width: '500px',
          '@media (max-width: 768px)':{    
          height: '400px',
          width: '400px', 
          },
          '@media (max-width: 600px)':{    
            height: '100px',
            width: '100px', 
            }
      }
})

const Prizes = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>PRIZES</Box>

          
          <LottieAnimation className={classes.animation} lotti={prize} />
        </div>
    )
}

export default Prizes

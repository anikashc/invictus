import { makeStyles } from '@material-ui/core'
import React from 'react'

import Box from '@material-ui/core/Box';

import LottieAnimation from './../../Screens/Lottie';

import prize from '../../Assets/Animations/prize.json';

const useStyles= makeStyles({
    root:{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          opacity: '0.2',
          height: '500px',
          width: '800px', 
          '@media (max-width: 900px)':{    
            width: '600px', 
         },
            '@media (max-width: 500px)':{    
                height: '300px',
                width: '300px', 
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

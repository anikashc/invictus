import { makeStyles } from '@material-ui/core'
import React from 'react'

import Box from '@material-ui/core/Box';

import LottieAnimation from './../../Screens/Lottie';

import prize from '../../Assets/Animations/prize.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },header:{  
        paddingTop: '20px',
        color: '#FFFFFF', 
        fontSize: '4rem',
        textAlign: 'center',
        fontFamily: 'Rajdhani',
        fontStyle: 'normal',
        fontWeight: 'bold',
        '@media (max-width: 1130px)':{
          fontSize: '3.5rem',    
          lineHeight:'20px',
        },
        '@media (max-width: 1024px)':{
        fontSize: '3rem',    
        lineHeight:'15px',
      },
      '@media (max-width: 768px)':{
        fontSize: '2.5rem',    
        lineHeight:'10px',
      },
    },
      animation: {
          opacity: '0.2',
          height: '600px',
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
            
          <Box className={classes.header} data-aos="zoom-in">PRIZES</Box>

          
          <LottieAnimation className={classes.animation} lotti={prize} />
        </div>
    )
}

export default Prizes

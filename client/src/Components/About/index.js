import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
import Zoom from 'react-reveal/Zoom';

import about_bg from '../../Assets/Backgrounds/about_bg.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
    },
    aboutContainer:{
        padding: '50px 0 50px 150px', 
        background:  `url(${about_bg}) no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '@media (max-width: 900px)':{
          padding: '30px 0 30px 100px', 
        },
        '@media (max-width: 600px)':{
          padding: '20px 0 20px 0px', 
        },
    },
    aboutBox:{ 
        padding: '50px 100px 50px 100px',
        '@media (max-width: 768px)':{
          padding: '20px 50px 20px 50px',
        },
        
        '@media (max-width: 600px)':{
          padding: '20px', 
        },
    },

    header:{  
      color: '#FFFFFF', 
      fontSize: '2.5rem',
      textAlign: 'left',
      fontFamily: 'Rajdhani',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight:'30px',
      '@media (max-width: 1130px)':{
        fontSize: '2rem',    
        lineHeight:'20px',
      },
      '@media (max-width: 1024px)':{
      fontSize: '1.8rem',    
      lineHeight:'15px',
    },
    '@media (max-width: 768px)':{
      fontSize: '1.5rem',    
      lineHeight:'10px',
    },
  },
      subtext: {
        color: '#FFFFFF', 
        paddingTop: '60px',
        fontSize: '1.5rem',
        fontFamily: 'Rajdhani',
        fontStyle: 'normal',
        fontWeight: 'bold',
      '@media (max-width: 768px)':{
        fontSize: '1rem',
        paddingTop: '40px', 
      },
      },
      
})

const About = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.aboutContainer}>
              <Zoom>
               <div className={classes.aboutBox} >
               <Box className={classes.header}>ABOUT INVICTUS</Box>
               <Box className={classes.subtext}  data-aos="fade-left">
               INVICTUS is the annual technical fest of Delhi Technological University, formerly known as Delhi College of Engineering.
               Being one of the biggest Tech Fest of North India, it provides a platform for budding Technocrats to explore and put their talent to test when they compete with other prodigies. 
               It covers a wide range of events in technical domain with some other miscellaneous events for quizzes and ML competitions to fun games and comedy night.  
               </Box>
              </div>
              </Zoom>
               
            </div>
        </div>
    )
}

export default About

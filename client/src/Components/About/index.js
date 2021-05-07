import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
import Zoom from 'react-reveal/Zoom';

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
    },
    aboutContainer:{
        padding: '100px 0 0 150px',  
        '@media (max-width: 900px)':{
          padding: '50px 0 0 100px', 
        },
        '@media (max-width: 600px)':{
          padding: '30px 0 0 0px', 
        },
    },
    aboutBox:{ 
        margin: '50px', 
        padding: '50px',   
        
        '@media (max-width: 768px)':{
          padding: '20px 0 20 50px',
        },
        
        '@media (max-width: 600px)':{
          padding: '10px 0 10 0px', 
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
               <div className={classes.aboutBox}>
               <Box className={classes.header}>ABOUT INVICTUS</Box>
               <Box className={classes.subtext}>
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

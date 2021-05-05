import { makeStyles } from '@material-ui/core'
import React from 'react'

import Box from '@material-ui/core/Box';
import { positions } from '@material-ui/system';
import about_bg from '../../Assets/Backgrounds/about_bg.jpg'
import about_box from '../../Assets/Backgrounds/about_box.png'

const useStyles= makeStyles({
    root:{
        height: '100vh',
        width: '100%',
    },
    aboutContainer:{
        padding: '150px',    
        '@media (max-width:599px)': {
            padding: '50px',
        }
    },
    aboutBox:{ 
        padding: '50px',
        background:  `url(${about_box}) no-repeat`,
        backgroundSize: '100% 70%',
        height: '100vh',
        width: '100%',
    },
    header:{  
    padding: '50px 0 0 100px',  
      color: '#FFFFFF', 
      fontSize: '3.6rem',
      textAlign: 'left',
      fontFamily: 'Rajdhani',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight:'140px',
      position:'static',
      right: '20%',
      '@media (max-width:768px)':{//Tablet View
        fontSize:'1.9rem',
    },
    '@media (max-width:599px)':{//Mobile View
        fontSize:'1.0rem',    
      },
      '@media (max-width:375px)':{//Mobile View
        fontSize:'0.7rem',    
      },
      '@media (max-width:320px)':{//S-Mobile View
        fontSize:'6px',
        lineHeight:'60px',
        left: '20%',
        position:'static',
        overflow: 'hidden',    
      },
    },
      subtext: {
        padding: '10px 0 0 50px', 
        color: '#000000',  
        fontSize: '1.8rem',
        fontFamily: 'Rajdhani',
        fontStyle: 'normal',
        fontWeight: 'bold',
        '@media (max-width:768px)':{//Tablet View
            fontSize:'1rem',
        },
        '@media (max-width:599px)':{//Mobile View
            fontSize:'0.7rem',    
          },
          '@media (max-width:375px)':{//S-Mobile View
            fontSize:'0.6rem',    
          },
          '@media (max-width:320px)':{//Mobile View
            fontSize:'0.3rem',
            position: 'relative',    
          },
        },
})

const About = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.aboutContainer}>
                <div className={classes.aboutBox}>
                    <Box className={classes.header}>ABOUT INVICTUS</Box>
                    <Box className={classes.subtext}>
                    INVICTUS is the annual technical fest of DelhiTechnological University, formerly known as Delhi College of Engineering.
                    Being one of the biggest Tech Fest of North India, it provides a platform for budding Technocrats to explore and put their talent to test when they compete with other prodigies. 
                    It covers a wide range of events in technical domain with some other miscellaneous events for quizzes and ML competitions to fun games and comedy night.  
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default About

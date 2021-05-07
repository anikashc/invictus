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
        },
        '@media (max-width:1440px)':{//L-Laptop View
          width: '96%',
          height: '110%',
      }
    },
    aboutBox:{ 
        padding: '60px',
        background:  `url(${about_box}) no-repeat`,
        backgroundSize: '100% 70%',
        height: '100vh',
        width: '100%',
        //Media Queries
      '@media (max-width:1440px)':{//L-Laptop View
        height: '110vh',
        width: '90%',
    },
    '@media (max-width:768px)':{//L-Laptop View
      height:'110vh',
      width: '115%',
  },
    
    '@media (max-width:1024px)':{//Laptop View
      backgroundSize: '100% 70%'
  },
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
<<<<<<< HEAD
      //MediaQueries
      '@media (max-width:1440px)':{//L-Laptop View
        fontSize:'3.4rem',
        marginBottom: '5px',
        marginTop: '20px'
=======
      '@media (max-width:768px)':{//Tablet View
        fontSize:'1.9rem',
>>>>>>> 5f0a3c4 (Responsiveness)
    },
      '@media (max-width:1024px)':{//Laptop View
        fontSize: '2.5rem',
        padding: '37px',
        marginTop:'35px',
    },
    '@media (max-width:768px)':{//Tablet View
      fontSize: '1.5rem',
      },
      '@media (max-width:600px)':{//Mobile View 
        fontSize: '1.3rem',
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
        //MediaQueries
        '@media (max-width:1440px)':{//L-Laptop View
          fontSize:'2rem',
          padding: '4%',
          lineHeight:'35px'
      },
      '@media (max-width:1024px)':{//Laptop View
        fontSize: '1.4rem',
        padding: '7px',
        lineHeight: '24px',
      },
      '@media (max-width:768px)':{//Tablet View
        fontSize:'1rem',
        marginBottom: '30px'
        },
        '@media (max-width:600px)':{//Mobile View 
          fontSize: '0.84rem'
        },
<<<<<<< HEAD
=======
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
>>>>>>> 5f0a3c4 (Responsiveness)
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
                    INVICTUS is the annual technical fest of Delhi Technological University, formerly known as Delhi College of Engineering.
                    Being one of the biggest Tech Fest of North India, it provides a platform for budding Technocrats to explore and put their talent to test when they compete with other prodigies. 
                    It covers a wide range of events in technical domain with some other miscellaneous events for quizzes and ML competitions to fun games and comedy night.  
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default About

import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
import lectures_bg from '../../Assets/Backgrounds/lecture_bg.jpg'

const useStyles= makeStyles({
    root:{
        background:  `url(${lectures_bg}) no-repeat`,
        backgroundPosition: 'center',
        backgroundSize: '100% 115%',
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
})

const LectureSeries = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
              <Box className={classes.header}>LECTURE SERIES</Box> 
        </div>
    )
}

export default LectureSeries

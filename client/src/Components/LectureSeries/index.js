import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
// import './Lecture.css';
import CustomizedTimeline from './LectureData';

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        paddingTop: '20px',
        '@media (min-width: 600px)':{
        padding: '10%',
        }
    },
    header:{  
        paddingTop: '20px',  
      fontSize: '2.5rem',
      color: '#FFFFFF',
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
              <div id= "Lec">
              <CustomizedTimeline></CustomizedTimeline>
              </div>
              {/* <div id="app"></div> */}

{/* <footer>
	<p>
		Created with <i class="fa fa-heart"></i> by
		<a target="_blank" href="https://fredsiika.io">Fred Siika</a>
		- Read about what I do on my
		<a target="_blank" href="https://fredsiika.github.io/fredcodes">Website</a>
	</p>
</footer> */}

        </div>
    )
}

export default LectureSeries

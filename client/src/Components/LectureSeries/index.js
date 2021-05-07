import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
// import './Lecture.css';
import CustomizedTimeline from './LectureData';

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

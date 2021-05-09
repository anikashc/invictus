import { makeStyles } from '@material-ui/core'
import React from 'react'
import Box from '@material-ui/core/Box';
// import './Lecture.css';
import CustomizedTimeline from './LectureData';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles= makeStyles({
    root:{
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
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
})

const LectureSeries = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
              <Box className={classes.header} data-aos="zoom-in">LECTURE SERIES</Box>
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

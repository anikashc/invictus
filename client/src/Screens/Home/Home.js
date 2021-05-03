import React from 'react'
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import Hero from '../../Components/Hero/Hero'

import { makeStyles } from '@material-ui/core';
import GoEvents from '../../Components/GoEvents/GoEvents'
import Prizes from '../../Components/Prizes';

import Stats from '../../Components/Stats';
import LectureSeries from '../../Components/LectureSeries';
import main_bg from '../../Assets/Backgrounds/main_bg.jpg'

import About from '../../Components/About';
import WhatsNew from '../../Components/WhatsNew';

const useStyles= makeStyles({
  root: {
    minHeight: '60vh',
    '@media (max-width:599px)': {
      height: '80vh',
    }
  },
  home: {
    minHeight: '100vh', 
    height: '100%',
    background:  `url(${main_bg}) no-repeat`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
  }
})

const Home = () => {
    const classes= useStyles();

    return (
        <React.Fragment>
            <div>
                <div className={classes.home}></div>
                {/* <Hero /> */}
                <About/>
                <WhatsNew/>
                <Stats/>
                <Prizes/>
                <GoEvents />
                <LectureSeries/>
            </div>
        </React.Fragment>
    )
}

export default Home

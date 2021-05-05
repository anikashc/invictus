import React from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core';
import GoEvents from '../../Components/GoEvents/GoEvents'
import Prizes from '../../Components/Prizes';
import Stats from '../../Components/Stats';
import LectureSeries from '../../Components/LectureSeries';
import main_bg from '../../Assets/Backgrounds/main_bg.jpg'
import {Link} from 'react-scroll'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import About from '../../Components/About';
import WhatsNew from '../../Components/WhatsNew';

const useStyles= makeStyles({
  root: {
    height: '100%',
    minHeight: '70vh',
    background: '#1B1430',/* fallback for old browsers */
    background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    '@media (max-width:599px)': {
      minHeight: '100vh',
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
            <div className="pagination">
              <ul>
                <li><Link activeClass="active" to="home" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>Home</span></Link></li>
                <li><Link  to="about" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>About</span></Link></li>
                <li><Link  to="whatsnew" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'> What's New</span></Link></li>
                <li><Link  to="stats" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>Stats</span></Link></li>
                <li><Link  to="prizes" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>Prizes</span></Link></li>
                <li><Link  to="goevents" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>Glimpse Of Events</span></Link></li>
                <li><Link  to="lseries" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span id='litext'>Lecture Series</span></Link></li>

              </ul>
            </div>
            
            <div className={classes.home} id="home"></div>
            <div className={classes.root}>
                {/* <Hero /> */}
                <div id="about">
                  <About className="page"/>
                </div>
                <div id="whatsnew">
                  <WhatsNew className="page" />
                </div>
                <div id="stats"> 
                  <Stats className="page" />
                </div>
                <div id="prizes">
                  <Prizes className="page" />
                </div>
                <div id="goevents">
                  <GoEvents className="page" />
                </div>
                <div id="lseries">
                  <LectureSeries className="page" />
                </div>
            </div>
            

            
        </React.Fragment>
    )
}

export default Home

import React, {useEffect, useState} from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core';
import GoEvents from '../../Components/GoEvents/GoEvents'
import Prizes from '../../Components/Prizes';
import WhatsNewModal from '../../Components/WhatsNewModal/WhatsNewModal';
import Stats from '../../Components/Stats';
import LectureSeries from '../../Components/LectureSeries';
import main_bg from '../../Assets/Videos/try2.mp4'
import {Link} from 'react-scroll'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import About from '../../Components/About';
import WhatsNew from '../../Components/WhatsNew';
import { useInView } from 'react-intersection-observer';
import LottieAnimation from '../Lottie';
import Timer from '../../Components/Timer'

const useStyles= makeStyles({

  root: {
    height: '100%',
    minHeight: '70vh',
    background: '#1B1430',/* fallback for old browsers */
    background: '-webkit-linear-gradient(to top, #642A7F, #000000)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to top,#642A7F, #000000)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    '@media (max-width:599px)': {
      minHeight: '100vh',
    }
  },
  home: { 
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    background: 'black'
  },
  animationContainer: {
    padding: '100px',
  }
})

const Home = () => {
    const classes= useStyles();
    const { ref, inView, entry } = useInView({
      /* Optional options */
      threshold: 0,
    });
    
    return (
        <React.Fragment>
            
            <div className="pagination">
              <ul>
                <li><Link activeClass="active" to="home" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>Home</span></Link></li>
                <li><Link  to="about" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>About</span></Link></li>
                {/* <li><Link  to="whatsnew" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'> What's New</span></Link></li> */}
                <li><Link  to="stats" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>Stats</span></Link></li>
                <li><Link  to="prizes" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>Prizes</span></Link></li>
                <li><Link  to="goevents" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>Glimpse Of Events</span></Link></li>
                <li><Link  to="lseries" spy={true} smooth={true}><RadioButtonCheckedIcon /> <span className='span' id='litext'>Lecture Series</span></Link></li>

              </ul>
            </div>
            
            <div className={classes.home} id="home">
              
              <video 
              src={main_bg} 
              autoplay="true" 
              loop="true" 
              muted="true"
              style = {{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                opacity: 0.5,
                left: 0}}>
              </video>
              <div className="typewriter">
                <h1>Invictus</h1>
                <h2>Coming Soon...</h2>
                <Timer />
              </div>
              {/* <div className={classes.animationContainer}>
              <LottieAnimation lotti={spaceman} height={500} width={500} />
              </div> */}
            </div>
            <div className={classes.root}>
                <WhatsNewModal/>
                {/* <Hero /> */}
                <div id="about">
                  <About className="page"/>
                </div>
                {/* <div id="whatsnew">
                  <WhatsNew className="page" />
                </div> */}
                
                <div id="stats" > 
                  <Stats className="page" ref={ref}/>
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

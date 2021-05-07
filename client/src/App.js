import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Screens/Home/Home';
import Event from './Screens/Event';
import Events from './Screens/Events/index';
import FAQ from './Screens/FAQ';
import Sponsor from './Screens/Sponsor/Sponsor';
import Team from './Screens/Meet_the_team/Team';
import Schedule from './Screens/Schedule';
import { makeStyles } from '@material-ui/core';
import MouseParticles from "react-mouse-particles";
const useStyles= makeStyles({
  root: {
    height: '100%',
    minHeight: '60vh',
    '@media (max-width:599px)': {
      minHeight: '80vh',
    }
  },
  
})

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

function App() {
  const classes= useStyles();
  useEffect(() => {
    window.onunload = () => {
        // Clear the local storage
        localStorage.clear()
    }
  }, [])
  return (
    <Router>
      <ScrollToTop>
      <Header />
      <main className={classes.root}>
        <MouseParticles
            g={1}
            color="random"
            cull="MuiSvgIcon-root,MuiButton-root"
            level={6}
          />
        <div>
          <Route path='/' component={Home} exact />
          <Route path='/faq' component={FAQ} exact />
          <Route path='/events' component={Events} exact />
          <Route path='/sponsors' component={Sponsor} exact />
          <Route path='/schedule' component={Schedule} />
          <Route path='/team' component={Team} exact />
          <Route path='/events/:id' component={Event} />
        </div>
      </main>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;

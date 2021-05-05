import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Screens/Home/Home';
import Event from './Screens/Event';
import Events from './Screens/Events/index';
import FAQ from './Screens/FAQ';
import Sponsor from './Screens/Sponsor/Sponsor';
import Team from './Screens/Meet_the_team/Team';
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

function App() {
  const classes= useStyles();
  return (
    <Router>
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
          <Route path='/team' component={Team} exact />
          <Route path='/events/:id' component={Event} />
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

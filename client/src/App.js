import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer/Footer'
import Home from './Screens/Home';
import Event from './Screens/Event';
import Events from './Screens/Events';
import FAQ from './Screens/FAQ';
import Sponsor from './Screens/Sponsor';
import Team from './Screens/Team';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/faq' component={FAQ} exact />
          <Route path='/events' component={Events} exact />
          <Route path='/sponsors' component={Sponsor} exact />
          <Route path='/team' component={Team} exact />
          <Route path='/event/:id' component={Event} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Screens/Home';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Route path='/' component={Home} exact />
        <Container>
        
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

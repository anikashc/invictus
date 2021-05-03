import React from 'react';
import ParticlesBg from 'particles-bg'
import './HeroStyles.css'
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg type="lines" num={450} bg={true} />
      <div className="container valign-wrapper jc-center">
        <Container className="valign center-align white-text">
          <h1>
            INVICTUS
          </h1>

          <p className="big">
            Lets Begin
          </p>

          
          <Button size="large" variant="contained" color='danger' target="_blank" href="https://github.com/anikashc/invictus">Github</Button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
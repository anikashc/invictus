import React from 'react';
import ParticlesBg from 'particles-bg'
import './HeroStyles.css'
const Hero = () => {
  return (
    <section
      id="hero"
      className=""
    >
      <ParticlesBg type="lines" num={450} bg={true} />
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h2>
            INVICTUS
          </h2>

          <p className="big">
            Lets Begin
          </p>

          
          <a className="btn waves-light waves-effect" target="_blank" href="https://github.com/anikashc/invictus">Github</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
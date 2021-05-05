import { makeStyles, Container } from '@material-ui/core'
import React from 'react'
import {Carousel} from '3d-react-carousal';
import Slider from "react-slick";
import Box from '@material-ui/core/Box';
import './style.css'
import WhatsNew_bg from '../../Assets/Backgrounds/whats_new_bg.jpg'

const useStyles= makeStyles({
    root:{
        height: '50vh',
        width: '100%',
    },
    header:{  
      paddingTop: '20px',  
    color: '#FFFFFF', 
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    }
})
let slides = [
  <img  src="https://picsum.photos/800/300/?random" alt="1" />,
  <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/800/304/?random" alt="5" />   
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
const WhatsNew = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            
          <Box className={classes.header}>WHATS NEW</Box>
          {/* <Carousel slides={slides} autoplay={true} interval={2000}/> */}
          <Container>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </Container>
        </div>
    )
}

export default WhatsNew

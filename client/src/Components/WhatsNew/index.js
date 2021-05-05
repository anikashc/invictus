import { makeStyles} from '@material-ui/core'
import React from 'react'
import Slider from "react-slick";
import Box from '@material-ui/core/Box';
import './style.css'
import WhatsNew_bg from '../../Assets/Backgrounds/whats_new_bg.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles= makeStyles({
    root:{
        height: '70vh',
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
    },
    cardLife:{
      minWidth: 275,
    },
    cardcontent: {
      padding: 20,
      "&:last-child": {
        marginLeft: 20 
      }
    }
})
let slides = [
  <img  src="https://picsum.photos/700/300/?random" alt="1" />,
  <img  src="https://picsum.photos/700/301/?random" alt="2" />  ,
  <img  src="https://picsum.photos/700/302/?random" alt="3" />  ,
  <img  src="https://picsum.photos/700/303/?random" alt="4" />  ,
  <img src="https://picsum.photos/700/304/?random" alt="5" />   
];
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  className: "center",
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  centerPadding: "60px",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 
};
const WhatsNew = () => {
    const classes= useStyles();
    return (
        <div className={classes.root}>
          <CssBaseline />
          <Box className={classes.header}>WHATS NEW</Box>
          {/* <Carousel slides={slides} autoplay={true} interval={2000}/> */}
          <Container maxWidth="md">
            
            <Slider {...settings}>
           

                <Card className={classes.cardLife}>
                  <CardContent className={classes.cardcontent}>
                    
                    <img  src="https://picsum.photos/700/300/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/301/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/302/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/303/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/304/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/305/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
                <Card className={classes.cardLife}>
                  <CardContent>
                    
                    <img  src="https://picsum.photos/700/306/?random" alt="1" />

                    
                    
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>

            </Slider>
          </Container>
        </div>
    )
}

export default WhatsNew

import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root:{     
      background: '#1B1430',/* fallback for old browsers */
      background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: '100%',
      width: '100%',
      paddingTop: '120px',  
  },
  
  header:{  
    color: '#FFFFFF', 
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '4rem',
    textAlign: 'center',
    fontFamily: 'Rajdhani',
    lineHeight:'30px',
    '@media (max-width: 1130px)':{
      fontSize: '3.5rem',    
      lineHeight:'20px',
    },
    '@media (max-width: 1024px)':{
    fontSize: '3rem',    
    lineHeight:'15px',
  },
  '@media (max-width: 768px)':{
    fontSize: '2.5rem',    
    lineHeight:'10px',
  },
  },
  buttons:{
    paddingTop: '50px',
  },
  button: {
    background:'#D66496',
    fontFamily: 'Rajdhani',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 25px 5px 25px',
    width: '150px',
    marginBottom: '40px',
    "&:hover": {
      backgroundColor: '#DB4789'
    },
    '@media (max-width:599px)': {//mobile view
      display: 'none'
    },
  },
  menu: {
    marginBottom: '40px',
    fontFamily: 'Rajdhani',
    '@media (min-width:599px)': {//mobile view
      display: 'none',
    },
  }
});
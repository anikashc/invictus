import { makeStyles } from '@material-ui/core';
const styles = theme => ({
});
export const useStyles = makeStyles({
  holder: {
    background: '#1B1430',/* fallback for old browsers */
    background: '-webkit-linear-gradient(to top, #3c1053, #ad5389)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to top,#642A7F, #1B1430)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    minHeight: '100%',
    width: '100%',
    paddingTop: '80px',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#F5F5F5',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      "&:hover": {
        backgroundColor: 'rgba(255,20,20,.2)'
      },
    }
  },header:{  
    paddingTop: '20px',
    color: '#FFFFFF', 
    fontSize: '4rem',
    textAlign: 'center',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
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
});
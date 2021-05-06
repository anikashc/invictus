import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  title: {
    flexGrow: 1
  },
  navbar: {
    background: 'rgba(0, 0, 0, 0)',
    pointerEvents: 'none'
  },
  iconButton: {
    border:'none',
    outline:'none',
    color:'#D66496',
    pointerEvents: 'auto'
  },
  register: {
    background:'#D66496',
    fontFamily: 'Rajdhani',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 25px 5px 25px',
    pointerEvents: 'auto',
    "&:hover": {
      backgroundColor: '#DB4789'
    },
    '@media (max-width:599px)': {//mobile view
      display:'none'
    },

  },
  image: {
    height: '80px', 
    padding:'10px',
    pointerEvents: 'auto'
  }
});
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  title: {
    flexGrow: 1
  },
  navbar: {
    background: 'rgba(0, 0, 0, 0)'
  },
  iconButton: {
    border:'none',
    outline:'none',
    color:'#D66496',
  },
  register: {
    background:'#D66496',
    fontFamily: 'Rajdhani',
    color: 'white',
    fontWeight: 'bold',
    padding: '5px 25px 5px 25px',
    "&:hover": {
      backgroundColor: '#DB4789'
    }
  },
  image: {
    height: '80px', 
    padding:'10px'
  }
});
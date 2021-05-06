import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: 200,
    height: 350,
    transition: 'height 0.2s, width 0.2s',
    "&:hover": {
      height: 330,
      width: 190,
      "& $media": {
        height: 0
      },
      "& $desc": {
        maxHeight: 220,
        overflowY: 'auto',
      }
    },
    cursor:'pointer'
  },
  media: {
    height: 140,
    transition: 'height 0.3s',
  },
  heading: {
    fontFamily:'Rajdhani',
    fontWeight: '900',
    marginTop:'-10px',
    color:'#081261'
  },
  desc: {
    fontFamily:'Rajdhani',
    fontWeight: '900',
    maxHeight: 100,
    minWidth: 168,
    overflowY: 'hidden',
    overflowX: 'hidden',
    transition: 'height 0.3s',
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
  },
  details: {
    position: 'absolute',
    bottom: 7,
    right: 15,
    color:'#081261'
  },
  holder: {
    width: 200,
    height: 350,
    marginBottom: 50,
  }
});
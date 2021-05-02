import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  drawerPaper: {
    width: 300,
    '@media (max-width:599px)': {
      width:"100%",
      borderRadius: "0px 0px 0px 0px",
      background: 'rgba(241, 241, 241, 1)'
    },
    '@media (min-width:599px)': {
      borderRadius: "50px 0px 0px 50px",
      background: 'rgba(241, 241, 241, 0.8)'
    }
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '50px'
  },
  itemText: {
    fontFamily: 'Arial',
    fontSize: '25px',
    padding: "5px 0px 5px 50px"
  },
  itemButton: {
    color: "#231962",
    "&:hover": {
      backgroundColor: "#231962",
      color: "white"
    }
  }
});
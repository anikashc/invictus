import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  drawerPaper: {
    width: 300,
    '@media (max-width:599px)': {
      width:"100%"
    },
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  itemContainer: {
    padding: "0px"
  },
  itemText: {
    fontFamily: 'Montserrat',
    color: '#666666',
    fontSize: '25px',
  }
});
import { makeStyles } from '@material-ui/core';
import footer_bg from '../../Assets/Backgrounds/footer_bg.png'
export const useStyles = makeStyles({
  root:{
    width: '100%',
    height: '30vh',
    background: '#642A7F',
    '@media (max-width:599px)': //mobile screens
    {
      height: '20vh',
    }
  },
  footer: {
    background: `url(${footer_bg}) no-repeat`,
    backgroundSize: 'cover',
  },
  subtext: {//web view
    color: '#081261',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
    '@media (max-width:768px)': {//tablet view
      fontSize: '1rem',
    },
    '@media (max-width:599px)': {//mobile view
      fontSize: '0.8rem',
      lineHeight: '13px',
    },
  },
  helpCenterContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '120px',
    '& .MuiBox-root:nth-child(2)': {
        paddingTop: '19px',
      },
    '@media (max-width:599px)': {
      
    },
    '@media (max-width:374px)': {
     
    },
    '@media (max-width:320px)': {
      
    },
  },
  help: {
    padding: '3px 4px',
  },
  header: {
    paddingTop: '50px',
    letterSpacing: '0.05em',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.7rem',
    color: '#081261',
    '@media (max-width:768px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width:599px)': {
      fontSize: '1rem',
      lineHeight: '20px',
      padding: 0,
    },
  },
  sitemap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '120px',
    '& .MuiBox-root:nth-child(2)': {
      paddingTop: '18px',
    },
    '@media (max-width:599px)': {
    },
  },
  section: {
    padding: '3px 4px',
    '@media (max-width:599px)': {
      padding: '2px 4px',
    },
  },
  findus: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '120px 0px 0px 0px',
    '@media (max-width:599px)': {
    },
    '@media (max-width:374px)': {
     
    },
    '@media (max-width:320px)': {
     
    },
  },
  socialLinksContainer: {
    display: 'flex',
    padding: '20px 15px',
    '@media (max-width:599px)': {
      paddingTop: '20',
      flexDirection: 'column',
    },
  },
  iconsContainer: {
    '@media (max-width:599px)': {
      display: 'flex',
    },
  },
  findusLink: {
    color:'#081261',
    cursor: 'pointer',
    height: '40px',
    width: '40px',
    "&:hover": {
      color: "white"
    },
    '@media (max-width:599px)': {
    height: '20px',
    width: '20px',
    }
  },
  sitemapLink: {
    color:'#081261',
    cursor: 'pointer',
    textDecoration: 'none',
    "&:hover": {
      color: "white"
    }
  }
});
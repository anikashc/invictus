import { makeStyles } from '@material-ui/core';
import footer_bg from '../../Assets/Backgrounds/footer_bg.jpg'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '350px',
    background: `url(${footer_bg}) no-repeat`,
    backgroundSize: 'cover',
    '@media (max-width:599px)': {
      height: '150px',
    }
  },
  subtext: {
    color: '#081261',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.2rem',
    '@media (max-width:768px)': {
      fontSize: '0.6rem',
    },
    '@media (max-width:599px)': {
      fontSize: '11px',
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
      position: 'absolute',
      bottom: '138px',
      left: '15%',
    },
    '@media (max-width:374px)': {
      left: '12%',
    },
    '@media (max-width:320px)': {
      left: '5%',
    },
  },
  help: {
    padding: '3px 4px',
  },
  header: {
    paddingTop: '35px',
    fontSize: '30px',
    lineHeight: '40px',
    letterSpacing: '0.05em',
    fontFamily: 'Rajdhani',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '1.7rem',
    color: '#081261',
    '@media (max-width:768px)': {
      fontSize: '1rem',
    },
    '@media (max-width:599px)': {
      fontSize: '18px',
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
      position: 'absolute',
      bottom: '120px',
      right: '15%',
    },
    '@media (max-width:374px)': {
      right: '12%',
    },
    '@media (max-width:320px)': {
      right: '5%',
    },
  },
  section: {
    padding: '3px 4px',
    '@media (max-width:599px)': {
      padding: '5px 4px',
    },
  },
  findus: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '120px 0px 0px 0px',
    '@media (max-width:599px)': {
      position: 'absolute',
      bottom: '32px',
      right: '15%',
    },
    '@media (max-width:374px)': {
      right: '12%',
    },
    '@media (max-width:320px)': {
      right: '5%',
    },
  },
  socialLinksContainer: {
    display: 'flex',
    padding: '20px 15px',
    '@media (max-width:599px)': {
      padding: '0',
    },
  },
  iconsContainer: {
    '@media (max-width:599px)': {
      display: 'flex',
    },
  },
});

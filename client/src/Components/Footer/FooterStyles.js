import { makeStyles } from '@material-ui/core';
import logo from '../../Assets/invictus_logo.png'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '290px',
    background: '#F8F8F8',
    position: 'relative',
    '@media (max-width:599px)': {
      height: '260px',
      background: '#FFFFFF',
      borderRadius: '40px 40px 0px 0px',
    },
  },
  logoContainer: {
    background: `url(${logo}) no-repeat`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width:599px)': {
      position: 'absolute',
      bottom: '35px',
      left: '15%',
    },
    '@media (max-width:374px)': {
      left: '12%',
    },
    '@media (max-width:320px)': {
      left: '5%',
    },
  },
  logo: {
    width: '240px',
    paddingBottom: '5px',
    '@media (max-width:768px)': {
      width: '180px',
    },
    '@media (max-width:599px)': {
      width: '130px',
    },
  },
  subtext: {
    color: '#929292',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.2rem',
    '@media (max-width:768px)': {
      fontSize: '0.6rem',
    },
    '@media (max-width:599px)': {
      fontSize: '11px',
      lineHeight: '13px',
    },
  },
  emailLink: {
    color: '#FF767C',
  },
  helpCenterContainer: {
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
    padding: '1px 4px',
  },
  header: {
    paddingTop: '48px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#737373',
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
    padding: '9px 4px',
    '@media (max-width:599px)': {
      padding: '5px 4px',
    },
  },
  findus: {
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
